// ----------------------------------------------------------------------------
/**
	@constructor
	@extends	{vs.ViewerWidget}
*/

zfatlas.ui.FullScreenHelp = vs.util.extend(
// ----------------------------------------------------------------------------
// EXTENDS:
	vs.ElementWidget,
	/** @lends {zfatlas.ui.FullScreenHelp.prototype} */ {
		/** @type {string}	*/	widgetHandle: 'help',
		/** @type {string}	*/	cssClassName: "vs-widget",
		initialize: function() {
			this.element = new Element('DIV').addClassName(this.cssClassName).insert(
				'<H2>Movement</H2><P>Moving around in a slide is fairly intuitive.  Just hold down the left mouse button and drag the slide around.</P>' +
				'<HR>' +
				'<H2>Zoom</H2><P>To change the magnification, use either the zoom control in the upper-left corner or double-click with your mouse (shift + double-click zooms out).</P>' +
				'<HR>' +
				'<H2>Navigation</H2><P>If a slide is a member of a series, you can navigate to other slides in the series using either using the keys listed below or by clicking on a title in the list under the &quot;Other slides in this series&quot; panel.</P>' +
				'<HR>' +
				'<H2>Keys</H2><P>Frequent users might find these keyboard shortcuts helpful.</P>' +
				'<TABLE>' +
					'<TR><TD>-</TD><TD>Zoom out one level</TD></TR>' +
					'<TR><TD>+</TD><TD>Zoom in one level</TD></TR>' +
					'<TR><TD>(shift) +</TD><TD>Zoom in to highest resolution</TD></TR>' +
					'<TR><TD>(shift) -</TD><TD>Fit slide in window (if possible)</TD></TR>' +
					'<TR><TD>left arrow</TD><TD>Next slide in a series</TD></TR>' +
					'<TR><TD>right arrow</TD><TD>Previous slide in a series</TD></TR>' +
					'<TR><TD>(ctrl) left arrow</TD><TD>First slide in a series</TD></TR>' +
					'<TR><TD>(ctrl) right arrow</TD><TD>Last slide in a series</TD></TR>' +
					'<TR><TD>(spacebar)</TD><TD>Toggle this sliding panel</TD></TR>' +
					'<TR><TD>a</TD><TD>Open &quot;About this slide&quot;</TD></TR>' +
					'<TR><TD>k</TD><TD>Open &quot;Link to this slide&quot;</TD></TR>' +
					'<TR><TD>s</TD><TD>Open &quot;Other slides in this series&quot;</TD></TR>' +
					'<TR><TD>l</TD><TD>Open &quot;Labels on this slide&quot;</TD></TR>' +
					'<TR><TD>h or ?</TD><TD>Display this help</TD></TR>' +
				'</TABLE>' +
				'<HR>' +
				'<P>Please <A href="/contact.php">contact us</A> with any comments or issues you have.</P>'
			);
		}
	}
);
