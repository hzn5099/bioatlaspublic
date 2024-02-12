<?php

	include 'inc/base.php';
	include 'inc/twig.php';
	include 'inc/config.php';

	ob_start();

// ----------------------------------------------------------------------------

	$comment_file_name = 'comments.txt';
	// contact e-mails moved to inc/config.php

// ----------------------------------------------------------------------------

	if (isset($_POST, $_POST['comment'])) {

		array_walk_recursive($_POST, 'trim_scalars');

		if (has_content($_POST['comment'])) {

			$contact_info = '';
			if (has_content($_POST['name']))
				$contact_info .= htmlentities($_POST['name']);
			if (has_content($_POST['email']))
				$contact_info .= ', ' . htmlentities($_POST['email']);


			// Generate XML string
			$comment_xml = sprintf('<DIV class="comment"><DIV class="date">%s</DIV><DIV class="contact">%s</DIV><DIV class="ip">%s</DIV><DIV class="ua">%s</DIV><DIV class="text">%s</DIV></DIV>',
				date('r'),
				preg_replace('/[\\r\\n]+/', '<br>', $contact_info),
				$_SERVER['REMOTE_ADDR'],
				$_SERVER['HTTP_USER_AGENT'],
				$comment = preg_replace(
					// Replace OSX (\r) and Windows (\r\n) newlines with (\n);
					// replace 3+ returns with 2;
					// finally, replace \n with <br>
					array('/(?:\\r\\n?)/', '/\\n{3,}/', '/\\n/'),
					array("\n", '<br><br>', '<br>'),
					htmlentities($_POST['comment'])
				)
			) . "\n";


			// Save comment to file
			file_put_contents($comment_file_name, $comment_xml, FILE_APPEND);


			// Generate e-mail message body
			/*
				Make sure anything that gets mailed has had user-submitted content filtered
				with htmlentities() in order to avoid XSS attacks on webmail accounts.
			*/
			$email_message = sprintf("\n\n%s\n\n%s\n\n%s",
				date('r'),
				empty($contact_info) ? '[ No contact info provided ]' : wordwrap($contact_info, 70),
				wordwrap($comment, 70)
			);


			// Send comment via e-mail
			if (count($zf_contact_emails)) mail(
				implode(',', $zf_contact_emails),	// To:
				"Zebrafish Atlas Website Comment",	// Subject:
				$email_message						// Message body
			); // or setMessage('mail() failed.', 'Debug');


			// Redirect (to avoid duplicate POSTs)
			header('Location: http://'
				. $_SERVER['SERVER_NAME']
				. ($_SERVER['SERVER_PORT'] != '80' ? ':'.$_SERVER['SERVER_PORT'] : '')
				. $_SERVER['PHP_SELF']
				. '?submitted'
			);
			exit(0);
		}
	}

// ----------------------------------------------------------------------------

	echo $twig->render('contact.twig.html', array(
		'page' => array(
			'content' 			=> ob_get_clean()
		),
		'comment_submitted'		=> isset($_GET) && array_key_exists('submitted', $_GET)
	));
