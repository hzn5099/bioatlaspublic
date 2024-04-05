document.body.style.overflowX = "hidden";
document.body.style.overflowY = "hidden";
// document.getElementById("label_panel").style.overflowY = "scroll";
// document.getElementById("label_panel").style.maxHeight = "75%";

// available_samples = {
// "StitchedImage_Z" : [266]
// };
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    isMobile = true;
}
//create Label structure

Transverse_3dpf_samples=
    {

        '22_282_3-3dpfT1can':['1',1],
        '22_285_4-3dpfT4can':['4',2],
        '22_291_10-3dpfT10can':['10',3],
        '22_293_12-3dpfT12can':['12',4],
        '22_306_25-3dpfT25can':['25',5],
    }
Sagittal_3dpf_samples={
    '21_493_7-3dpfS7can':['7',1],
    '21_496_11-3dpfS11can':['11',2],
    '21_494_12-3dfS12can':['12',3]
}

Coronal_3dpf_samples={
    '20_1731_3-3dpfC3can':['3',1],
    '20_1727_10-3dpfC10can':['10',2],
    '20_1728_11-3dpfC11can':['11',3]
}

transverse_female_samples=
    {

        '2':['transverse_female',1],
        '4_4':['transverse_female',2],
        '7_8':['transverse_female',3],
        '8_9':['transverse_female',4],
        '10_11':['transverse_female',5],
        '14_14':['transverse_female',6],
        '17_16':['transverse_female',7],
        '20_19':['transverse_female',8],
        '26_25':['transverse_female',9],
        '27_27':['transverse_female',10],
        '29_30':['transverse_female',11],
        '32_33':['transverse_female',12],
        '34_35':['transverse_female',13],
        '35_37':['transverse_female',14],
        '37_40':['transverse_female',15],
        '39_43':['transverse_female',16],
        '40_46':['transverse_female',17],
        '42_49':['transverse_female',18],
        '44_54':['transverse_female',19],
        '46_57':['transverse_female',20],
        '48_61':['transverse_female',21],
        '50_65':['transverse_female',22],
        '51_66':['transverse_female',23],
        '52_67':['transverse_female',24]

    }

transverse_female_samples=
    {

        '2':['transverse_female',1],
        '4_4':['transverse_female',2],
        '7_8':['transverse_female',3],
        '8_9':['transverse_female',4],
        '10_11':['transverse_female',5],
        '14_14':['transverse_female',6],
        '17_16':['transverse_female',7],
        '20_19':['transverse_female',8],
        '26_25':['transverse_female',9],
        '27_27':['transverse_female',10],
        '29_30':['transverse_female',11],
        '32_33':['transverse_female',12],
        '34_35':['transverse_female',13],
        '35_37':['transverse_female',14],
        '37_40':['transverse_female',15],
        '39_43':['transverse_female',16],
        '40_46':['transverse_female',17],
        '42_49':['transverse_female',18],
        '44_54':['transverse_female',19],
        '46_57':['transverse_female',20],
        '48_61':['transverse_female',21],
        '50_65':['transverse_female',22],
        '51_66':['transverse_female',23],
        '52_67':['transverse_female',24]

    }

sagittal_male_37_samples=
    {
        '37_11':['sagittal_male_37',1],
        '37_12':['sagittal_male_37',2],
        '37_13':['sagittal_male_37',3],
        '37_14':['sagittal_male_37',4],
        '37_15':['sagittal_male_37',5],
        '37_16':['sagittal_male_37',6],
        '37_17':['sagittal_male_37',7],
        '37_18':['sagittal_male_37',8],
        '37_19':['sagittal_male_37',9],
        '37_20':['sagittal_male_37',10],
        '37_21':['sagittal_male_37',11],
        '37_22':['sagittal_male_37',12],
        '37_23a':['sagittal_male_37',13],
        '37_23b':['sagittal_male_37',14],
        '37_24':['sagittal_male_37',15],
        '37_25':['sagittal_male_37',16],
        '37_26':['sagittal_male_37',17],
        '37_27':['sagittal_male_37',18],
        '37_28':['sagittal_male_37',19],
        '37_30':['sagittal_male_37',20],
        '37_34':['sagittal_male_37',21],


    }


transverse_male_88_samples=
    {
        '88_4':['transverse_male_88',1],
        '88_8':['transverse_male_88',2],
        '88_10':['transverse_male_88',3],
        '88_11':['transverse_male_88',4],
        '88_12':['transverse_male_88',5],
        '88_13':['transverse_male_88',6],
        '88_15':['transverse_male_88',7],
        '88_17':['transverse_male_88',8],
        '88_18':['transverse_male_88',9],
        '88_19':['transverse_male_88',10],
        '88_20':['transverse_male_88',11],
        '88_21':['transverse_male_88',12],
        '88_23':['transverse_male_88',13],
        '88_25':['transverse_male_88',14],
        '88_26':['transverse_male_88',15],
        '88_27':['transverse_male_88',16],
        '88_28':['transverse_male_88',17],
        '88_29':['transverse_male_88',18],
        '88_33':['transverse_male_88',19],
        '88_35':['transverse_male_88',20],
        '88_37':['transverse_male_88',21],
        '88_39':['transverse_male_88',22],
        '88_41':['transverse_male_88',23],
        '88_43':['transverse_male_88',24],
        '88_45':['transverse_male_88',25],
        '88_48':['transverse_male_88',26],
        '88_50':['transverse_male_88',27],
        '88_52':['transverse_male_88',28],
        '88_57':['transverse_male_88',29],
        '88_59':['transverse_male_88',30],
        '88_61':['transverse_male_88',31],
        '88_62':['transverse_male_88',32],
        '88_63':['transverse_male_88',33],
        '88_65':['transverse_male_88',34],
        '88_69':['transverse_male_88',35],
        '88_71':['transverse_male_88',36],
        '88_73':['transverse_male_88',37],
        '88_75':['transverse_male_88',38],
        '88_79':['transverse_male_88',39],
        '88_81':['transverse_male_88',40],
        '88_82':['transverse_male_88',41]
    }


coronal_male_59_samples=
    {
        '59_55':['coronal_male_59',1],
        '59_56':['coronal_male_59',2],
        '59_57':['coronal_male_59',3],
        '59_58':['coronal_male_59',4],
        '59_59':['coronal_male_59',5],
        '59_60':['coronal_male_59',6],
        '59_61':['coronal_male_59',7],
        '59_62':['coronal_male_59',8],
        '59_63':['coronal_male_59',9],
        '59_64':['coronal_male_59',10],
        '59_65':['coronal_male_59',11],
        '59_66':['coronal_male_59',12],
        '59_67':['coronal_male_59',13],
        '59_68':['coronal_male_59',14],
        '59_69':['coronal_male_59',15],
        '59_70':['coronal_male_59',16],
        '59_71':['coronal_male_59',17],
        '59_72':['coronal_male_59',18],
        '59_73':['coronal_male_59',19],
        '59_74':['coronal_male_59',20],
        '59_75':['coronal_male_59',21],
        '59_77':['coronal_male_59',22]
    }

sagittal_female_64_samples=
    {
        '64_1':['sagittal_female_64',1],
        '64_2':['sagittal_female_64',2],
        '64_3':['sagittal_female_64',3],
        '64_4':['sagittal_female_64',4],
        '64_5':['sagittal_female_64',5],
        '64_7':['sagittal_female_64',6],
        '64_8':['sagittal_female_64',7],
        '64_9':['sagittal_female_64',8],
        '64_10a':['sagittal_female_64',9],
        '64_10b':['sagittal_female_64',10],
        '64_11a':['sagittal_female_64',11],
        '64_11b':['sagittal_female_64',12],
        '64_12':['sagittal_female_64',13],
        '64_13':['sagittal_female_64',14],
        '64_14':['sagittal_female_64',15],
        '64_20a':['sagittal_female_64',16],
        '64_20b':['sagittal_female_64',17],
        '64_21':['sagittal_female_64',18],
        '64_23':['sagittal_female_64',19],
        '64_24':['sagittal_female_64',20],
        '64_27':['sagittal_female_64',21],
        '64_28':['sagittal_female_64',22],
        '64_30':['sagittal_female_64',23],
// '64_32':['sagittal_female_64',24],
    '64_33':['sagittal_female_64',24]
}

sagittal_female_ephippium_16_samples=
    {
        '16_5':['sagittal_female_ephippium_16',1],
        '16_7':['sagittal_female_ephippium_16',2],
        '16_9':['sagittal_female_ephippium_16',3],
        '16_11':['sagittal_female_ephippium_16',4],
        '16_13':['sagittal_female_ephippium_16',5],
        '16_15':['sagittal_female_ephippium_16',6],
        '16_19':['sagittal_female_ephippium_16',7],
        '16_21':['sagittal_female_ephippium_16',8],
        '16_23':['sagittal_female_ephippium_16',9]
    }

sagittal_female_resting_egg_17_samples=
    {
        '17_13':['sagittal_female_resting_egg_17',1],
        '17_15':['sagittal_female_resting_egg_17',2],
        '17_17':['sagittal_female_resting_egg_17',3],
        '17_19':['sagittal_female_resting_egg_17',4],
        '17_21':['sagittal_female_resting_egg_17',5]
    }

transverse_female_57_samples=
    {
        '57_2':['transverse_female_57',1],
        '57_3':['transverse_female_57',2],
        '57_4':['transverse_female_57',3],
        '57_6':['transverse_female_57',4],
        '57_7':['transverse_female_57',5],
        '57_8':['transverse_female_57',6],
        '57_9':['transverse_female_57',7],
        '57_10':['transverse_female_57',8],
        '57_11':['transverse_female_57',9],
        '57_12':['transverse_female_57',10],
        '57_14':['transverse_female_57',11],
        '57_15':['transverse_female_57',12],
        '57_16':['transverse_female_57',13],
        '57_17':['transverse_female_57',14],
        '57_19':['transverse_female_57',15],
        '57_22':['transverse_female_57',16],
        '57_25':['transverse_female_57',17],
        '57_27':['transverse_female_57',18],
        '57_30':['transverse_female_57',19],
        '57_31':['transverse_female_57',20],
        '57_32':['transverse_female_57',21],
        '57_33':['transverse_female_57',22],
        '57_34':['transverse_female_57',23],
        '57_35':['transverse_female_57',24],
        '57_37':['transverse_female_57',25],
        '57_40':['transverse_female_57',26],
        '57_41':['transverse_female_57',27],
        '57_43':['transverse_female_57',28],
        '57_46':['transverse_female_57',29],
        '57_48':['transverse_female_57',30],
        '57_49':['transverse_female_57',31],
        '57_52':['transverse_female_57',32],
        '57_54':['transverse_female_57',33],
        '57_57':['transverse_female_57',34],
        '57_58':['transverse_female_57',35],
        '57_61':['transverse_female_57',36],
        '57_63':['transverse_female_57',37],
        '57_65':['transverse_female_57',38],
        '57_66':['transverse_female_57',39],
        '57_67':['transverse_female_57',40],
        '57_68':['transverse_female_57',41],
    }

coronal_female_59_samples=
    {
        '59_28':['coronal_female_59',1],
        '59_29':['coronal_female_59',2],
        '59_31':['coronal_female_59',3],
        '59_32':['coronal_female_59',4],
        '59_34':['coronal_female_59',5],
        '59_36':['coronal_female_59',6],
        '59_37':['coronal_female_59',7],
        '59_38':['coronal_female_59',8],
        '59_39':['coronal_female_59',9],
        '59_40':['coronal_female_59',10],
        '59_41':['coronal_female_59',11],
        '59_42':['coronal_female_59',12],
        '59_43':['coronal_female_59',13],
        '59_44':['coronal_female_59',14],
        '59_45':['coronal_female_59',15],
        '59_46':['coronal_female_59',16],
        '59_47':['coronal_female_59',17],
        '59_48':['coronal_female_59',18],
        '59_50':['coronal_female_59',19],
        '59_51':['coronal_female_59',20],
        '59_53':['coronal_female_59',21],
        '59_54':['coronal_female_59',22],
        '59_55':['coronal_female_59',23],
        '59_56':['coronal_female_59',24],
        '59_57':['coronal_female_59',25],
        '59_58':['coronal_female_59',26],
        '59_60':['coronal_female_59',27],
        '59_61':['coronal_female_59',28],
        '59_64':['coronal_female_59',29],
        '59_66':['coronal_female_59',30],
        '59_67':['coronal_female_59',31],
        '59_68':['coronal_female_59',32],
        '59_69':['coronal_female_59',33],
        '59_70a':['coronal_female_59',34],
        '59_70b':['coronal_female_59',35],
        '59_72':['coronal_female_59',36],
        '59_73':['coronal_female_59',37],
        '59_75':['coronal_female_59',38],
        '59_77':['coronal_female_59',39]
    }


sagittal_female_samples=
    {

        '4_Sag1':['sagittal_female',1],
        '5_Sag2a':['sagittal_female',2],
        '6_Sag2':['sagittal_female',3],
        '7_Sag3a':['sagittal_female',4],
        '8_Sag3':['sagittal_female',5],
        '9_Sag4c':['sagittal_female',6],
        '10_Sag4':['sagittal_female',7],
        '11_Sag4a':['sagittal_female',8],
        '12_Sag4b':['sagittal_female',9],
        '13_Sag5':['sagittal_female',10],
        '14_Sag6a':['sagittal_female',11],
        '15_Sag6':['sagittal_female',12],
        '16_Sag7':['sagittal_female',13]
    }
coronal_female_samples=
    {

        '59_29b':['coronal_female',1],
        '59_32a':['coronal_female',2],
        '59_37b':['coronal_female',3],
        '59_40a':['coronal_female',4],
        '59_44a':['coronal_female',5],
        '59_46a':['coronal_female',6],
        '59_47a':['coronal_female',7],
        '59_50b':['coronal_female',8],
        '59_51a':['coronal_female',9],
        '59_53a':['coronal_female',10],
        '59_55':['coronal_female',11],
        '59_58':['coronal_female',12],
        '59_60':['coronal_female',13],
        '59_64':['coronal_female',14],
        '59_69':['coronal_female',15],
        '59_70a':['coronal_female',16],
        '59_70b':['coronal_female',17],
        '59_73':['coronal_female',18],
        '59_77a':['coronal_female',19],
        '59_75':['coronal_female',20]
    }

coronal_male_samples=
    {

        '59_55':['coronal_male',1],
        '59_56':['coronal_male',2],
        '59_57':['coronal_male',3],
        '59_61':['coronal_male',4],
        '59_65':['coronal_male',5],
        '59_67':['coronal_male',6],
        '59_70':['coronal_male',7],
        '59_73':['coronal_male',8],
        '59_74':['coronal_male',9]
    }

sagittal_male_samples=
    {
        '8_1':['sagittal_male',1],
        '8_2':['sagittal_male',2],
        '8_3':['sagittal_male',3],
        '8_4':['sagittal_male',4],
        '8_5':['sagittal_male',5],
        '8_6':['sagittal_male',6],
        '8_7':['sagittal_male',7],
        '8_8':['sagittal_male',8],
    }


transverse_male_samples=
    {

        '88_4':['transverse_male',1],
        '88_8':['transverse_male',2],
        '88_10':['transverse_male',3],
        '88_13':['transverse_male',4],
        '88_17':['transverse_male',5],
        '88_21':['transverse_male',6],
        '88_25':['transverse_male',7],
        '88_27':['transverse_male',8],
        '88_33':['transverse_male',9],
        '88_39':['transverse_male',10],
        '88_43':['transverse_male',11],
        '88_59':['transverse_male',12],
        '88_75':['transverse_male',13],
        '88_79':['transverse_male',14],
        '88_82':['transverse_male',15]
    }


AAA392_samples=
    {
        'MIP_25um':['AAA392',1],
    }

sagittal_female_common_pain_reliever_samples={
    '74_9':['sagittal_female_common_pain_reliever',1],
    '74_11':['sagittal_female_common_pain_reliever',2],
    '74_12':['sagittal_female_common_pain_reliever',3],
    '74_13':['sagittal_female_common_pain_reliever',4],
    '74_14a':['sagittal_female_common_pain_reliever',5],
    '74_14b':['sagittal_female_common_pain_reliever',6],
    '74_15a':['sagittal_female_common_pain_reliever',7],
    '74_15b':['sagittal_female_common_pain_reliever',8],
    '74_16':['sagittal_female_common_pain_reliever',9],
    '74_19':['sagittal_female_common_pain_reliever',10],
    '74_22':['sagittal_female_common_pain_reliever',11],
    '74_24':['sagittal_female_common_pain_reliever',12],
    '74_21':['sagittal_female_common_pain_reliever',13],
}
// coronal_female_samples=
// {

// '59_28a':['coronal_female',1],
// '59_29b':['coronal_female',2],
// '59_31a':['coronal_female',3],
// '59_32a':['coronal_female',4],
// '59_34a':['coronal_female',5],
// '59_36a':['coronal_female',6],
// '59_37b':['coronal_female',7],
// '59_38b':['coronal_female',8],
// '59_39b':['coronal_female',9],
// '59_40a':['coronal_female',10],
// '59_41a':['coronal_female',11],
// '59_42a':['coronal_female',12],
// '59_43b':['coronal_female',13],
// '59_44a':['coronal_female',14],
// '59_45a':['coronal_female',15],
// '59_46a':['coronal_female',16],
// '59_47a':['coronal_female',17],
// '59_48a':['coronal_female',18],
// '59_50b':['coronal_female',19],
// '59_51a':['coronal_female',20],
// '59_53a':['coronal_female',21],
// '59_54b':['coronal_female',22],
// '59_55':['coronal_female',23],
// '59_56':['coronal_female',24],
// '59_57':['coronal_female',25],
// '59_58':['coronal_female',26],
// '59_60':['coronal_female',27],
// '59_61':['coronal_female',28],
// '59_64':['coronal_female',29],
// '59_66':['coronal_female',30],
// '59_67':['coronal_female',31],
// '59_68':['coronal_female',32],
// '59_69':['coronal_female',33],
// '59_70a':['coronal_female',34],
// '59_70b':['coronal_female',35],
// '59_72':['coronal_female',36],
// '59_73':['coronal_female',37],
// '59_77a':['coronal_female',38],
// '59_75':['coronal_female',39]
// }


svg_label_dict={}

svg_label_dict['sagittal_female_common_pain_reliever']={
    '74_9':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_female_common_pain_reliever_svg/74_9.svg',
    '74_11':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_female_common_pain_reliever_svg/74_11.svg',
    '74_12':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_female_common_pain_reliever_svg/74_12.svg',
    '74_13':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_female_common_pain_reliever_svg/74_13.svg',
    '74_14a':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_female_common_pain_reliever_svg/74_14a.svg',
    '74_14b':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_female_common_pain_reliever_svg/74_14b.svg',
    '74_15a':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_female_common_pain_reliever_svg/74_15a.svg',
    '74_15b':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_female_common_pain_reliever_svg/74_15b.svg',
    '74_16':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_female_common_pain_reliever_svg/74_16.svg',
    '74_19':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_female_common_pain_reliever_svg/74_19.svg',
    '74_22':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_female_common_pain_reliever_svg/74_22.svg',
    '74_24':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_female_common_pain_reliever_svg/74_24.svg',
    '74_21':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_female_common_pain_reliever_svg/74_21.svg'
}
svg_label_dict['Transverse_3dpf']={
    '22_282_3-3dpfT1can':'../../../assets/EC2/output/anatomical_reference_histology_zf/Transverse_3dpf_svg/22_282_3-3dpfT1can.svg',
    '22_285_4-3dpfT4can':'../../../assets/EC2/output/anatomical_reference_histology_zf/Transverse_3dpf_svg/22_285_4-3dpfT4can.svg',
    '22_291_10-3dpfT10can':'../../../assets/EC2/output/anatomical_reference_histology_zf/Transverse_3dpf_svg/22_291_10-3dpfT10can.svg',
    '22_293_12-3dpfT12can':'../../../assets/EC2/output/anatomical_reference_histology_zf/Transverse_3dpf_svg/22_293_12-3dpfT12can.svg',
    '22_306_25-3dpfT25can':'../../../assets/EC2/output/anatomical_reference_histology_zf/Transverse_3dpf_svg/22_306_25-3dpfT25can.svg'

}
svg_label_dict['Coronal_3dpf']={
    '20_1731_3-3dpfC3can':'../../../assets/EC2/output/anatomical_reference_histology_zf/Coronal_3dpf_svg/dzi_output.svg',
    '20_1727_10-3dpfC10can':'../../../assets/EC2/output/anatomical_reference_histology_zf/Coronal_3dpf_svg/20_1727_10-3dpfC10can.svg',
    '20_1728_11-3dpfC11can':'../../../assets/EC2/output/anatomical_reference_histology_zf/Coronal_3dpf_svg/20_1728_11-3dpfC11can.svg',
}
svg_label_dict['Sagittal_3dpf']={

    '21_493_7-3dpfS7can':'../../../assets/EC2/output/anatomical_reference_histology_zf/Sagittal_3dpf_svg/21_493_7-3dpfS7can.svg',
    '21_496_11-3dpfS11can':'../../../assets/EC2/output/anatomical_reference_histology_zf/Sagittal_3dpf_svg/21_496_11-3dpfS11can.svg',
    '21_494_12-3dfS12can':'../../../assets/EC2/output/anatomical_reference_histology_zf/Sagittal_3dpf_svg/21_494_12-3dfS12can.svg',

}








svg_label_dict['transverse_female_57']={

}
svg_label_dict['transverse_male_88']={

}


svg_label_dict['sagittal_male_37']={
}




svg_label_dict['coronal_male_59']={
}


svg_label_dict['sagittal_female_64']={
}


svg_label_dict['sagittal_female_ephippium_16']={
}

svg_label_dict['sagittal_female_resting_egg_17']={
}

svg_label_dict['coronal_female_59']={
}


svg_label_dict['coronal_female']={

    '59_29b':'../../../assets/EC2/output/anatomical_reference_histology_zf/coronal_female_svg/59_29b.svg',
    '59_32a':'../../../assets/EC2/output/anatomical_reference_histology_zf/coronal_female_svg/59_32a.svg',
    '59_37b':'../../../assets/EC2/output/anatomical_reference_histology_zf/coronal_female_svg/59_37b.svg',
    '59_40a':'../../../assets/EC2/output/anatomical_reference_histology_zf/coronal_female_svg/59_40a.svg',
    '59_44a':'../../../assets/EC2/output/anatomical_reference_histology_zf/coronal_female_svg/59_44a.svg',
    '59_46a':'../../../assets/EC2/output/anatomical_reference_histology_zf/coronal_female_svg/59_46a.svg',
    '59_47a':'../../../assets/EC2/output/anatomical_reference_histology_zf/coronal_female_svg/59_47a.svg',
    '59_50b':'../../../assets/EC2/output/anatomical_reference_histology_zf/coronal_female_svg/59_50b.svg',
    '59_51a':'../../../assets/EC2/output/anatomical_reference_histology_zf/coronal_female_svg/59_51a.svg',
    '59_53a':'../../../assets/EC2/output/anatomical_reference_histology_zf/coronal_female_svg/59_53a.svg',
    '59_53a':'../../../assets/EC2/output/anatomical_reference_histology_zf/coronal_female_svg/59_53a.svg',
    '59_55':'../../../assets/EC2/output/anatomical_reference_histology_zf/coronal_female_svg/59_55.svg',
    '59_58':'../../../assets/EC2/output/anatomical_reference_histology_zf/coronal_female_svg/59_58.svg',
    '59_60':'../../../assets/EC2/output/anatomical_reference_histology_zf/coronal_female_svg/59_60.svg',
    '59_64':'../../../assets/EC2/output/anatomical_reference_histology_zf/coronal_female_svg/59_64.svg',
    '59_69':'../../../assets/EC2/output/anatomical_reference_histology_zf/coronal_female_svg/59_69.svg',
    '59_70a':'../../../assets/EC2/output/anatomical_reference_histology_zf/coronal_female_svg/59_70a.svg',
    '59_70b':'../../../assets/EC2/output/anatomical_reference_histology_zf/coronal_female_svg/59_70b.svg',
    '59_73':'../../../assets/EC2/output/anatomical_reference_histology_zf/coronal_female_svg/59_73.svg',
    '59_77a':'../../../assets/EC2/output/anatomical_reference_histology_zf/coronal_female_svg/59_77a.svg',
    '59_75':'../../../assets/EC2/output/anatomical_reference_histology_zf/coronal_female_svg/59_75.svg'
}


svg_label_dict['sagittal_female']={

    '4_Sag1':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_female_svg/4_Sag1.svg',
    '5_Sag2a':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_female_svg/5_Sag2a.svg',
    '6_Sag2':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_female_svg/6_Sag2.svg',
    '7_Sag3a':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_female_svg/7_Sag3a.svg',
    '8_Sag3':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_female_svg/8_Sag3.svg',
    '9_Sag4c':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_female_svg/9_Sag4c.svg',
    '10_Sag4':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_female_svg/10_Sag4.svg',
    '11_Sag4a':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_female_svg/11_Sag4a.svg',
    '12_Sag4b':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_female_svg/12_Sag4b.svg',
    '13_Sag5':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_female_svg/13_Sag5.svg',
    '14_Sag6a':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_female_svg/14_Sag6a.svg',
    '15_Sag6':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_female_svg/15_Sag6.svg',
    '16_Sag7':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_female_svg/16_Sag7.svg',
}

svg_label_dict['transverse_female']={

    '13_Sag5_5':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_female_svg/13_Sag5_5.svg',
    '2':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_female_svg/2.svg',
    '4_4':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_female_svg/4_4.svg',
    '7_8':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_female_svg/7_8.svg',
    '8_9':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_female_svg/8_9.svg',
    '10_11':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_female_svg/10_11.svg',
    '14_14':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_female_svg/14_14.svg',
    '17_16':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_female_svg/17_16.svg',
    '20_19':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_female_svg/20_19.svg',
    '26_25':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_female_svg/26_25.svg',
    '27_27':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_female_svg/27_27.svg',
    '29_30':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_female_svg/29_30.svg',
    '32_33':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_female_svg/32_33.svg',
    '34_35':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_female_svg/34_35.svg',
    '35_37':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_female_svg/35_37.svg',
    '37_40':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_female_svg/37_40.svg',
    '39_43':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_female_svg/39_43.svg',
    '40_46':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_female_svg/40_46.svg',
    '42_49':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_female_svg/42_49.svg',
    '44_54':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_female_svg/44_54.svg',
    '46_57':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_female_svg/46_57.svg',
    '48_61':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_female_svg/48_61.svg',
    '50_65':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_female_svg/50_65.svg',
    '51_66':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_female_svg/51_66.svg',
    '52_67':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_female_svg/52_67.svg',
}

svg_label_dict['coronal_male']={

    '59_55':'../../../assets/EC2/output/anatomical_reference_histology_zf/coronal_male_svg/59_55.svg',
    '59_56':'../../../assets/EC2/output/anatomical_reference_histology_zf/coronal_male_svg/59_56.svg',
    '59_57':'../../../assets/EC2/output/anatomical_reference_histology_zf/coronal_male_svg/59_57.svg',
    '59_61':'../../../assets/EC2/output/anatomical_reference_histology_zf/coronal_male_svg/59_61.svg',
    '59_65':'../../../assets/EC2/output/anatomical_reference_histology_zf/coronal_male_svg/59_65.svg',
    '59_67':'../../../assets/EC2/output/anatomical_reference_histology_zf/coronal_male_svg/59_67.svg',
    '59_70':'../../../assets/EC2/output/anatomical_reference_histology_zf/coronal_male_svg/59_70.svg',
    '59_73':'../../../assets/EC2/output/anatomical_reference_histology_zf/coronal_male_svg/59_73.svg',
    '59_74':'../../../assets/EC2/output/anatomical_reference_histology_zf/coronal_male_svg/59_74.svg',
}


svg_label_dict['sagittal_male']={

    '8_1':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_male_svg/8_1.svg',
    '8_2':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_male_svg/8_2.svg',
    '8_3':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_male_svg/8_3.svg',
    '8_4':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_male_svg/8_4.svg',
    '8_5':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_male_svg/8_5.svg',
    '8_6':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_male_svg/8_6.svg',
    '8_7':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_male_svg/8_7.svg',
    '8_8':'../../../assets/EC2/output/anatomical_reference_histology_zf/sagittal_male_svg/8_8.svg',
}

svg_label_dict['transverse_male']={

    '88_4':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_male_svg/88_4.svg',
    '88_8':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_male_svg/88_8.svg',
    '88_10':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_male_svg/88_10.svg',
    '88_13':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_male_svg/88_13.svg',
    '88_17':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_male_svg/88_17.svg',
    '88_21':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_male_svg/88_21.svg',
    '88_25':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_male_svg/88_25.svg',
    '88_27':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_male_svg/88_27.svg',
    '88_33':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_male_svg/88_33.svg',
    '88_39':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_male_svg/88_39.svg',
    '88_43':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_male_svg/88_43.svg',
    '88_59':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_male_svg/88_59.svg',
    '88_75':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_male_svg/88_75.svg',
    '88_79':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_male_svg/88_79.svg',
    '88_82':'../../../assets/EC2/output/anatomical_reference_histology_zf/transverse_male_svg/88_82.svg'
}



svg_label_dict['AAA392']={

    'MIP_25um':'../../../assets/EC2/output/anatomical_reference_histology_zf/AAA392_svg/AAA392.svg',

}



this_is_the_first_click=1

//Link handling
var test_link_suffix="";
var full_link = window.location.href;
load_vars={};
test_link_suffix=full_link.split("?")[1].split("&");

for(entry in test_link_suffix){
    var Tentry=test_link_suffix[entry].split("=");
    load_vars[Tentry[0]]=Tentry[1];
}
console.log(load_vars)





global_label_dict={}


// var drowndown_div = document.getElementById("Label_dropdown");
// for(var idx=0; idx<treatments.length; idx++){
// var aTag = document.createElement('a');
// // aTag.setAttribute('href',"Joining_the_Fork_ViewTool1.php?"+available_samples[idx]+"#"+target_file_reduction);
// label_PATH=treatments[idx];

// aTag.onclick = function(j) { return function() {openNav(j+''); }; }(label_PATH);
// // aTag.setAttribute('href',"?t="+treatments[idx]+"&s="+"");
// aTag.innerHTML = treatments[idx];
// drowndown_div.appendChild(aTag);
// }





//For local development
var available_samples=["StitchedImage_Z048_L001","StitchedImage_Z049_L001","StitchedImage_Z050_L001"]

//For full dataset (online)

available_samples=[]
var url=""

treatment_loadin=load_vars["t"]
sample_loadin=load_vars["s"]
z_loadin=load_vars["z"]



ontology_color_dict={'Esophagus':'#006600', 'Esophageal Dilator Muscle':'#330099', 'Cecum':'#009900', 'Epithelial Cecum':'#CC00CC', 'Microvilli Cecum':'#FFFF66', 'Midgut':'#00CC00', 'Epithelial Midgut':'#CC00CC', 'Microvilli Midgut':'#FFFF66', 'Peritrophic Membrane':'#000000', 'Hindgut':'#00CC33', 'Epithelial Hindgut':'#CC00CC', 'Microvilli Hindgut':'#FFFF66', 'Labrum':'#000099', 'Labral Gland Cell':'#FFFF99', 'Mandible':'#00FFFF', 'Maxillae':'#0066CC', 'Food Channel':'#CCFF99',	 'Ommatidium':'#990000', 'Melanin Pigment ':'#FF9933', 'Optic Nerve':'#660099', 'Optic Lobe ':'#9966FF', 'Cerebral Ganglion':'#EC008C', 'Nerve Cord':'#FF6633', 'Ocellus':'#FFCC00','Ovary':'#FFFF00', 'Embryo':'#CCCCFF', 'Fat Cell':'#F7941D', 'Antennal Muscle':'#00000066', 'Anterior Carapace Adductor Muscle':'#3300FF', 'Posterior Carapace Adductor Muscle':'#0033FF', 'Esophageal Dilator Muscle':'#330099', 'Levator Muscle of Labrum':'#000099', 'Circular Muscle ':'#6600CC', 'Transverse Mandibular Muscle':'#3300CC', 'Transverse Muscle of Mandible':'#0000CC', 'Transverse Mandibular Tendon':'#660099', 'Dorsal Longitudinal Muscle':'#3300cc', 'Ventral Longitudinal Muscle':'#0000CC', 'Horizontal Muscle':'#6600FF', 'Postabdominal Muscle':'#9933FF', 'Rectal Dilator Muscle':'#6600FF','Heart':'#FF0000', 'Protopodite ':'#CC9900', 'Ramus':'#996600', 'Seta':'#775000', 'Trunk Limb 1 ':'#CC9900', 'Epipodite 1':'#996600', 'Setae of Trunk Limb 1 ':'#077500', 'Trunk Limb 2 ':'#CC9900', 'Epipodite 2':'#996600', 'Trunk Limb 3 ':'#CC9900', 'Filter Plate 3':'#775000', 'Epipodite 3':'#996600', 'Trunk Limb 4 ':'#CC9900', 'Filter Plate 4':'#775000', 'Epipodite 4':'#996600', 'Trunk Limb 5 ':'#CC9900', 'Epipodite 5':'#996600','Tubule ':'#00FFFF', 'End Sac ':'#0099CC', 'Postabdomen':'#66FF00', 'Postabdominal Claw ':'#660033', 'Postabdominal Process':'#66FF00'}

//parse3
// ontology_dict={'Body':{'display name':'Body','parent structure':'Body','anatomical id':0,'parent id':999999999,'color':'#FFFFFF'}, 'Digestive':{'display name':'Digestive','parent structure':'Body','anatomical id':1000,'parent id':0,'color':'#00C900'}, 'Esophagus':{'display name':'Esophagus','parent structure':'Digestive','anatomical id':1100,'parent id':1000,'color':'#00A7AA'}, 'Cecum':{'display name':'Cecum','parent structure':'Digestive','anatomical id':1102,'parent id':1000,'color':'#35FF90'}, 'Epithelial Cecum':{'display name':'Epithelial Cell','parent structure':'Cecum','anatomical id':1103,'parent id':1102,'color':'#00D477'}, 'Microvilli Cecum':{'display name':'Microvilli','parent structure':'Cecum','anatomical id':1104,'parent id':1102,'color':'#1A7400'}, 'Midgut':{'display name':'Midgut','parent structure':'Digestive','anatomical id':1200,'parent id':1000,'color':'#95FF7F'}, 'Epithelial Midgut':{'display name':'Epithelial Cell','parent structure':'Midgut','anatomical id':1201,'parent id':1200,'color':'#49FF15'}, 'Microvilli Midgut':{'display name':'Microvilli','parent structure':'Epithelial Cell','anatomical id':1202,'parent id':1103,'color':'#00AA2F'}, 'Hindgut':{'display name':'Hindgut','parent structure':'Digestive','anatomical id':1300,'parent id':1000,'color':'#D0FFAA'}, 'Epithelial Hindgut':{'display name':'Epithelial Cell','parent structure':'Hindgut','anatomical id':1301,'parent id':1300,'color':'#B2FF35'}, 'Microvilli Hindgut':{'display name':'Microvilli','parent structure':'Epithelial Cell','anatomical id':1302,'parent id':1103,'color':'#759400'}, 'Labrum':{'display name':'Labrum','parent structure':'Digestive','anatomical id':1400,'parent id':1000,'color':'#AAFFB3'}, 'Labral Gland Cell':{'display name':'Labral Gland Cell','parent structure':'Labrum','anatomical id':1500,'parent id':1000,'color':'#5AAA00'}, 'Mandible':{'display name':'Mandible','parent structure':'Digestive','anatomical id':1501,'parent id':1000,'color':'#0A5F00'}, 'Maxillae':{'display name':'Maxilla','parent structure':'Digestive','anatomical id':1600,'parent id':1000,'color':'#009F5E'}, 'Food Channel':{'display name':'Food Channel','parent structure':'Digestive','anatomical id':1700,'parent id':1000,'color':'#35FFCE'}, 'Visual':{'display name':'Visual and  Nervous','parent structure':'Body','anatomical id':2000,'parent id':0,'color':'#FF9FFA'}, 'Compound Eye':{'display name':'Compound Eye','parent structure':'Visual and  Nervous','anatomical id':2100,'parent id':2000,'color':'#E68AFF'}, 'Ommatidium':{'display name':'Ommatidium','parent structure':'Compound Eye','anatomical id':2101,'parent id':2100,'color':'#FFB4E2'}, 'Melanin Pigment':{'display name':'Melanin Pigment','parent structure':'Compound Eye','anatomical id':2102,'parent id':2100,'color':'#FADFFF'}, 'Optic Nerve':{'display name':'Optic Nerve','parent structure':'Visual and  Nervous','anatomical id':2200,'parent id':2000,'color':'#D8D4FF'}, 'Optic Lobe':{'display name':'Optic Lobe of Cerebral Ganglion','parent structure':'Visual and  Nervous','anatomical id':2300,'parent id':2000,'color':'#DEAAFF'}, 'Cerebral Ganglion':{'display name':'Cerebral Ganglion','parent structure':'Visual and  Nervous','anatomical id':2400,'parent id':2000,'color':'#EFB4FF'}, 'Nerve Cord':{'display name':'Nerve Cord','parent structure':'Cerebral Ganglion','anatomical id':2500,'parent id':2400,'color':'#D8B4FF'}, 'Ocellus':{'display name':'Ocellus','parent structure':'Visual and  Nervous','anatomical id':2600,'parent id':2000,'color':'#FAD4FF'}, 'Sensory Antenna':{'display name':'Sensory Antenna','parent structure':'Body','anatomical id':2700,'parent id':2000,'color':'#CDBFFF'}, 'Reproductive':{'display name':'Reproductive','parent structure':'Body','anatomical id':4000,'parent id':0,'color':'#FBFF00'}, 'Ovary':{'display name':'Ovary','parent structure':'Reproductive','anatomical id':4100,'parent id':4000,'color':'#F1FF3F'}, 'Oviduct':{'display name':'Oviduct','parent structure':'ovary','anatomical id':4101,'parent id':4100,'color':'#F9FF74'}, 'Embryo':{'display name':'Embryo','parent structure':'Reproductive','anatomical id':4200,'parent id':4000,'color':'#FFE21F'}, 'Testis':{'display name':'Testis','parent structure':'Reproductive','anatomical id':4300,'parent id':4000,'color':'#FFE42A'}, 'Fat Cell':{'display name':'Fat Cell','parent structure':'Body','anatomical id':4400,'parent id':4000,'color':'#FFBA00'}, 'Musculoskeletal':{'display name':'Musculoskeletal','parent structure':'Body','anatomical id':5000,'parent id':0,'color':'#FF0096'}, 'Antennal Muscle':{'display name':'Antennal Muscle','parent structure':'Musculoskeletal','anatomical id':5010,'parent id':5000,'color':'#D40059'}, 'Anterior Carapace Adductor Muscle':{'display name':'Anterior Carapace Adductor Muscle','parent structure':'Musculoskeletal','anatomical id':5020,'parent id':5000,'color':'#AA008F'}, 'Posterior Carapace Adductor Muscle':{'display name':'Posterior Carapace Adductor Muscle','parent structure':'Musculoskeletal','anatomical id':5030,'parent id':5000,'color':'#74006F'}, 'Esophageal Dilator Muscle':{'display name':'Esophageal Dilator Muscle','parent structure':'Musculoskeletal','anatomical id':5040,'parent id':5000,'color':'#D400C5'}, 'Levator Muscle of Labrum':{'display name':'Levator Muscle of Labrum','parent structure':'Musculoskeletal','anatomical id':5050,'parent id':5000,'color':'#9D009F'}, 'Circular Muscle':{'display name':'Circular Muscle','parent structure':'Musculoskeletal','anatomical id':5060,'parent id':5000,'color':'#D40095'}, 'Transverse Mandibular Muscle':{'display name':'Transverse Mandibular Muscle','parent structure':'Musculoskeletal','anatomical id':5070,'parent id':5000,'color':'#FF158B'}, 'Transverse Muscle of Mandible':{'display name':'Transverse Muscle of Mandible','parent structure':'Musculoskeletal','anatomical id':5080,'parent id':5000,'color':'#FF1FEF'}, 'Transverse Mandibular Tendon':{'display name':'Transverse Mandibular Tendon','parent structure':'Musculoskeletal','anatomical id':5090,'parent id':5000,'color':'#FF4ABF'}, 'Dorsal Longitudinal Muscle':{'display name':'Dorsal Longitudinal Muscle','parent structure':'Musculoskeletal','anatomical id':5100,'parent id':5000,'color':'#B500C9'}, 'Ventral Longitudinal Muscle':{'display name':'Ventral Longitudinal Muscle','parent structure':'Musculoskeletal','anatomical id':5110,'parent id':5000,'color':'#FF0007'}, 'Horizontal Muscle':{'display name':'Horizontal Muscle','parent structure':'Musculoskeletal','anatomical id':5120,'parent id':5000,'color':'#F40044'}, 'Postabdominal Muscle':{'display name':'Postabdominal Muscle','parent structure':'Musculoskeletal','anatomical id':5130,'parent id':5000,'color':'#FF1F65'}, 'Rectal Dilator Muscle':{'display name':'Rectal Dilator Muscle','parent structure':'Musculoskeletal','anatomical id':5140,'parent id':5000,'color':'#FF5589'}, 'Respiratory/Circulatory':{'display name':'Respiratory/Circulatory','parent structure':'Body','anatomical id':6000,'parent id':0,'color':'#940014'}, 'Heart':{'display name':'Heart','parent structure':'Respiratory/Circulatory','anatomical id':6100,'parent id':6000,'color':'#8A0007'}, 'Locomotion':{'display name':'Locomotion','parent structure':'Body','anatomical id':7000,'parent id':0,'color':'#0900AA'}, 'Swimming Antenna':{'display name':'Swimming Antenna','parent structure':'Locomotion','anatomical id':7100,'parent id':7000,'color':'#302AFF'}, 'Protopodite':{'display name':'Protopodite','parent structure':'Swimming Antenna','anatomical id':7101,'parent id':7100,'color':'#47006A'}, 'Ramus':{'display name':'Ramus','parent structure':'Swimming Antenna','anatomical id':7102,'parent id':7100,'color':'#6900AA'}, 'Seta':{'display name':'Seta','parent structure':'Ramus','anatomical id':7103,'parent id':7102,'color':'#7700D4'}, 'Trunk Limb 1':{'display name':'Trunk Limb 1','parent structure':'Locomotion','anatomical id':7200,'parent id':7000,'color':'#2F006A'}, 'Epipodite 1':{'display name':'Epipodite','parent structure':'Trunk Limb 1','anatomical id':7201,'parent id':7200,'color':'#23008A'}, 'Setae of Trunk Limb 1':{'display name':'Setae','parent structure':'Trunk Limb 2','anatomical id':7202,'parent id':7200,'color':'#5571FF'}, 'Trunk Limb 2':{'display name':'Trunk Limb 2','parent structure':'Locomotion','anatomical id':7300,'parent id':7000,'color':'#4700FF'}, 'Epipodite 2':{'display name':'Epipodite','parent structure':'Trunk Limb 2','anatomical id':7301,'parent id':7300,'color':'#3D00B4'}, 'Trunk Limb 3':{'display name':'Trunk Limb 3','parent structure':'Locomotion','anatomical id':7400,'parent id':7000,'color':'#4D00D4'}, 'Filter Plate 3':{'display name':'Filter Plate','parent structure':'Trunk Limb 3','anatomical id':7401,'parent id':7400,'color':'#153CFF'}, 'Epipodite 3':{'display name':'Epipodite','parent structure':'Trunk Limb 3','anatomical id':7402,'parent id':7400,'color':'#1578FF'}, 'Trunk Limb 4':{'display name':'Trunk Limb 4','parent structure':'Locomotion','anatomical id':7500,'parent id':7000,'color':'#0096DF'}, 'Filter Plate 4':{'display name':'Filter Plate','parent structure':'Trunk Limb 4','anatomical id':7501,'parent id':7500,'color':'#35A1FF'}, 'Epipodite 4':{'display name':'Epipodite','parent structure':'Trunk Limb 4','anatomical id':7502,'parent id':7500,'color':'#74B3FF'}, 'Trunk Limb 5':{'display name':'Trunk Limb 5','parent structure':'Locomotion','anatomical id':7600,'parent id':7000,'color':'#4AE8FF'}, 'Epipodite 5':{'display name':'Epipodite','parent structure':'Trunk Limb 5','anatomical id':7601,'parent id':7600,'color':'#8ACFFF'}, 'Excretory':{'display name':'Excretory','parent structure':'Body','anatomical id':8000,'parent id':0,'color':'#745800'}, 'Maxillary Gland':{'display name':'Maxillary Gland','parent structure':'Excretory','anatomical id':8100,'parent id':8000,'color':'#9F5500'}, 'Tubule':{'display name':'Tubule','parent structure':'Maxillary Gland','anatomical id':8001,'parent id':8100,'color':'#D4BF00'}, 'End Sac':{'display name':'End Sac','parent structure':'Maxillary Gland','anatomical id':7902,'parent id':8100,'color':'#D4B900'}, 'Postabdomen':{'display name':'Postabdomen','parent structure':'Body','anatomical id':11001,'parent id':0,'color':'#D43500'}, 'Postabdominal Claw':{'display name':'Postabdominal Claw','parent structure':'Postabdomen','anatomical id':11002,'parent id':11001,'color':'#D47100'}, 'Postabdominal Process':{'display name':'Postabdominal Process','parent structure':'Postabdomen','anatomical id':11003,'parent id':11001,'color':'#FF6400'}}
//parse4
// ontology_dict={'Body':{'display name':'Body','parent structure':'0','anatomical id':0,'parent id':0,'color':'#FFFFFF','abv':''}, 'Digestive':{'display name':'Digestive','parent structure':'Body','anatomical id':1000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Esophagus':{'display name':'Esophagus','parent structure':'Digestive','anatomical id':1100,'parent id':1000,'color':'#00CC00','abv':'Eso'}, 'Cecum':{'display name':'Cecum','parent structure':'Digestive','anatomical id':1102,'parent id':1000,'color':'#5FFF5F','abv':'Ce'}, 'Epithelial Cecum':{'display name':'Epithelial Cell','parent structure':'Cecum','anatomical id':1103,'parent id':1102,'color':'#005F18','abv':'EC'}, 'Microvilli Cecum':{'display name':'Microvilli','parent structure':'Cecum','anatomical id':1104,'parent id':1102,'color':'#FFFF66','abv':'Mv'}, 'Midgut':{'display name':'Midgut','parent structure':'Digestive','anatomical id':1200,'parent id':1000,'color':'#60FF2A','abv':'MG'}, 'Epithelial Midgut':{'display name':'Epithelial Cell','parent structure':'Midgut','anatomical id':1201,'parent id':1200,'color':'#005F18','abv':'EC'}, 'Microvilli Midgut':{'display name':'Microvilli','parent structure':'Epithelial Cell','anatomical id':1202,'parent id':1103,'color':'#FFFF66','abv':'Mv'}, 'Hindgut':{'display name':'Hindgut','parent structure':'Digestive','anatomical id':1300,'parent id':1000,'color':'#A0FF6A','abv':'HG'}, 'Epithelial Hindgut':{'display name':'Epithelial Cell','parent structure':'Hindgut','anatomical id':1301,'parent id':1300,'color':'#005F18','abv':'EC'}, 'Microvilli Hindgut':{'display name':'Microvilli','parent structure':'Epithelial Cell','anatomical id':1302,'parent id':1103,'color':'#FFFF66','abv':'Mv'}, 'Labrum':{'display name':'Labrum','parent structure':'Digestive','anatomical id':1400,'parent id':1000,'color':'#6AFF7B','abv':'L'}, 'Labral Gland Cell':{'display name':'Labral Gland Cell','parent structure':'Labrum','anatomical id':1500,'parent id':1400,'color':'#004A1B','abv':'LGC'}, 'Mandible':{'display name':'Mandible','parent structure':'Digestive','anatomical id':1501,'parent id':1000,'color':'#00FF9B','abv':'Mand'}, 'Maxillae':{'display name':'Maxilla','parent structure':'Digestive','anatomical id':1600,'parent id':1000,'color':'#1ab574','abv':'Mxll'}, 'Food Channel':{'display name':'Food Channel','parent structure':'Digestive','anatomical id':1700,'parent id':1000,'color':'#ccff99','abv':'FCh'}, 'Visual':{'display name':'Visual and  Nervous','parent structure':'Body','anatomical id':2000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Compound Eye':{'display name':'Compound Eye','parent structure':'Visual and  Nervous','anatomical id':2100,'parent id':2000,'color':'#FFFFFF','abv':'CE'}, 'Ommatidium':{'display name':'Ommatidium','parent structure':'Compound Eye','anatomical id':2101,'parent id':2100,'color':'#FF0000','abv':'Om'}, 'Melanin Pigment':{'display name':'Melanin Pigment','parent structure':'Compound Eye','anatomical id':2102,'parent id':2100,'color':'#FF9933','abv':'MP'}, 'Optic Nerve':{'display name':'Optic Nerve','parent structure':'Visual and  Nervous','anatomical id':2200,'parent id':2000,'color':'#FF353A','abv':'ON'}, 'Optic Lobe':{'display name':'Optic Lobe of Cerebral Ganglion','parent structure':'Visual and  Nervous','anatomical id':2300,'parent id':2000,'color':'#D4000B','abv':'OL'}, 'Cerebral Ganglion':{'display name':'Cerebral Ganglion','parent structure':'Visual and  Nervous','anatomical id':2400,'parent id':2000,'color':'#960000','abv':'CG'}, 'Nerve Cord':{'display name':'Nerve Cord','parent structure':'Cerebral Ganglion','anatomical id':2500,'parent id':2400,'color':'#FF155D','abv':'NC'}, 'Ocellus':{'display name':'Ocellus','parent structure':'Visual and  Nervous','anatomical id':2600,'parent id':2000,'color':'#FF9933','abv':'O'}, 'Sensory Antenna':{'display name':'Sensory Antenna','parent structure':'Visual and  Nervous','anatomical id':2700,'parent id':2000,'color':'#FF0000','abv':'SA'}, 'Reproductive':{'display name':'Reproductive','parent structure':'Body','anatomical id':4000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Ovary':{'display name':'Ovary','parent structure':'Reproductive','anatomical id':4100,'parent id':4000,'color':'#ffe21f','abv':'Ov'}, 'Oviduct':{'display name':'Oviduct','parent structure':'ovary','anatomical id':4101,'parent id':4100,'color':'#ffa51f','abv':'Ovt'}, 'Embryo':{'display name':'Embryo','parent structure':'Reproductive','anatomical id':4200,'parent id':4000,'color':'#FFCC66','abv':'Emb'}, 'Testis':{'display name':'Testis','parent structure':'Reproductive','anatomical id':4300,'parent id':4000,'color':'#ffe21f','abv':'Te'}, 'Fat Cell':{'display name':'Fat Cell','parent structure':'Reproductive','anatomical id':4400,'parent id':4000,'color':'#FF5C00','abv':'FC'}, 'Musculoskeletal':{'display name':'Musculoskeletal','parent structure':'Body','anatomical id':5000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Antennal Muscle':{'display name':'Antennal Muscle','parent structure':'Musculoskeletal','anatomical id':5010,'parent id':5000,'color':'#000099','abv':'AM'}, 'Anterior Carapace Adductor Muscle':{'display name':'Anterior Carapace Adductor Muscle','parent structure':'Musculoskeletal','anatomical id':5020,'parent id':5000,'color':'#3300FF','abv':'ACAM'}, 'Posterior Carapace Adductor Muscle':{'display name':'Posterior Carapace Adductor Muscle','parent structure':'Musculoskeletal','anatomical id':5030,'parent id':5000,'color':'#230499','abv':'PCAM'}, 'Esophageal Dilator Muscle':{'display name':'Esophageal Dilator Muscle','parent structure':'Musculoskeletal','anatomical id':5040,'parent id':5000,'color':'#2740D4','abv':'EDM'}, 'Levator Muscle of Labrum':{'display name':'Levator Muscle of Labrum','parent structure':'Musculoskeletal','anatomical id':5050,'parent id':5000,'color':'#000099','abv':'LM'}, 'Circular Muscle':{'display name':'Circular Muscle','parent structure':'Musculoskeletal','anatomical id':5060,'parent id':5000,'color':'#0D24CC','abv':'CM'}, 'Transverse Mandibular Muscle':{'display name':'Transverse Mandibular Muscle','parent structure':'Musculoskeletal','anatomical id':5070,'parent id':5000,'color':'#3300cc','abv':'TMM1'}, 'Transverse Muscle of Mandible':{'display name':'Transverse Muscle of Mandible','parent structure':'Musculoskeletal','anatomical id':5080,'parent id':5000,'color':'#0000CC','abv':'TMM2'}, 'Transverse Mandibular Tendon':{'display name':'Transverse Mandibular Tendon','parent structure':'Musculoskeletal','anatomical id':5090,'parent id':5000,'color':'#2740D4','abv':'TMT'}, 'Dorsal Longitudinal Muscle':{'display name':'Dorsal Longitudinal Muscle','parent structure':'Musculoskeletal','anatomical id':5100,'parent id':5000,'color':'#3300cc','abv':'DLM'}, 'Ventral Longitudinal Muscle':{'display name':'Ventral Longitudinal Muscle','parent structure':'Musculoskeletal','anatomical id':5110,'parent id':5000,'color':'#0000CC','abv':'VLM'}, 'Horizontal Muscle':{'display name':'Horizontal Muscle','parent structure':'Musculoskeletal','anatomical id':5120,'parent id':5000,'color':'#0D24CC','abv':'HM'}, 'Postabdominal Muscle':{'display name':'Postabdominal Muscle','parent structure':'Musculoskeletal','anatomical id':5130,'parent id':5000,'color':'#4100E9','abv':'PM'}, 'Rectal Dilator Muscle':{'display name':'Rectal Dilator Muscle','parent structure':'Musculoskeletal','anatomical id':5140,'parent id':5000,'color':'#0D24CC','abv':'RDM'}, 'Anterior Rotator':{'display name':'Anterior Rotator','parent structure':'Musculoskeletal','anatomical id':5150,'parent id':5000,'color':'#2B3087','abv':'AR'}, 'Posterior Rotator':{'display name':'Posterior Rotator','parent structure':'Musculoskeletal','anatomical id':5160,'parent id':5000,'color':'#033390','abv':'PR'}, 'Respiratory/Circulatory':{'display name':'Respiratory/Circulatory','parent structure':'Body','anatomical id':6000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Heart':{'display name':'Heart','parent structure':'Respiratory/Circulatory','anatomical id':6100,'parent id':6000,'color':'#ff00e5','abv':'H'}, 'Locomotion':{'display name':'Locomotion','parent structure':'Body','anatomical id':7000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Swimming Antenna':{'display name':'Swimming Antenna','parent structure':'Locomotion','anatomical id':7100,'parent id':7000,'color':'#FFFFFF','abv':'SwA'}, 'Protopodite':{'display name':'Protopodite','parent structure':'Swimming Antenna','anatomical id':7101,'parent id':7100,'color':'#996600','abv':'Pr'}, 'Ramus':{'display name':'Ramus','parent structure':'Swimming Antenna','anatomical id':7102,'parent id':7100,'color':'#CC9900','abv':'Ra'}, 'Seta':{'display name':'Seta','parent structure':'Ramus','anatomical id':7103,'parent id':7102,'color':'#e2ad58','abv':'Se'}, 'Trunk Limb 1':{'display name':'Trunk Limb 1','parent structure':'Locomotion','anatomical id':7200,'parent id':7000,'color':'#8A4D00','abv':'TL1'}, 'Epipodite 1':{'display name':'Epipodite','parent structure':'Trunk Limb 1','anatomical id':7201,'parent id':7200,'color':'#c98800','abv':'Ep1'}, 'Setae of Trunk Limb 1':{'display name':'Setae','parent structure':'Trunk Limb 2','anatomical id':7202,'parent id':7200,'color':'#e2ad58','abv':'Se1'}, 'Trunk Limb 2':{'display name':'Trunk Limb 2','parent structure':'Locomotion','anatomical id':7300,'parent id':7000,'color':'#8A4D00','abv':'TL2'}, 'Epipodite 2':{'display name':'Epipodite','parent structure':'Trunk Limb 2','anatomical id':7301,'parent id':7300,'color':'#c98800','abv':'Ep1'}, 'Trunk Limb 3':{'display name':'Trunk Limb 3','parent structure':'Locomotion','anatomical id':7400,'parent id':7000,'color':'#8A4D00','abv':'TL3'}, 'Filter Plate 3':{'display name':'Filter Plate','parent structure':'Trunk Limb 3','anatomical id':7401,'parent id':7400,'color':'#C99300','abv':'FP3'}, 'Epipodite 3':{'display name':'Epipodite','parent structure':'Trunk Limb 3','anatomical id':7402,'parent id':7400,'color':'#c98800','abv':'Ep3'}, 'Trunk Limb 4':{'display name':'Trunk Limb 4','parent structure':'Locomotion','anatomical id':7500,'parent id':7000,'color':'#e2ad58','abv':'TL4'}, 'Filter Plate 4':{'display name':'Filter Plate ','parent structure':'Trunk Limb 4','anatomical id':7501,'parent id':7500,'color':'#C99300','abv':'FP4'}, 'Epipodite 4':{'display name':'Epipodite','parent structure':'Trunk Limb 4','anatomical id':7502,'parent id':7500,'color':'#c98800','abv':'Ep4'}, 'Trunk Limb 5':{'display name':'Trunk Limb 5','parent structure':'Locomotion','anatomical id':7600,'parent id':7000,'color':'#e2ad58','abv':'TL5'}, 'Epipodite 5':{'display name':'Epipodite','parent structure':'Trunk Limb 5','anatomical id':7601,'parent id':7600,'color':'#c98800','abv':'Ep5'}, 'Exceretory':{'display name':'Exceretory','parent structure':'Body','anatomical id':8000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Maxillary Gland':{'display name':'Maxillary Gland','parent structure':'Exceretory','anatomical id':8100,'parent id':8000,'color':'#FFFFFF','abv':'MxG'}, 'Tubule':{'display name':'Tubule','parent structure':'Maxillary Gland','anatomical id':8001,'parent id':8100,'color':'#74DAFF','abv':'Tu'}, 'End Sac':{'display name':'End Sac','parent structure':'Maxillary Gland','anatomical id':7902,'parent id':8100,'color':'#0099CC','abv':'ES'}, 'Postabdomen':{'display name':'Postabdomen','parent structure':'Body','anatomical id':11001,'parent id':0,'color':'#FBB4FF','abv':'PA'}, 'Postabdominal Claw':{'display name':'Postabdominal Claw','parent structure':'Postabdomen','anatomical id':11002,'parent id':11001,'color':'#FBB4FF','abv':'PAC'}, 'Postabdominal Process':{'display name':'Postabdominal Process','parent structure':'Postabdomen','anatomical id':11003,'parent id':11001,'color':'#FBB4FF','abv':'PAP'}}
//parse5
// ontology_dict={'Body':{'display name':'Body','parent structure':'0','anatomical id':0,'parent id':0,'color':'#FFFFFF','color_cz':'#FFFFFF','abv':''}, 'Digestive':{'display name':'Digestive','parent structure':'Body','anatomical id':1000,'parent id':0,'color':'#FFFFFF','color_cz':'#00C900','abv':''}, 'Esophagus':{'display name':'Esophagus','parent structure':'Digestive','anatomical id':1100,'parent id':1000,'color':'#00CC00','color_cz':'#00A7AA','abv':'Eso'}, 'Cecum':{'display name':'Hepatic Cecum','parent structure':'Digestive','anatomical id':1102,'parent id':1000,'color':'#5FFF5F','color_cz':'#35FF90','abv':'Ce'}, 'Epithelial Cecum':{'display name':'Epithelial Cell','parent structure':'Cecum','anatomical id':1103,'parent id':1102,'color':'#005F18','color_cz':'#00D477','abv':'EC'}, 'Microvilli Cecum':{'display name':'Microvilli','parent structure':'Cecum','anatomical id':1104,'parent id':1102,'color':'#FFFF66','color_cz':'#1A7400','abv':'Mv'}, 'Midgut':{'display name':'Midgut','parent structure':'Digestive','anatomical id':1200,'parent id':1000,'color':'#60FF2A','color_cz':'#95FF7F','abv':'MG'}, 'Epithelial Midgut':{'display name':'Epithelial Cell','parent structure':'Midgut','anatomical id':1201,'parent id':1200,'color':'#005F18','color_cz':'#49FF15','abv':'EC'}, 'Microvilli Midgut':{'display name':'Microvilli','parent structure':'Epithelial Cell','anatomical id':1202,'parent id':1201,'color':'#FFFF66','color_cz':'#00AA2F','abv':'Mv'}, 'Hindgut':{'display name':'Hindgut','parent structure':'Digestive','anatomical id':1300,'parent id':1000,'color':'#A0FF6A','color_cz':'#D0FFAA','abv':'HG'}, 'Epithelial Hindgut':{'display name':'Epithelial Cell','parent structure':'Hindgut','anatomical id':1301,'parent id':1300,'color':'#005F18','color_cz':'#B2FF35','abv':'EC'}, 'Microvilli Hindgut':{'display name':'Microvilli','parent structure':'Epithelial Cell','anatomical id':1302,'parent id':1301,'color':'#FFFF66','color_cz':'#759400','abv':'Mv'}, 'Labrum':{'display name':'Labrum','parent structure':'Digestive','anatomical id':1400,'parent id':1000,'color':'#6AFF7B','color_cz':'#AAFFB3','abv':'L'}, 'Labral Gland Cell':{'display name':'Labral Gland Cell','parent structure':'Labrum','anatomical id':1500,'parent id':1400,'color':'#004A1B','color_cz':'#5AAA00','abv':'LGC'}, 'Mandible':{'display name':'Mandible','parent structure':'Digestive','anatomical id':1501,'parent id':1000,'color':'#00FF9B','color_cz':'#0A5F00','abv':'Md'}, 'Maxillae':{'display name':'Maxilla','parent structure':'Digestive','anatomical id':1600,'parent id':1000,'color':'#1ab574','color_cz':'#009F5E','abv':'Mx'}, 'Food Channel':{'display name':'Food Channel','parent structure':'Digestive','anatomical id':1700,'parent id':1000,'color':'#ccff99','color_cz':'#35FFCE','abv':'FCh'}, 'Visual':{'display name':'Visual and  Nervous','parent structure':'Body','anatomical id':2000,'parent id':0,'color':'#FFFFFF','color_cz':'#FF9FFA','abv':''}, 'Compound Eye':{'display name':'Compound Eye','parent structure':'Visual and  Nervous','anatomical id':2100,'parent id':2000,'color':'#FFFFFF','color_cz':'#E68AFF','abv':'CE'}, 'Ommatidium':{'display name':'Ommatidium','parent structure':'Compound Eye','anatomical id':2101,'parent id':2100,'color':'#FF0000','color_cz':'#FFB4E2','abv':'Om'}, 'Melanin Pigment':{'display name':'Melanin Pigment','parent structure':'Compound Eye','anatomical id':2102,'parent id':2100,'color':'#FF9933','color_cz':'#FADFFF','abv':'MP'}, 'Optic Nerve':{'display name':'Optic Nerve','parent structure':'Visual and  Nervous','anatomical id':2200,'parent id':2000,'color':'#FF353A','color_cz':'#D8D4FF','abv':'ON'}, 'Optic Lobe':{'display name':'Optic Lobe of Cerebral Ganglion','parent structure':'Visual and  Nervous','anatomical id':2300,'parent id':2000,'color':'#D4000B','color_cz':'#DEAAFF','abv':'OL'}, 'Cerebral Ganglion':{'display name':'Cerebral Ganglion','parent structure':'Visual and  Nervous','anatomical id':2400,'parent id':2000,'color':'#960000','color_cz':'#EFB4FF','abv':'CG'}, 'Nerve Cord':{'display name':'Nerve Cord','parent structure':'Cerebral Ganglion','anatomical id':2500,'parent id':2400,'color':'#FF155D','color_cz':'#D8B4FF','abv':'NC'}, 'Ocellus':{'display name':'Ocellus','parent structure':'Visual and  Nervous','anatomical id':2600,'parent id':2000,'color':'#FF353A','color_cz':'#FAD4FF','abv':'O'}, 'Sensory Antenna':{'display name':'Sensory Antenna','parent structure':'Visual and  Nervous','anatomical id':2700,'parent id':2000,'color':'#FF0000','color_cz':'#CDBFFF','abv':'SA'}, 'Reproductive':{'display name':'Reproductive','parent structure':'Body','anatomical id':4000,'parent id':0,'color':'#FFFFFF','color_cz':'#FBFF00','abv':''}, 'Ovary':{'display name':'Ovary','parent structure':'Reproductive','anatomical id':4100,'parent id':4000,'color':'#ffe21f','color_cz':'#F1FF3F','abv':'Ov'}, 'Oviduct':{'display name':'Oviduct','parent structure':'ovary','anatomical id':4101,'parent id':4100,'color':'#ffa51f','color_cz':'#DBDF00','abv':'Ovt'}, 'Embryo':{'display name':'Embryo','parent structure':'Reproductive','anatomical id':4200,'parent id':4000,'color':'#FFCC66','color_cz':'#FFE21F','abv':'Emb'}, 'Testis':{'display name':'Testis','parent structure':'Reproductive','anatomical id':4300,'parent id':4000,'color':'#ffe21f','color_cz':'#DF7D00','abv':'Te'}, 'Testis Duct':{'display name':'Testis Duct','parent structure':'Reproductive','anatomical id':4500,'parent id':4300,'color':'#ffe21f','color_cz':'#FF3300','abv':'TeDt'}, 'Fat Cell':{'display name':'Fat Cell','parent structure':'Reproductive','anatomical id':4400,'parent id':4000,'color':'#FF5C00','color_cz':'#FFBA00','abv':'FC'}, 'Musculoskeletal':{'display name':'Musculoskeletal','parent structure':'Body','anatomical id':5000,'parent id':0,'color':'#FFFFFF','color_cz':'#FF0096','abv':''}, 'Antennal Muscle':{'display name':'Antennal Muscle','parent structure':'Musculoskeletal','anatomical id':5010,'parent id':5000,'color':'#000099','color_cz':'#D40059','abv':'AM'}, 'Anterior Carapace Adductor Muscle':{'display name':'Anterior Carapace Adductor Muscle','parent structure':'Musculoskeletal','anatomical id':5020,'parent id':5000,'color':'#3300FF','color_cz':'#AA008F','abv':'ACAM'}, 'Posterior Carapace Adductor Muscle':{'display name':'Posterior Carapace Adductor Muscle','parent structure':'Musculoskeletal','anatomical id':5030,'parent id':5000,'color':'#230499','color_cz':'#74006F','abv':'PCAM'}, 'Esophageal Dilator Muscle':{'display name':'Esophageal Dilator Muscle','parent structure':'Musculoskeletal','anatomical id':5040,'parent id':5000,'color':'#2740D4','color_cz':'#D400C5','abv':'EDM'}, 'Levator Muscle of Labrum':{'display name':'Levator Muscle of Labrum','parent structure':'Musculoskeletal','anatomical id':5050,'parent id':5000,'color':'#000099','color_cz':'#9D009F','abv':'LM'}, 'Circular Muscle':{'display name':'Circular Muscle','parent structure':'Musculoskeletal','anatomical id':5060,'parent id':5000,'color':'#0D24CC','color_cz':'#D40095','abv':'CM'}, 'Transverse Mandibular Muscle':{'display name':'Transverse Mandibular Muscle','parent structure':'Musculoskeletal','anatomical id':5070,'parent id':5000,'color':'#3300cc','color_cz':'#FF158B','abv':'TMM1'}, 'Transverse Muscle of Mandible':{'display name':'Transverse Muscle of Mandible','parent structure':'Musculoskeletal','anatomical id':5080,'parent id':5000,'color':'#0000CC','color_cz':'#FF1FEF','abv':'TMM2'}, 'Transverse Mandibular Tendon':{'display name':'Transverse Mandibular Tendon','parent structure':'Musculoskeletal','anatomical id':5090,'parent id':5000,'color':'#2740D4','color_cz':'#FF4ABF','abv':'TMT'}, 'Dorsal Longitudinal Muscle':{'display name':'Dorsal Longitudinal Muscle','parent structure':'Musculoskeletal','anatomical id':5100,'parent id':5000,'color':'#3300cc','color_cz':'#B500C9','abv':'DLM'}, 'Ventral Longitudinal Muscle':{'display name':'Ventral Longitudinal Muscle','parent structure':'Musculoskeletal','anatomical id':5110,'parent id':5000,'color':'#0000CC','color_cz':'#FF0007','abv':'VLM'}, 'Horizontal Muscle':{'display name':'Horizontal Muscle','parent structure':'Musculoskeletal','anatomical id':5120,'parent id':5000,'color':'#0D24CC','color_cz':'#F40044','abv':'HM'}, 'Postabdominal Muscle':{'display name':'Postabdominal Muscle','parent structure':'Musculoskeletal','anatomical id':5130,'parent id':5000,'color':'#4100E9','color_cz':'#FF1F65','abv':'PM'}, 'Rectal Dilator Muscle':{'display name':'Rectal Dilator Muscle','parent structure':'Musculoskeletal','anatomical id':5140,'parent id':5000,'color':'#0D24CC','color_cz':'#FF5589','abv':'RDM'}, 'Anterior Rotator':{'display name':'Anterior Rotator Muscle of Mandible','parent structure':'Musculoskeletal','anatomical id':5150,'parent id':5000,'color':'#2B3087','color_cz':'#FF5589','abv':'AR'}, 'Posterior Rotator':{'display name':'Posterior Rotator Muscle of Mandible','parent structure':'Musculoskeletal','anatomical id':5160,'parent id':5000,'color':'#033390','color_cz':'#9D009F','abv':'PR'}, 'Respiratory/Circulatory':{'display name':'Respiratory/Circulatory','parent structure':'Body','anatomical id':6000,'parent id':0,'color':'#FFFFFF','color_cz':'#940014','abv':''}, 'Heart':{'display name':'Heart','parent structure':'Respiratory/Circulatory','anatomical id':6100,'parent id':6000,'color':'#ff00e5','color_cz':'#8A0007','abv':'H'}, 'Locomotion':{'display name':'Locomotion','parent structure':'Body','anatomical id':7000,'parent id':0,'color':'#FFFFFF','color_cz':'#0900AA','abv':''}, 'Swimming Antenna':{'display name':'Swimming Antenna','parent structure':'Locomotion','anatomical id':7100,'parent id':7000,'color':'#FFFFFF','color_cz':'#FFFFFF','abv':'SwA'}, 'Protopodite':{'display name':'Protopodite','parent structure':'Swimming Antenna','anatomical id':7101,'parent id':7100,'color':'#996600','color_cz':'#47006A','abv':'Pr'}, 'Ramus':{'display name':'Ramus','parent structure':'Swimming Antenna','anatomical id':7102,'parent id':7100,'color':'#CC9900','color_cz':'#6900AA','abv':'Ra'}, 'Seta':{'display name':'Seta','parent structure':'Ramus','anatomical id':7103,'parent id':7102,'color':'#e2ad58','color_cz':'#7700D4','abv':'Se'}, 'Trunk Limb 1':{'display name':'Throcic Appendage 1','parent structure':'Locomotion','anatomical id':7200,'parent id':7000,'color':'#8A4D00','color_cz':'#2F006A','abv':'TL1'}, 'Epipodite 1':{'display name':'Epipodite 1','parent structure':'Trunk Limb 1','anatomical id':7201,'parent id':7200,'color':'#c98800','color_cz':'#23008A','abv':'Ep1'}, 'Setae of Trunk Limb 1':{'display name':'Setae ','parent structure':'Trunk Limb 2','anatomical id':7202,'parent id':7200,'color':'#e2ad58','color_cz':'#5571FF','abv':'Se1'}, 'Trunk Limb 2':{'display name':'Throcic Appendage 2','parent structure':'Locomotion','anatomical id':7300,'parent id':7000,'color':'#8A4D00','color_cz':'#4700FF','abv':'TL2'}, 'Epipodite 2':{'display name':'Epipodite 2','parent structure':'Trunk Limb 2','anatomical id':7301,'parent id':7300,'color':'#c98800','color_cz':'#3D00B4','abv':'Ep1'}, 'Trunk Limb 3':{'display name':'Throcic Appendage 3','parent structure':'Locomotion','anatomical id':7400,'parent id':7000,'color':'#8A4D00','color_cz':'#4D00D4','abv':'TL3'}, 'Filter Plate 3':{'display name':'Filter Plate 3','parent structure':'Trunk Limb 3','anatomical id':7401,'parent id':7400,'color':'#C99300','color_cz':'#153CFF','abv':'FP3'}, 'Epipodite 3':{'display name':'Epipodite 3','parent structure':'Trunk Limb 3','anatomical id':7402,'parent id':7400,'color':'#c98800','color_cz':'#1578FF','abv':'Ep3'}, 'Trunk Limb 4':{'display name':'Throcic Appendage 4','parent structure':'Locomotion','anatomical id':7500,'parent id':7000,'color':'#8A4D00','color_cz':'#0096DF','abv':'TL4'}, 'Filter Plate 4':{'display name':'Filter Plate 4','parent structure':'Trunk Limb 4','anatomical id':7501,'parent id':7500,'color':'#C99300','color_cz':'#35A1FF','abv':'FP4'}, 'Epipodite 4':{'display name':'Epipodite 4','parent structure':'Trunk Limb 4','anatomical id':7502,'parent id':7500,'color':'#c98800','color_cz':'#74B3FF','abv':'Ep4'}, 'Trunk Limb 5':{'display name':'Throcic Appendage 5','parent structure':'Locomotion','anatomical id':7600,'parent id':7000,'color':'#8A4D00','color_cz':'#4AE8FF','abv':'TL5'}, 'Epipodite 5':{'display name':'Epipodite 5','parent structure':'Trunk Limb 5','anatomical id':7601,'parent id':7600,'color':'#c98800','color_cz':'#8ACFFF','abv':'Ep5'}, 'Excretory':{'display name':'Exceretory','parent structure':'Body','anatomical id':8000,'parent id':0,'color':'#FFFFFF','color_cz':'#745800','abv':'Exceretory'}, 'Maxillary Gland':{'display name':'Maxillary Gland','parent structure':'Exceretory','anatomical id':8100,'parent id':8000,'color':'#FFFFFF','color_cz':'#9F5500','abv':'MxG'}, 'Tubule':{'display name':'Tubule','parent structure':'Maxillary Gland','anatomical id':8001,'parent id':8100,'color':'#74DAFF','color_cz':'#D4BF00','abv':'Tu'}, 'End Sac':{'display name':'End Sac','parent structure':'Maxillary Gland','anatomical id':7902,'parent id':8100,'color':'#0099CC','color_cz':'#D4B900','abv':'ES'}, 'Postabdomen':{'display name':'Postabdomen','parent structure':'Body','anatomical id':11001,'parent id':0,'color':'#FBB4FF','color_cz':'#8A6500','abv':'PA'}, 'Postabdominal Claw':{'display name':'Postabdominal Claw','parent structure':'Postabdomen','anatomical id':11002,'parent id':11001,'color':'#FBB4FF','color_cz':'#AA9900','abv':'PAC'}, 'Postabdominal Process':{'display name':'Postabdominal Process','parent structure':'Postabdomen','anatomical id':11003,'parent id':11001,'color':'#FBB4FF','color_cz':'#9F7D00','abv':'PAP'}}
//parse 6
// ontology_dict={'Body':{'display name':'Body','parent structure':'0','anatomical id':0,'parent id':999999999,'color':'#FFFFFF','abv':''}, 'Circulatory':{'display name':'Circulatory','parent structure':'Body','anatomical id':1000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Heart':{'display name':'Heart','parent structure':'Circulatory','anatomical id':1100,'parent id':1000,'color':'#ff00e5','abv':'Ht'}, 'Blood Cell':{'display name':'Hemocyte','parent structure':'Heart','anatomical id':1200,'parent id':1000,'color':'#ff00e5','abv':'H'}, 'Digestive':{'display name':'Digestive','parent structure':'Body','anatomical id':2000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Esophagus':{'display name':'Esophagus','parent structure':'Digestive','anatomical id':2100,'parent id':2000,'color':'#00CC00','abv':'Eso'}, 'Food Channel':{'display name':'Food Groove','parent structure':'Digestive','anatomical id':2200,'parent id':2000,'color':'#ccff99','abv':'FG'}, 'Cecum':{'display name':'Hepatic Cecum','parent structure':'Digestive','anatomical id':2300,'parent id':2000,'color':'#5FFF5F','abv':'Ce'}, 'Epithelial Cecum':{'display name':'Epithelial Cell','parent structure':'Hepatic Cecum','anatomical id':2310,'parent id':2300,'color':'#005F18','abv':'EC'}, 'Microvilli Cecum':{'display name':'Microvilli','parent structure':'Hepatic Cecum','anatomical id':2320,'parent id':2310,'color':'#FFFF66','abv':'Mv'}, 'Hindgut':{'display name':'Hindgut','parent structure':'Digestive','anatomical id':2400,'parent id':2000,'color':'#A0FF6A','abv':'HG'}, 'Epithelial Hindgut':{'display name':'Epithelial Cell','parent structure':'Hindgut','anatomical id':2410,'parent id':2400,'color':'#005F18','abv':'EC'}, 'Microvilli Hindgut':{'display name':'Microvilli','parent structure':'Epithelial Cell','anatomical id':2420,'parent id':2410,'color':'#FFFF66','abv':'Mv'}, 'Labrum':{'display name':'Labrum','parent structure':'Digestive','anatomical id':2500,'parent id':2000,'color':'#6AFF7B','abv':'L'}, 'Labral Gland Cell':{'display name':'Labral Gland Cell','parent structure':'Labrum','anatomical id':2510,'parent id':2500,'color':'#004A1B','abv':'LGC'}, 'Mandible':{'display name':'Mandible','parent structure':'Digestive','anatomical id':2600,'parent id':2000,'color':'#00FF9B','abv':'Md'}, 'Maxillae':{'display name':'Maxilla','parent structure':'Digestive','anatomical id':2700,'parent id':2000,'color':'#1ab574','abv':'Mxl'}, 'Midgut':{'display name':'Midgut','parent structure':'Digestive','anatomical id':2800,'parent id':2000,'color':'#60FF2A','abv':'MG'}, 'Epithelial Midgut':{'display name':'Epithelial Cell','parent structure':'Midgut','anatomical id':2810,'parent id':2800,'color':'#005F18','abv':'EC'}, 'Microvilli Midgut':{'display name':'Microvilli','parent structure':'Epithelial Cell','anatomical id':2820,'parent id':2810,'color':'#FFFF66','abv':'Mv'}, 'Excretory':{'display name':'Excretory','parent structure':'Body','anatomical id':3000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Maxillary Gland':{'display name':'Maxillary Gland','parent structure':'Excretory','anatomical id':3100,'parent id':3000,'color':'#FFFFFF','abv':'MxG'}, 'End Sac':{'display name':'End Sac','parent structure':'Maxillary Gland','anatomical id':3110,'parent id':3100,'color':'#0088FF','abv':'ES'}, 'Tubule':{'display name':'Tubule','parent structure':'Maxillary Gland','anatomical id':3120,'parent id':3100,'color':'#74DAFF','abv':'Tu'}, 'Locomotive and Osmotic  Regulatory':{'display name':'Locomotive and Osmoregulation','parent structure':'Body','anatomical id':4000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Swimming Antenna':{'display name':'Swimming Antenna','parent structure':'Locomotive and Osmoregulation','anatomical id':4100,'parent id':4000,'color':'#FFFFFF','abv':'SwA'}, 'Protopodite':{'display name':'Protopodite','parent structure':'Swimming Antenna','anatomical id':4110,'parent id':4100,'color':'#996600','abv':'Pr'}, 'Ramus':{'display name':'Ramus','parent structure':'Swimming Antenna','anatomical id':4120,'parent id':4100,'color':'#CC9900','abv':'Ra'}, 'Seta':{'display name':'Seta','parent structure':'Ramus','anatomical id':4130,'parent id':4120,'color':'#e2ad58','abv':'Se'}, 'Trunk Limb 1':{'display name':'Throcic Appendage 1','parent structure':'Locomotive and Osmoregulation','anatomical id':4200,'parent id':4000,'color':'#C98800','abv':'T1'}, 'Epipodite 1':{'display name':'Epipodite 1','parent structure':'Throcic Appendage 1','anatomical id':4210,'parent id':4200,'color':'#C98800','abv':'Ep1'}, 'Setae of Trunk Limb 1':{'display name':'Seta','parent structure':'Throcic Appendage 1','anatomical id':4220,'parent id':4200,'color':'#C98800','abv':'Se1'}, 'Trunk Limb 2':{'display name':'Throcic Appendage 2','parent structure':'Locomotive and Osmoregulation','anatomical id':4300,'parent id':4000,'color':'#C98800','abv':'T2'}, 'Epipodite 2':{'display name':'Epipodite 2','parent structure':'Throcic Appendage 2','anatomical id':4310,'parent id':4300,'color':'#C98800','abv':'Ep1'}, 'Trunk Limb 3':{'display name':'Throcic Appendage 3','parent structure':'Locomotive and Osmoregulation','anatomical id':4400,'parent id':4000,'color':'#C98800','abv':'T3'}, 'Epipodite 3':{'display name':'Epipodite 3','parent structure':'Throcic Appendage 3','anatomical id':4410,'parent id':4400,'color':'#C98800','abv':'Ep3'}, 'Filter Plate 3':{'display name':'Filter Plate 3','parent structure':'Throcic Appendage 3','anatomical id':4420,'parent id':4400,'color':'#8A4D00','abv':'FP3'}, 'Trunk Limb 4':{'display name':'Throcic Appendage 4','parent structure':'Locomotive and Osmoregulation','anatomical id':4500,'parent id':7000,'color':'#C98800','abv':'T4'}, 'Epipodite 4':{'display name':'Epipodite 4','parent structure':'Throcic Appendage 4','anatomical id':4510,'parent id':4500,'color':'#C98800','abv':'Ep4'}, 'Filter Plate 4':{'display name':'Filter Plate 4','parent structure':'Throcic Appendage 4','anatomical id':4520,'parent id':4500,'color':'#8A4D00','abv':'FP4'}, 'Trunk Limb 5':{'display name':'Throcic Appendage 5','parent structure':'Locomotive and Osmoregulation','anatomical id':4600,'parent id':4000,'color':'#C98800','abv':'T5'}, 'Epipodite 5':{'display name':'Epipodite 5','parent structure':'Throcic Appendage 5','anatomical id':4610,'parent id':4600,'color':'#C98800','abv':'Ep5'}, 'Muscular':{'display name':'Muscular','parent structure':'Body','anatomical id':5000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Antennal Muscle':{'display name':'Antennal Muscle','parent structure':'Muscular','anatomical id':5010,'parent id':5000,'color':'#000099','abv':'AM'}, 'Anterior Carapace Adductor Muscle':{'display name':'Anterior Carapace Adductor Muscle','parent structure':'Muscular','anatomical id':5020,'parent id':5000,'color':'#000099','abv':'ACAM'}, 'Anterior Rotator':{'display name':'Anterior Rotator Muscle of Mandible','parent structure':'Muscular','anatomical id':5030,'parent id':5000,'color':'#00197f','abv':'ARM'}, 'Circular Muscle':{'display name':'Circular Muscle (Gut)','parent structure':'Muscular','anatomical id':5040,'parent id':5000,'color':'#0D24CC','abv':'CM'}, 'Dorsal Longitudinal Muscle':{'display name':'Dorsal Longitudinal Muscle','parent structure':'Muscular','anatomical id':5050,'parent id':5000,'color':'#0000CC','abv':'DLM'}, 'Esophageal Dilator Muscle':{'display name':'Esophageal Dilator Muscle','parent structure':'Muscular','anatomical id':5060,'parent id':5000,'color':'#0D24CC','abv':'EDM'}, 'Horizontal Muscle':{'display name':'Horizontal Muscle','parent structure':'Muscular','anatomical id':5070,'parent id':5000,'color':'#0D24CC','abv':'HM'}, 'Levator Muscle of Labrum':{'display name':'Levator Muscle of Labrum','parent structure':'Muscular','anatomical id':5080,'parent id':5000,'color':'#000099','abv':'LM'}, 'Oblique-Lateral Muscle':{'display name':'Oblique-Lateral Muscle','parent structure':'Muscular','anatomical id':5081,'parent id':5000,'color':'#000099','abv':'OLM'}, 'Postabdominal Muscle':{'display name':'Postabdominal Muscle','parent structure':'Muscular','anatomical id':5090,'parent id':5000,'color':'#000099','abv':'PM'}, 'Posterior Carapace Adductor Muscle':{'display name':'Posterior Carapace Adductor Muscle','parent structure':'Muscular','anatomical id':5100,'parent id':5000,'color':'#0000CC','abv':'PCAM'}, 'Posterior Rotator':{'display name':'Posterior Rotator Muscle of Mandible','parent structure':'Muscular','anatomical id':5110,'parent id':5000,'color':'#033390','abv':'PRM'}, 'Rectal Dilator Muscle':{'display name':'Rectal Dilator Muscle','parent structure':'Muscular','anatomical id':5120,'parent id':5000,'color':'#0D24CC','abv':'RDM'}, 'Transverse Mandibular Muscle':{'display name':'Transverse Mandibular Muscle','parent structure':'Muscular','anatomical id':5130,'parent id':5000,'color':'#000099','abv':'TMM1'}, 'Transverse Mandibular Tendon':{'display name':'Transverse Mandibular Tendon','parent structure':'Muscular','anatomical id':5140,'parent id':5000,'color':'#0b3087','abv':'TMT'}, 'Transverse Muscle of Mandible':{'display name':'Transverse Muscle of Mandible','parent structure':'Muscular','anatomical id':5150,'parent id':5000,'color':'#0000CC','abv':'TMM2'}, 'Ventral Longitudinal Muscle':{'display name':'Ventral Longitudinal Muscle','parent structure':'Muscular','anatomical id':5160,'parent id':5000,'color':'#0000CC','abv':'VLM'}, 'Nervous, Sensory and Vision':{'display name':'Nervous, Sensory and Vision','parent structure':'Body','anatomical id':6000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Cerebral Ganglion':{'display name':'Cerebral Ganglion','parent structure':'Nervous, Sensory and Vision','anatomical id':6100,'parent id':6000,'color':'#960000','abv':'CG'}, 'Compound Eye':{'display name':'Compound Eye','parent structure':'Nervous, Sensory and Vision','anatomical id':6200,'parent id':6000,'color':'#FFFFFF','abv':'CE'}, 'Ommatidium':{'display name':'Ommatidium','parent structure':'Compound Eye','anatomical id':6210,'parent id':6200,'color':'#FF0000','abv':'Om'}, 'Melanin Pigment':{'display name':'Melanin Pigment','parent structure':'Compound Eye','anatomical id':6220,'parent id':6200,'color':'#FF9933','abv':'MP'}, 'Nerve Cord':{'display name':'Nerve Cord','parent structure':'Nervous, Sensory and Vision','anatomical id':6300,'parent id':6000,'color':'#FF155D','abv':'NC'}, 'Ocellus':{'display name':'Ocellus','parent structure':'Nervous, Sensory and Vision','anatomical id':6400,'parent id':6000,'color':'#FF353A','abv':'O'}, 'Optic Lobe':{'display name':'Optic Lobe of Cerebral Ganglion','parent structure':'Nervous, Sensory and Vision','anatomical id':6500,'parent id':6000,'color':'#D4000B','abv':'OL'}, 'Optic Nerve':{'display name':'Optic Nerve','parent structure':'Nervous, Sensory and Vision','anatomical id':6600,'parent id':6000,'color':'#FF353A','abv':'ON'}, 'Sensory Antenna':{'display name':'Sensory Antenna','parent structure':'Nervous, Sensory and Vision','anatomical id':6700,'parent id':6000,'color':'#FF0000','abv':'SA'}, 'Postabdomen':{'display name':'Postabdomen','parent structure':'Body','anatomical id':7000,'parent id':0,'color':'#FBB4FF','abv':'PA'}, 'Postabdominal Process':{'display name':'Abdominal Process','parent structure':'Postabdomen','anatomical id':7100,'parent id':7000,'color':'#FBB4FF','abv':'PAP'}, 'Anus':{'display name':'Anus','parent structure':'Postabdomen','anatomical id':7200,'parent id':7000,'color':'#FBB4FF','abv':'An'}, 'Postabdominal Claw':{'display name':'Postabdominal Claw','parent structure':'Postabdomen','anatomical id':7300,'parent id':7000,'color':'#FBB4FF','abv':'PAC'}, 'Reproductive':{'display name':'Reproductive','parent structure':'Body','anatomical id':8000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Embryo':{'display name':'Embryo','parent structure':'Reproductive','anatomical id':8100,'parent id':8000,'color':'#FFCC66','abv':'Emb'}, 'Fat Cell':{'display name':'Fat Cell','parent structure':'Reproductive','anatomical id':8200,'parent id':8000,'color':'#FF5C00','abv':'FC'}, 'Ovary':{'display name':'Ovary','parent structure':'Reproductive','anatomical id':8300,'parent id':8000,'color':'#ffe21f','abv':'Ov'}, 'Oviduct':{'display name':'Oviduct','parent structure':'Ovary','anatomical id':8310,'parent id':8300,'color':'#ffa51f','abv':'Ovt'}, 'Testis':{'display name':'Testis','parent structure':'Reproductive','anatomical id':8400,'parent id':8000,'color':'#ffe21f','abv':'Te'}, 'Testis Duct':{'display name':'Testis Duct','parent structure':'Testis','anatomical id':8410,'parent id':8400,'color':'#ffa51f','abv':'Tet'}, 'Gonopore':{'display name':'Gonopore (Male)','parent structure':'Testis','anatomical id':8420,'parent id':8400,'color':'#ffa51f','abv':'Gn'}}
// ontology_dict={'Body':{'display name':'Body','parent structure':'0','anatomical id':0,'parent id':999999999,'color':'#FFFFFF','abv':''}, 'Circulatory':{'display name':'Circulatory','parent structure':'Body','anatomical id':1000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Heart':{'display name':'Heart','parent structure':'Circulatory','anatomical id':1100,'parent id':1000,'color':'#ff00e5','abv':'Ht'}, 'Blood Cell':{'display name':'Hemocyte','parent structure':'Heart','anatomical id':1200,'parent id':1000,'color':'#ff00e5','abv':'H'}, 'Digestive':{'display name':'Digestive','parent structure':'Body','anatomical id':2000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Esophagus':{'display name':'Esophagus','parent structure':'Digestive','anatomical id':2100,'parent id':2000,'color':'#00CC00','abv':'Eso'}, 'Food Channel':{'display name':'Food Groove','parent structure':'Digestive','anatomical id':2200,'parent id':2000,'color':'#ccff99','abv':'FG'}, 'Cecum':{'display name':'Hepatic Cecum','parent structure':'Digestive','anatomical id':2300,'parent id':2000,'color':'#5FFF5F','abv':'Ce'}, 'Epithelial Cecum':{'display name':'Epithelial Cell','parent structure':'Hepatic Cecum','anatomical id':2310,'parent id':2300,'color':'#005F18','abv':'EC'}, 'Microvilli Cecum':{'display name':'Microvilli','parent structure':'Hepatic Cecum','anatomical id':2320,'parent id':2310,'color':'#FFFF66','abv':'Mv'}, 'Hindgut':{'display name':'Hindgut','parent structure':'Digestive','anatomical id':2400,'parent id':2000,'color':'#A0FF6A','abv':'HG'}, 'Epithelial Hindgut':{'display name':'Epithelial Cell','parent structure':'Hindgut','anatomical id':2410,'parent id':2400,'color':'#005F18','abv':'EC'}, 'Microvilli Hindgut':{'display name':'Microvilli','parent structure':'Epithelial Cell','anatomical id':2420,'parent id':2410,'color':'#FFFF66','abv':'Mv'}, 'Labrum':{'display name':'Labrum','parent structure':'Digestive','anatomical id':2500,'parent id':2000,'color':'#6AFF7B','abv':'L'}, 'Labral Gland Cell':{'display name':'Labral Gland Cell','parent structure':'Labrum','anatomical id':2510,'parent id':2500,'color':'#004A1B','abv':'LGC'}, 'Mandible':{'display name':'Mandible','parent structure':'Digestive','anatomical id':2600,'parent id':2000,'color':'#00FF9B','abv':'Md'}, 'Maxillae':{'display name':'Maxillule','parent structure':'Digestive','anatomical id':2700,'parent id':2000,'color':'#1ab574','abv':'Mxl'}, 'Midgut':{'display name':'Midgut','parent structure':'Digestive','anatomical id':2800,'parent id':2000,'color':'#60FF2A','abv':'MG'}, 'Epithelial Midgut':{'display name':'Epithelial Cell','parent structure':'Midgut','anatomical id':2810,'parent id':2800,'color':'#005F18','abv':'EC'}, 'Microvilli Midgut':{'display name':'Microvilli','parent structure':'Epithelial Cell','anatomical id':2820,'parent id':2810,'color':'#FFFF66','abv':'Mv'}, 'Excretory':{'display name':'Excretory','parent structure':'Body','anatomical id':3000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Maxillary Gland':{'display name':'Maxillary Gland','parent structure':'Excretory','anatomical id':3100,'parent id':3000,'color':'#FFFFFF','abv':'MxG'}, 'End Sac':{'display name':'End Sac','parent structure':'Maxillary Gland','anatomical id':3110,'parent id':3100,'color':'#0088FF','abv':'ES'}, 'Tubule':{'display name':'Tubule','parent structure':'Maxillary Gland','anatomical id':3120,'parent id':3100,'color':'#74DAFF','abv':'Tu'}, 'Locomotive and Osmotic  Regulatory':{'display name':'Locomotive and Osmoregulation','parent structure':'Body','anatomical id':4000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Swimming Antenna':{'display name':'Antenna','parent structure':'Locomotive and Osmoregulation','anatomical id':4100,'parent id':4000,'color':'#FFFFFF','abv':'A2'}, 'Protopodite':{'display name':'Protopodite','parent structure':'Antenna','anatomical id':4110,'parent id':4100,'color':'#996600','abv':'Pr'}, 'Ramus':{'display name':'Ramus','parent structure':'Antenna','anatomical id':4120,'parent id':4100,'color':'#CC9900','abv':'Ra'}, 'Seta':{'display name':'Seta','parent structure':'Ramus','anatomical id':4130,'parent id':4120,'color':'#e2ad58','abv':'Se'}, 'Trunk Limb 1':{'display name':'Thoracic  Limb 1','parent structure':'Locomotive and Osmoregulation','anatomical id':4200,'parent id':4000,'color':'#C98800','abv':'T1'}, 'Epipodite 1':{'display name':'Epipodite 1','parent structure':'Thoracic  Limb 1','anatomical id':4210,'parent id':4200,'color':'#C98800','abv':'Ep1'}, 'Setae of Trunk Limb 1':{'display name':'Seta','parent structure':'Thoracic  Limb 1','anatomical id':4220,'parent id':4200,'color':'#C98800','abv':'Se1'}, 'Trunk Limb 2':{'display name':'Thoracic Limb 2','parent structure':'Locomotive and Osmoregulation','anatomical id':4300,'parent id':4000,'color':'#C98800','abv':'T2'}, 'Epipodite 2':{'display name':'Epipodite 2','parent structure':'Thoracic  Limb 2','anatomical id':4310,'parent id':4300,'color':'#C98800','abv':'Ep1'}, 'Trunk Limb 3':{'display name':'Thoracic  Limb 3','parent structure':'Locomotive and Osmoregulation','anatomical id':4400,'parent id':4000,'color':'#C98800','abv':'T3'}, 'Epipodite 3':{'display name':'Epipodite 3','parent structure':'Thoracic  Limb 3','anatomical id':4410,'parent id':4400,'color':'#C98800','abv':'Ep3'}, 'Filter Plate 3':{'display name':'Filter Plate 3','parent structure':'Thoracic  Limb 3','anatomical id':4420,'parent id':4400,'color':'#8A4D00','abv':'FP3'}, 'Trunk Limb 4':{'display name':'Thoracic  Limb 4','parent structure':'Locomotive and Osmoregulation','anatomical id':4500,'parent id':4000,'color':'#C98800','abv':'T4'}, 'Epipodite 4':{'display name':'Epipodite 4','parent structure':'Thoracic  Limb 4','anatomical id':4510,'parent id':4500,'color':'#C98800','abv':'Ep4'}, 'Filter Plate 4':{'display name':'Filter Plate 4','parent structure':'Thoracic  Limb 4','anatomical id':4520,'parent id':4500,'color':'#8A4D00','abv':'FP4'}, 'Trunk Limb 5':{'display name':'Thoracic  Limb 5','parent structure':'Locomotive and Osmoregulation','anatomical id':4600,'parent id':4000,'color':'#C98800','abv':'T5'}, 'Epipodite 5':{'display name':'Epipodite 5','parent structure':'Thoracic  Limb 5','anatomical id':4610,'parent id':4600,'color':'#C98800','abv':'Ep5'}, 'Muscular':{'display name':'Muscular','parent structure':'Body','anatomical id':5000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Antennal Muscle':{'display name':'Antennal Muscle','parent structure':'Muscular','anatomical id':5010,'parent id':5000,'color':'#000099','abv':'AM'}, 'Anterior Carapace Adductor Muscle':{'display name':'Anterior Carapace Adductor Muscle','parent structure':'Muscular','anatomical id':5020,'parent id':5000,'color':'#000099','abv':'ACAM'}, 'Anterior Rotator':{'display name':'Anterior Rotator Muscle of Mandible','parent structure':'Muscular','anatomical id':5030,'parent id':5000,'color':'#00197f','abv':'ARM'}, 'Circular Muscle':{'display name':'Circular Muscle (Gut)','parent structure':'Muscular','anatomical id':5040,'parent id':5000,'color':'#0D24CC','abv':'CM'}, 'Dorsal Longitudinal Muscle':{'display name':'Dorsal Longitudinal Muscle','parent structure':'Muscular','anatomical id':5050,'parent id':5000,'color':'#0000CC','abv':'DLM'}, 'Esophageal Dilator Muscle':{'display name':'Esophageal Dilator Muscle','parent structure':'Muscular','anatomical id':5060,'parent id':5000,'color':'#0D24CC','abv':'EDM'}, 'Horizontal Muscle':{'display name':'Horizontal Muscle','parent structure':'Muscular','anatomical id':5070,'parent id':5000,'color':'#0D24CC','abv':'HM'}, 'Levator Muscle of Labrum':{'display name':'Levator Muscle of Labrum','parent structure':'Muscular','anatomical id':5080,'parent id':5000,'color':'#000099','abv':'LM'}, 'Oblique-Lateral Muscle':{'display name':'Oblique-Lateral Muscle','parent structure':'Muscular','anatomical id':5081,'parent id':5000,'color':'#000099','abv':'OLM'}, 'Postabdominal Muscle':{'display name':'Postabdominal Muscle','parent structure':'Muscular','anatomical id':5090,'parent id':5000,'color':'#000099','abv':'PM'}, 'Posterior Carapace Adductor Muscle':{'display name':'Posterior Carapace Adductor Muscle','parent structure':'Muscular','anatomical id':5100,'parent id':5000,'color':'#0000CC','abv':'PCAM'}, 'Posterior Rotator':{'display name':'Posterior Rotator Muscle of Mandible','parent structure':'Muscular','anatomical id':5110,'parent id':5000,'color':'#033390','abv':'PRM'}, 'Rectal Dilator Muscle':{'display name':'Rectal Dilator Muscle','parent structure':'Muscular','anatomical id':5120,'parent id':5000,'color':'#0D24CC','abv':'RDM'}, 'Transverse Mandibular Muscle':{'display name':'Transverse Mandibular Muscle','parent structure':'Muscular','anatomical id':5130,'parent id':5000,'color':'#000099','abv':'TMM1'}, 'Transverse Mandibular Tendon':{'display name':'Transverse Mandibular Tendon','parent structure':'Muscular','anatomical id':5140,'parent id':5000,'color':'#0b3087','abv':'TMT'}, 'Transverse Muscle of Mandible':{'display name':'Transverse Muscle of Mandible','parent structure':'Muscular','anatomical id':5150,'parent id':5000,'color':'#0000CC','abv':'TMM2'}, 'Ventral Longitudinal Muscle':{'display name':'Ventral Longitudinal Muscle','parent structure':'Muscular','anatomical id':5160,'parent id':5000,'color':'#0000CC','abv':'VLM'}, 'Nervous, Sensory and Vision':{'display name':'Nervous, Sensory and Vision','parent structure':'Body','anatomical id':6000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Cerebral Ganglion':{'display name':'Cerebral Ganglion','parent structure':'Nervous, Sensory and Vision','anatomical id':6100,'parent id':6000,'color':'#960000','abv':'CG'}, 'Compound Eye':{'display name':'Compound Eye','parent structure':'Nervous, Sensory and Vision','anatomical id':6200,'parent id':6000,'color':'#FFFFFF','abv':'CE'}, 'Ommatidium':{'display name':'Ommatidium','parent structure':'Compound Eye','anatomical id':6210,'parent id':6200,'color':'#FF0000','abv':'Om'}, 'Melanin Pigment':{'display name':'Pigment','parent structure':'Compound Eye','anatomical id':6220,'parent id':6200,'color':'#FF9933','abv':'MP'}, 'Nerve Cord':{'display name':'Nerve Cord','parent structure':'Nervous, Sensory and Vision','anatomical id':6300,'parent id':6000,'color':'#FF155D','abv':'NC'}, 'Ocellus':{'display name':'Ocellus','parent structure':'Nervous, Sensory and Vision','anatomical id':6400,'parent id':6000,'color':'#FF353A','abv':'O'}, 'Optic Lobe':{'display name':'Optic Lobe of Cerebral Ganglion','parent structure':'Nervous, Sensory and Vision','anatomical id':6500,'parent id':6000,'color':'#D4000B','abv':'OL'}, 'Optic Nerve':{'display name':'Optic Nerve','parent structure':'Nervous, Sensory and Vision','anatomical id':6600,'parent id':6000,'color':'#FF353A','abv':'ON'}, 'Sensory Antenna':{'display name':'Antennule','parent structure':'Nervous, Sensory and Vision','anatomical id':6700,'parent id':6000,'color':'#FF0000','abv':'A1'}, 'Postabdomen':{'display name':'Postabdomen','parent structure':'Body','anatomical id':7000,'parent id':0,'color':'#FFFFFF','abv':'PA'}, 'Postabdominal Process':{'display name':'Abdominal Process','parent structure':'Postabdomen','anatomical id':7100,'parent id':7000,'color':'#FBB4FF','abv':'PAP'}, 'Anus':{'display name':'Anus','parent structure':'Postabdomen','anatomical id':7200,'parent id':7000,'color':'#FBB4FF','abv':'An'}, 'Postabdominal Claw':{'display name':'Postabdominal Claw','parent structure':'Postabdomen','anatomical id':7300,'parent id':7000,'color':'#FBB4FF','abv':'PAC'}, 'Reproductive':{'display name':'Reproductive','parent structure':'Body','anatomical id':8000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Embryo':{'display name':'Embryo','parent structure':'Reproductive','anatomical id':8100,'parent id':8000,'color':'#FFCC66','abv':'Emb'}, 'Fat Cell':{'display name':'Fat Cell','parent structure':'Reproductive','anatomical id':8200,'parent id':8000,'color':'#FF5C00','abv':'FC'}, 'Ovary':{'display name':'Ovary','parent structure':'Reproductive','anatomical id':8300,'parent id':8000,'color':'#ffe21f','abv':'Ov'}, 'Oviduct':{'display name':'Oviduct','parent structure':'Ovary','anatomical id':8310,'parent id':8300,'color':'#ffa51f','abv':'Ovt'}, 'Testis':{'display name':'Testis','parent structure':'Reproductive','anatomical id':8400,'parent id':8000,'color':'#ffe21f','abv':'Te'}, 'Testis Duct':{'display name':'Sperm Duct','parent structure':'Testis','anatomical id':8410,'parent id':8400,'color':'#ffa51f','abv':'SD'}, 'Gonopore':{'display name':'Gonopore (Male)','parent structure':'Testis','anatomical id':8420,'parent id':8400,'color':'#ffa51f','abv':'Gn'}}
//Parse 7
// ontology_dict={'Body':{'display name':'Annotation','parent structure':'0','anatomical id':0,'parent id':999999999,'color':'#FFFFFF','abv':''}, 'Circulatory':{'display name':'Circulatory','parent structure':'Body','anatomical id':1000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Heart':{'display name':'Heart','parent structure':'Circulatory','anatomical id':1100,'parent id':1000,'color':'#ff00e5','abv':'Ht'}, 'Blood Cell':{'display name':'Hemocyte','parent structure':'Heart','anatomical id':1200,'parent id':1000,'color':'#ff00e5','abv':'H'}, 'Digestive':{'display name':'Digestive','parent structure':'Body','anatomical id':2000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Esophagus':{'display name':'Esophagus','parent structure':'Digestive','anatomical id':2100,'parent id':2000,'color':'#00CC00','abv':'Eso'}, 'Food Channel':{'display name':'Food Groove','parent structure':'Digestive','anatomical id':2200,'parent id':2000,'color':'#ccff99','abv':'FG'}, 'Cecum':{'display name':'Hepatic Cecum','parent structure':'Digestive','anatomical id':2300,'parent id':2000,'color':'#5FFF5F','abv':'Ce'}, 'Epithelial Cecum':{'display name':'Epithelial Cell','parent structure':'Hepatic Cecum','anatomical id':2310,'parent id':2300,'color':'#005F18','abv':'EC'}, 'Microvilli Cecum':{'display name':'Microvilli','parent structure':'Hepatic Cecum','anatomical id':2320,'parent id':2310,'color':'#FFFF66','abv':'Mv'}, 'Hindgut':{'display name':'Hindgut','parent structure':'Digestive','anatomical id':2400,'parent id':2000,'color':'#A0FF6A','abv':'HG'}, 'Epithelial Hindgut':{'display name':'Epithelial Cell','parent structure':'Hindgut','anatomical id':2410,'parent id':2400,'color':'#005F18','abv':'EC'}, 'Microvilli Hindgut':{'display name':'Microvilli','parent structure':'Epithelial Cell','anatomical id':2420,'parent id':2410,'color':'#FFFF66','abv':'Mv'}, 'Labrum':{'display name':'Labrum','parent structure':'Digestive','anatomical id':2500,'parent id':2000,'color':'#6AFF7B','abv':'L'}, 'Labral Gland Cell':{'display name':'Labral Gland Cell','parent structure':'Labrum','anatomical id':2510,'parent id':2500,'color':'#004A1B','abv':'LGC'}, 'Mandible':{'display name':'Mandible','parent structure':'Digestive','anatomical id':2600,'parent id':2000,'color':'#00FF9B','abv':'Md'}, 'Maxillae':{'display name':'Maxillule','parent structure':'Digestive','anatomical id':2700,'parent id':2000,'color':'#1ab574','abv':'Mxl'}, 'Midgut':{'display name':'Midgut','parent structure':'Digestive','anatomical id':2800,'parent id':2000,'color':'#60FF2A','abv':'MG'}, 'Epithelial Midgut':{'display name':'Epithelial Cell','parent structure':'Midgut','anatomical id':2810,'parent id':2800,'color':'#005F18','abv':'EC'}, 'Microvilli Midgut':{'display name':'Microvilli','parent structure':'Epithelial Cell','anatomical id':2820,'parent id':2810,'color':'#FFFF66','abv':'Mv'}, 'Excretory':{'display name':'Excretory','parent structure':'Body','anatomical id':3000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Maxillary Gland':{'display name':'Maxillary Gland','parent structure':'Excretory','anatomical id':3100,'parent id':3000,'color':'#0088FF','abv':'asd'}, 'End Sac':{'display name':'End Sac','parent structure':'Maxillary Gland','anatomical id':3110,'parent id':3100,'color':'#0088FF','abv':'ES'}, 'Tubule':{'display name':'Tubule','parent structure':'Maxillary Gland','anatomical id':3120,'parent id':3100,'color':'#74DAFF','abv':'Tu'}, 'Locomotive and Osmotic  Regulatory':{'display name':'Locomotive and Osmoregulation','parent structure':'Body','anatomical id':4000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Swimming Antenna':{'display name':'Antenna','parent structure':'Locomotive and Osmoregulation','anatomical id':4100,'parent id':4000,'color':'#C98800','abv':'A2'}, 'Protopodite':{'display name':'Protopodite','parent structure':'Antenna','anatomical id':4110,'parent id':4100,'color':'#996600','abv':'Pr'}, 'Ramus':{'display name':'Ramus','parent structure':'Antenna','anatomical id':4120,'parent id':4100,'color':'#CC9900','abv':'Ra'}, 'Seta':{'display name':'Seta','parent structure':'Ramus','anatomical id':4130,'parent id':4120,'color':'#e2ad58','abv':'Se'}, 'Trunk Limb 1':{'display name':'Thoracic  Limb 1','parent structure':'Locomotive and Osmoregulation','anatomical id':4200,'parent id':4000,'color':'#C98800','abv':'T1'}, 'Setae of Trunk Limb 1':{'display name':'Seta','parent structure':'Thoracic  Limb 1','anatomical id':4210,'parent id':4200,'color':'#C98800','abv':'Se1'}, 'Trunk Limb 2':{'display name':'Thoracic Limb 2','parent structure':'Locomotive and Osmoregulation','anatomical id':4300,'parent id':4000,'color':'#C98800','abv':'T2'}, 'Trunk Limb 3':{'display name':'Thoracic  Limb 3','parent structure':'Locomotive and Osmoregulation','anatomical id':4400,'parent id':4000,'color':'#C98800','abv':'T3'}, 'Filter Plate 3':{'display name':'Filter Plate 3','parent structure':'Thoracic  Limb 3','anatomical id':4410,'parent id':4400,'color':'#8A4D00','abv':'FP3'}, 'Trunk Limb 4':{'display name':'Thoracic  Limb 4','parent structure':'Locomotive and Osmoregulation','anatomical id':4500,'parent id':4000,'color':'#C98800','abv':'T4'}, 'Filter Plate 4':{'display name':'Filter Plate 4','parent structure':'Thoracic  Limb 4','anatomical id':4510,'parent id':4500,'color':'#8A4D00','abv':'FP4'}, 'Trunk Limb 5':{'display name':'Thoracic  Limb 5','parent structure':'Locomotive and Osmoregulation','anatomical id':4600,'parent id':4000,'color':'#C98800','abv':'T5'}, 'Muscular':{'display name':'Muscular','parent structure':'Body','anatomical id':5000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Antennal Muscle':{'display name':'Antennal Muscle','parent structure':'Muscular','anatomical id':5010,'parent id':5000,'color':'#000099','abv':'A2M'}, 'Antennule Muscle':{'display name':'Antennule Muscle (Male)','parent structure':'Muscular','anatomical id':5020,'parent id':5000,'color':'#0D24CC','abv':'A1M'}, 'Anterior Carapace Adductor Muscle':{'display name':'Anterior Carapace Adductor Muscle','parent structure':'Muscular','anatomical id':5030,'parent id':5000,'color':'#000099','abv':'ACAM'}, 'Anterior Rotator':{'display name':'Anterior Rotator Muscle of Mandible','parent structure':'Muscular','anatomical id':5040,'parent id':5000,'color':'#00197f','abv':'ARM'}, 'Circular Muscle':{'display name':'Circular Muscle ','parent structure':'Muscular','anatomical id':5050,'parent id':5000,'color':'#0D24CC','abv':'CM'}, 'Dorsal Longitudinal Muscle':{'display name':'Dorsal Longitudinal Muscle','parent structure':'Muscular','anatomical id':5060,'parent id':5000,'color':'#0000CC','abv':'DLM'}, 'Esophageal Dilator Muscle':{'display name':'Esophageal Dilator Muscle','parent structure':'Muscular','anatomical id':5070,'parent id':5000,'color':'#0D24CC','abv':'EDM'}, 'Horizontal Muscle':{'display name':'Horizontal Muscle','parent structure':'Muscular','anatomical id':5080,'parent id':5000,'color':'#0D24CC','abv':'HM'}, 'Levator Muscle of Labrum':{'display name':'Levator Muscle of Labrum','parent structure':'Muscular','anatomical id':5081,'parent id':5000,'color':'#000099','abv':'LM'}, 'Oblique-Lateral Muscle':{'display name':'Oblique-Lateral Muscle','parent structure':'Muscular','anatomical id':5090,'parent id':5000,'color':'#000099','abv':'OLM'}, 'Postabdominal Muscle':{'display name':'Postabdominal Muscle','parent structure':'Muscular','anatomical id':5100,'parent id':5000,'color':'#000099','abv':'PM'}, 'Posterior Carapace Adductor Muscle':{'display name':'Posterior Carapace Adductor Muscle','parent structure':'Muscular','anatomical id':5110,'parent id':5000,'color':'#0000CC','abv':'PCAM'}, 'Posterior Rotator':{'display name':'Posterior Rotator Muscle of Mandible','parent structure':'Muscular','anatomical id':5120,'parent id':5000,'color':'#033390','abv':'PRM'}, 'Rectal Dilator Muscle':{'display name':'Rectal Dilator Muscle','parent structure':'Muscular','anatomical id':5130,'parent id':5000,'color':'#0D24CC','abv':'RDM'}, 'Transverse Mandibular Muscle':{'display name':'Transverse Mandibular Muscle','parent structure':'Muscular','anatomical id':5140,'parent id':5000,'color':'#000099','abv':'TMM1'}, 'Transverse Mandibular Tendon':{'display name':'Transverse Mandibular Tendon','parent structure':'Muscular','anatomical id':5150,'parent id':5000,'color':'#0b3087','abv':'TMT'}, 'Transverse Muscle of Mandible':{'display name':'Transverse Muscle of Mandible','parent structure':'Muscular','anatomical id':5160,'parent id':5000,'color':'#0000CC','abv':'TMM2'}, 'Ventral Longitudinal Muscle':{'display name':'Ventral Longitudinal Muscle','parent structure':'Muscular','anatomical id':5170,'parent id':5000,'color':'#0000CC','abv':'VLM'}, 'Nervous, Sensory and Vision':{'display name':'Nervous, Sensory and Vision','parent structure':'Body','anatomical id':6000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Sensory Antenna':{'display name':'Antennule','parent structure':'Nervous, Sensory and Vision','anatomical id':6100,'parent id':6000,'color':'#FF0000','abv':'A1'}, 'Cerebral Ganglion':{'display name':'Cerebral Ganglion','parent structure':'Nervous, Sensory and Vision','anatomical id':6200,'parent id':6000,'color':'#960000','abv':'CG'}, 'Compound Eye':{'display name':'Compound Eye','parent structure':'Nervous, Sensory and Vision','anatomical id':6300,'parent id':6000,'color':'#FF0000','abv':'CE'}, 'Ommatidium_':{'display name':'Ommatidium','parent structure':'Compound Eye','anatomical id':6310,'parent id':6300,'color':'FF0000','abv':''}, 'Ommatidium':{'display name':'Crystalline Cone','parent structure':'Ommatidium','anatomical id':6301,'parent id':6310,'color':'#FF0000','abv':'CC'}, 'Melanin Pigment':{'display name':'Retinula Cell','parent structure':'Ommatidium','anatomical id':6302,'parent id':6310,'color':'#FF9933','abv':'RC'}, 'Nerve Cord':{'display name':'Nerve Cord','parent structure':'Nervous, Sensory and Vision','anatomical id':6400,'parent id':6000,'color':'#FF155D','abv':'NC'}, 'Ocellus':{'display name':'Ocellus','parent structure':'Nervous, Sensory and Vision','anatomical id':6500,'parent id':6000,'color':'#FF353A','abv':'O'}, 'Optic Lobe':{'display name':'Optic Lobe of Cerebral Ganglion','parent structure':'Nervous, Sensory and Vision','anatomical id':6600,'parent id':6000,'color':'#D4000B','abv':'OL'}, 'Optic Nerve':{'display name':'Optic Nerve','parent structure':'Nervous, Sensory and Vision','anatomical id':6700,'parent id':6000,'color':'#FF353A','abv':'ON'}, 'Postabdomen':{'display name':'Postabdomen','parent structure':'Body','anatomical id':7000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Postabdominal Process':{'display name':'Abdominal Process','parent structure':'Postabdomen','anatomical id':7100,'parent id':7000,'color':'#FBB4FF','abv':'PAP'}, 'Anus':{'display name':'Anus','parent structure':'Postabdomen','anatomical id':7200,'parent id':7000,'color':'#FBB4FF','abv':'An'}, 'Postabdominal Claw':{'display name':'Postabdominal Claw','parent structure':'Postabdomen','anatomical id':7300,'parent id':7000,'color':'#FBB4FF','abv':'PAC'}, 'Reproductive':{'display name':'Reproductive','parent structure':'Body','anatomical id':8000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Embryo':{'display name':'Embryo','parent structure':'Reproductive','anatomical id':8100,'parent id':8000,'color':'#FFCC66','abv':'Emb'}, 'Fat Cell':{'display name':'Fat Cell','parent structure':'Reproductive','anatomical id':8200,'parent id':8000,'color':'#FF5C00','abv':'FC'}, 'Ovary':{'display name':'Ovary','parent structure':'Reproductive','anatomical id':8300,'parent id':8000,'color':'#ffe21f','abv':'Ov'}, 'Oviduct':{'display name':'Oviduct','parent structure':'Ovary','anatomical id':8310,'parent id':8300,'color':'#ffa51f','abv':'Ovt'}, 'Testis':{'display name':'Testis','parent structure':'Reproductive','anatomical id':8400,'parent id':8000,'color':'#ffe21f','abv':'Te'}, 'Testis Duct':{'display name':'Sperm Duct','parent structure':'Testis','anatomical id':8410,'parent id':8400,'color':'#ffa51f','abv':'SD'}, 'Gonopore':{'display name':'Gonopore (Male)','parent structure':'Testis','anatomical id':8420,'parent id':8400,'color':'#ffa51f','abv':'Gn'}}

//Parse 8
// ontology_dict={'Body':{'display name':'Annotation','parent structure':'0','anatomical id':0,'parent id':999999999,'color':'#FFFFFF','abv':''}, 'Circulatory':{'display name':'Circulatory','parent structure':'Body','anatomical id':1000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Heart':{'display name':'Heart','parent structure':'Circulatory','anatomical id':1100,'parent id':1000,'color':'#ff00e5','abv':'Ht'}, 'Blood Cell':{'display name':'Hemocyte','parent structure':'Circulatory','anatomical id':1200,'parent id':1000,'color':'#ff00e5','abv':'H'}, 'Digestive':{'display name':'Digestive','parent structure':'Body','anatomical id':2000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Esophagus':{'display name':'Esophagus','parent structure':'Digestive','anatomical id':2100,'parent id':2000,'color':'#00CC00','abv':'Eso'}, 'Food Channel':{'display name':'Food Groove','parent structure':'Digestive','anatomical id':2200,'parent id':2000,'color':'#ccff99','abv':'FG'}, 'Cecum':{'display name':'Hepatic Cecum','parent structure':'Digestive','anatomical id':2300,'parent id':2000,'color':'#5FFF5F','abv':'Ce'}, 'Epithelial Cecum':{'display name':'Epithelial Cell','parent structure':'Hepatic Cecum','anatomical id':2310,'parent id':2300,'color':'#005F18','abv':'EC'}, 'Microvilli Cecum':{'display name':'Microvilli','parent structure':'Hepatic Cecum','anatomical id':2320,'parent id':2310,'color':'#FFFF66','abv':'Mv'}, 'Hindgut':{'display name':'Hindgut','parent structure':'Digestive','anatomical id':2400,'parent id':2000,'color':'#A0FF6A','abv':'HG'}, 'Epithelial Hindgut':{'display name':'Epithelial Cell','parent structure':'Hindgut','anatomical id':2410,'parent id':2400,'color':'#005F18','abv':'EC'}, 'Microvilli Hindgut':{'display name':'Microvilli','parent structure':'Epithelial Cell','anatomical id':2420,'parent id':2410,'color':'#FFFF66','abv':'Mv'}, 'Labrum':{'display name':'Labrum','parent structure':'Digestive','anatomical id':2500,'parent id':2000,'color':'#6AFF7B','abv':'L'}, 'Labral Gland Cell':{'display name':'Labral Gland Cell','parent structure':'Labrum','anatomical id':2510,'parent id':2500,'color':'#004A1B','abv':'LGC'}, 'Mandible':{'display name':'Mandible','parent structure':'Digestive','anatomical id':2600,'parent id':2000,'color':'#00FF9B','abv':'Md'}, 'Maxillae':{'display name':'Maxillule','parent structure':'Digestive','anatomical id':2700,'parent id':2000,'color':'#1ab574','abv':'Mxl'}, 'Midgut':{'display name':'Midgut','parent structure':'Digestive','anatomical id':2800,'parent id':2000,'color':'#60FF2A','abv':'MG'}, 'Epithelial Midgut':{'display name':'Epithelial Cell','parent structure':'Midgut','anatomical id':2810,'parent id':2800,'color':'#005F18','abv':'EC'}, 'Microvilli Midgut':{'display name':'Microvilli','parent structure':'Epithelial Cell','anatomical id':2820,'parent id':2810,'color':'#FFFF66','abv':'Mv'}, 'Excretory':{'display name':'Excretory','parent structure':'Body','anatomical id':3000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Maxillary Gland':{'display name':'Maxillary Gland','parent structure':'Excretory','anatomical id':3100,'parent id':3000,'color':'#0088FF','abv':''}, 'End Sac':{'display name':'End Sac','parent structure':'Maxillary Gland','anatomical id':3110,'parent id':3100,'color':'#0088FF','abv':'ES'}, 'Tubule':{'display name':'Tubule','parent structure':'Maxillary Gland','anatomical id':3120,'parent id':3100,'color':'#74DAFF','abv':'Tu'}, 'Locomotive and Osmotic  Regulatory':{'display name':'Locomotive and Osmoregulation','parent structure':'Body','anatomical id':4000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Swimming Antenna':{'display name':'Antenna','parent structure':'Locomotive and Osmoregulation','anatomical id':4100,'parent id':4000,'color':'#C98800','abv':'A2'}, 'Protopodite':{'display name':'Protopodite','parent structure':'Antenna','anatomical id':4110,'parent id':4100,'color':'#996600','abv':'Pr'}, 'Ramus':{'display name':'Ramus','parent structure':'Antenna','anatomical id':4120,'parent id':4100,'color':'#CC9900','abv':'Ra'}, 'Seta':{'display name':'Seta','parent structure':'Ramus','anatomical id':4130,'parent id':4120,'color':'#e2ad58','abv':'Se'}, 'Trunk Limb 1':{'display name':'Thoracic  Limb 1','parent structure':'Locomotive and Osmoregulation','anatomical id':4200,'parent id':4000,'color':'#C98800','abv':'T1'}, 'Copulatory Hook':{'display name':'Copulatory Hook (Male)','parent structure':'Thoracic  Limb 1','anatomical id':4210,'parent id':4200,'color':'#8A4D00','abv':'CH'}, 'Setae of Trunk Limb 1':{'display name':'Seta','parent structure':'Thoracic  Limb 1','anatomical id':4220,'parent id':4200,'color':'#e2ad58','abv':'Se1'}, 'Trunk Limb 2':{'display name':'Thoracic Limb 2','parent structure':'Locomotive and Osmoregulation','anatomical id':4300,'parent id':4000,'color':'#C98800','abv':'T2'}, 'Trunk Limb 3':{'display name':'Thoracic  Limb 3','parent structure':'Locomotive and Osmoregulation','anatomical id':4400,'parent id':4000,'color':'#C98800','abv':'T3'}, 'Filter Plate 3':{'display name':'Filter Plate 3','parent structure':'Thoracic  Limb 3','anatomical id':4410,'parent id':4400,'color':'#8A4D00','abv':'FP3'}, 'Trunk Limb 4':{'display name':'Thoracic  Limb 4','parent structure':'Locomotive and Osmoregulation','anatomical id':4500,'parent id':4000,'color':'#C98800','abv':'T4'}, 'Filter Plate 4':{'display name':'Filter Plate 4','parent structure':'Thoracic  Limb 4','anatomical id':4510,'parent id':4500,'color':'#8A4D00','abv':'FP4'}, 'Trunk Limb 5':{'display name':'Thoracic  Limb 5','parent structure':'Locomotive and Osmoregulation','anatomical id':4600,'parent id':4000,'color':'#C98800','abv':'T5'}, 'Muscular':{'display name':'Muscular','parent structure':'Body','anatomical id':5000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Antennal Muscle':{'display name':'Antennal Muscle','parent structure':'Muscular','anatomical id':5010,'parent id':5000,'color':'#000099','abv':'A2M'}, 'Antennule Muscle':{'display name':'Antennule Muscle (Male)','parent structure':'Muscular','anatomical id':5020,'parent id':5000,'color':'#0D24CC','abv':'A1M'}, 'Anterior Carapace Adductor Muscle':{'display name':'Anterior Carapace Adductor Muscle','parent structure':'Muscular','anatomical id':5030,'parent id':5000,'color':'#000099','abv':'ACAM'}, 'Anterior Rotator':{'display name':'Anterior Rotator Muscle of Mandible','parent structure':'Muscular','anatomical id':5040,'parent id':5000,'color':'#00197f','abv':'ARM'}, 'Circular Muscle':{'display name':'Circular Muscle ','parent structure':'Muscular','anatomical id':5050,'parent id':5000,'color':'#0D24CC','abv':'CM'}, 'Dorsal Longitudinal Muscle':{'display name':'Dorsal Longitudinal Muscle','parent structure':'Muscular','anatomical id':5060,'parent id':5000,'color':'#0000CC','abv':'DLM'}, 'Esophageal Dilator Muscle':{'display name':'Esophageal Dilator Muscle','parent structure':'Muscular','anatomical id':5070,'parent id':5000,'color':'#0D24CC','abv':'EDM'}, 'Horizontal Muscle':{'display name':'Horizontal Muscle','parent structure':'Muscular','anatomical id':5080,'parent id':5000,'color':'#0D24CC','abv':'HM'}, 'Levator Muscle of Labrum':{'display name':'Levator Muscle of Labrum','parent structure':'Muscular','anatomical id':5081,'parent id':5000,'color':'#000099','abv':'LM'}, 'Oblique-Lateral Muscle':{'display name':'Oblique-Lateral Muscle','parent structure':'Muscular','anatomical id':5090,'parent id':5000,'color':'#000099','abv':'OLM'}, 'Postabdominal Muscle':{'display name':'Postabdominal Muscle','parent structure':'Muscular','anatomical id':5100,'parent id':5000,'color':'#000099','abv':'PM'}, 'Posterior Carapace Adductor Muscle':{'display name':'Posterior Carapace Adductor Muscle','parent structure':'Muscular','anatomical id':5110,'parent id':5000,'color':'#0000CC','abv':'PCAM'}, 'Posterior Rotator':{'display name':'Posterior Rotator Muscle of Mandible','parent structure':'Muscular','anatomical id':5120,'parent id':5000,'color':'#033390','abv':'PRM'}, 'Rectal Dilator Muscle':{'display name':'Rectal Dilator Muscle','parent structure':'Muscular','anatomical id':5130,'parent id':5000,'color':'#0D24CC','abv':'RDM'}, 'Transverse Mandibular Muscle':{'display name':'Transverse Mandibular Muscle','parent structure':'Muscular','anatomical id':5140,'parent id':5000,'color':'#000099','abv':'TMM1'}, 'Transverse Mandibular Tendon':{'display name':'Transverse Mandibular Tendon','parent structure':'Muscular','anatomical id':5150,'parent id':5000,'color':'#0b3087','abv':'TMT'}, 'Transverse Muscle of Mandible':{'display name':'Transverse Muscle of Mandible','parent structure':'Muscular','anatomical id':5160,'parent id':5000,'color':'#0000CC','abv':'TMM2'}, 'Ventral Longitudinal Muscle':{'display name':'Ventral Longitudinal Muscle','parent structure':'Muscular','anatomical id':5170,'parent id':5000,'color':'#0000CC','abv':'VLM'}, 'Nervous, Sensory and Vision':{'display name':'Nervous, Sensory and Vision','parent structure':'Body','anatomical id':6000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Sensory Antenna':{'display name':'Antennule','parent structure':'Nervous, Sensory and Vision','anatomical id':6100,'parent id':6000,'color':'#FF0000','abv':'A1'}, 'Cerebral Ganglion':{'display name':'Cerebral Ganglion','parent structure':'Nervous, Sensory and Vision','anatomical id':6200,'parent id':6000,'color':'#960000','abv':'CG'}, 'Compound Eye':{'display name':'Compound Eye','parent structure':'Nervous, Sensory and Vision','anatomical id':6300,'parent id':6000,'color':'#FF0000','abv':'Ce'}, 'Ommatidium_':{'display name':'Ommatidium','parent structure':'Compound Eye','anatomical id':6310,'parent id':6300,'color':'#FF0000','abv':'Om'}, 'Ommatidium':{'display name':'Crystalline Cone','parent structure':'Ommatidium','anatomical id':6301,'parent id':6300,'color':'#FF0000','abv':'CC'}, 'Melanin Pigment':{'display name':'Retinula Cell','parent structure':'Ommatidium','anatomical id':6302,'parent id':6300,'color':'#FF9933','abv':'RC'}, 'Nerve Cord':{'display name':'Nerve Cord','parent structure':'Nervous, Sensory and Vision','anatomical id':6400,'parent id':6000,'color':'#FF155D','abv':'NC'}, 'Ocellus':{'display name':'Ocellus','parent structure':'Nervous, Sensory and Vision','anatomical id':6500,'parent id':6000,'color':'#FF353A','abv':'O'}, 'Optic Lobe':{'display name':'Optic Lobe of Cerebral Ganglion','parent structure':'Nervous, Sensory and Vision','anatomical id':6600,'parent id':6000,'color':'#D4000B','abv':'OL'}, 'Optic Nerve':{'display name':'Optic Nerve','parent structure':'Nervous, Sensory and Vision','anatomical id':6700,'parent id':6000,'color':'#FF353A','abv':'ON'}, 'Postabdomen':{'display name':'Postabdomen','parent structure':'Body','anatomical id':7000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Postabdominal Process':{'display name':'Abdominal Process','parent structure':'Postabdomen','anatomical id':7100,'parent id':7000,'color':'#FBB4FF','abv':'AP'}, 'Anus':{'display name':'Anus','parent structure':'Postabdomen','anatomical id':7200,'parent id':7000,'color':'#FBB4FF','abv':'An'}, 'Postabdominal Claw':{'display name':'Postabdominal Claw','parent structure':'Postabdomen','anatomical id':7300,'parent id':7000,'color':'#FBB4FF','abv':'PAC'}, 'Reproductive':{'display name':'Reproductive','parent structure':'Body','anatomical id':8000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Embryo':{'display name':'Embryo','parent structure':'Reproductive','anatomical id':8100,'parent id':8000,'color':'#FFCC66','abv':'Emb'}, 'Fat Cell':{'display name':'Fat Cell','parent structure':'Reproductive','anatomical id':8200,'parent id':8000,'color':'#FF5C00','abv':'FC'}, 'Ovary':{'display name':'Ovary','parent structure':'Reproductive','anatomical id':8300,'parent id':8000,'color':'#ffe21f','abv':'Ov'}, 'Oviduct':{'display name':'Oviduct','parent structure':'Ovary','anatomical id':8310,'parent id':8300,'color':'#ffa51f','abv':'Ovt'}, 'Testis':{'display name':'Testis','parent structure':'Reproductive','anatomical id':8400,'parent id':8000,'color':'#ffe21f','abv':'Te'}, 'Testis Duct':{'display name':'Sperm Duct','parent structure':'Testis','anatomical id':8410,'parent id':8400,'color':'#ffa51f','abv':'SD'}, 'Gonopore':{'display name':'Gonopore (Male)','parent structure':'Testis','anatomical id':8420,'parent id':8400,'color':'#ffa51f','abv':'Gn'}}

//parse zf
ontology_dict={'Body':{'display name':'Annotation','parent structure':'0','anatomical id':0,'parent id':999999,'color':'#FFFFFF','abv':'Annotation'}, 'Circulatory':{'display name':'Circulatory','parent structure':'Body','anatomical id':1000,'parent id':0,'color':'#FFFFFF','abv':''}, 'heart':{'display name':'heart','parent structure':'circulatory','anatomical id':1100,'parent id':1000,'color':'#FF00CC','abv':'Ht'}, 'atrium':{'display name':'atrium','parent structure':'heart','anatomical id':1120,'parent id':1100,'color':'#FF00EE','abv':'At'}, 'bulbus arteriosus':{'display name':'bulbus arteriosus','parent structure':'heart','anatomical id':1110,'parent id':1100,'color':'#FF00AB','abv':'Ba'}, 'ventricle':{'display name':'ventricle','parent structure':'heart','anatomical id':1130,'parent id':1100,'color':'#FF00AA','abv':'Vt'}, 'central cardinal vein(common cardinal vein)':{'display name':'central cardinal vein(common cardinal vein)','parent structure':'blood vessel','anatomical id':1200,'parent id':1000,'color':'#FF00BB','abv':'Cen'}, 'Digestive':{'display name':'Digestive','parent structure':'Body','anatomical id':2000,'parent id':0,'color':'#FFFFFF','abv':''}, 'esophagus':{'display name':'esophagus','parent structure':'digestive','anatomical id':2100,'parent id':2000,'color':'#74FF7F','abv':'Eso'}, 'intestine':{'display name':'intestine','parent structure':'digestive','anatomical id':2200,'parent id':2000,'color':'#C8FFB4','abv':'Int'}, 'yolk':{'display name':'yolk','parent structure':'digestive','anatomical id':2300,'parent id':2000,'color':'#8EFF99','abv':'Yo'}, 'liver':{'display name':'liver','parent structure':'digestive','anatomical id':2400,'parent id':2000,'color':'#8EFF8A','abv':'Liv'}, 'pancreas':{'display name':'pancreas','parent structure':'digestive','anatomical id':2500,'parent id':2000,'color':'#8EFF00','abv':'Pac'}, 'Excretory':{'display name':'Excretory','parent structure':'Body','anatomical id':3000,'parent id':0,'color':'#FFFFFF','abv':''}, 'pronephros':{'display name':'pronephros','parent structure':'excretory','anatomical id':3100,'parent id':3000,'color':'#94E7FF','abv':'Pnp'}, 'kidney':{'display name':'kidney','parent structure':'excretory','anatomical id':3200,'parent id':3000,'color':'#91E7FF','abv':'Kid'}, 'pronephric duct':{'display name':'pronephric duct','parent structure':'pronephros','anatomical id':3110,'parent id':3100,'color':'#94E7DD','abv':'Pnpd'}, 'Locomotive, Osmoregulation':{'display name':'Locomotive, Osmoregulation','parent structure':'Body','anatomical id':4000,'parent id':0,'color':'#FFFFFF','abv':''}, 'caudal fin':{'display name':'caudal fin','parent structure':'fin','anatomical id':4200,'parent id':4000,'color':'#E95B20','abv':'Cf'}, 'pectoral fin':{'display name':'pectoral fin','parent structure':'fin','anatomical id':4100,'parent id':4000,'color':'#E95B00','abv':'Pf'}, 'Muscular':{'display name':'Muscular','parent structure':'Body','anatomical id':5000,'parent id':0,'color':'#FFFFFF','abv':''}, 'cephalic musculature':{'display name':'cephalic musculature','parent structure':'muscular','anatomical id':5100,'parent id':5000,'color':'#1F00D4','abv':'Cm'}, 'pharyngeal musculature':{'display name':'pharyngeal musculature','parent structure':'muscular','anatomical id':5200,'parent id':5000,'color':'#FFFFFF','abv':'pm'}, 'sternohyoid':{'display name':'sternohyoid','parent structure':'muscular','anatomical id':5210,'parent id':5000,'color':'#1F00D9','abv':'Ster'}, 'trunk musculature':{'display name':'trunk musculature','parent structure':'muscular','anatomical id':5300,'parent id':5000,'color':'#1F00D6','abv':'Tm'}, 'somitic muscle':{'display name':'somitic muscle','parent structure':'muscular','anatomical id':5400,'parent id':5000,'color':'#1F00D7','abv':'Sm'}, 'Nervous, Sensory and Vision':{'display name':'Nervous, Sensory and Vision','parent structure':'Body','anatomical id':6000,'parent id':0,'color':'#FFFFFF','abv':''}, 'eye':{'display name':'eye','parent structure':'vision','anatomical id':6100,'parent id':6000,'color':'#FF0000','abv':'Eye'}, 'retinal ganglion cell layer':{'display name':'retinal ganglion cell layer','parent structure':'eye','anatomical id':6120,'parent id':6100,'color':'#9F0088','abv':'Rgl'}, 'lens':{'display name':'lens','parent structure':'eye','anatomical id':6110,'parent id':6100,'color':'#9F0000','abv':'Len'}, 'cornea':{'display name':'cornea','parent structure':'eye','anatomical id':6111,'parent id':6100,'color':'#FF0080','abv':'Cor'}, 'retinal nuclear layers':{'display name':'retinal nuclear layers','parent structure':'eye','anatomical id':6140,'parent id':6100,'color':'#9F0048','abv':'Rnl'}, 'retinal inner nuclear layer':{'display name':'retinal inner nuclear layer','parent structure':'eye','anatomical id':6141,'parent id':6140,'color':'#950040','abv':'Rnlo'}, 'retinal outer nuclear layer':{'display name':'retinal outer nuclear layer','parent structure':'eye','anatomical id':6142,'parent id':6140,'color':'#950050','abv':'Rnli'}, 'retinal photoreceptor layer':{'display name':'retinal photoreceptor layer','parent structure':'eye','anatomical id':6160,'parent id':6100,'color':'#950028','abv':'Rph'}, 'retinal pigmented epithelium':{'display name':'retinal pigmented epithelium','parent structure':'eye','anatomical id':6170,'parent id':6100,'color':'#9F0008','abv':'Rpe'}, 'retinal inner plexiform layer':{'display name':'retinal inner plexiform layer','parent structure':'eye','anatomical id':6130,'parent id':6100,'color':'#9F0068','abv':'Rip'}, 'retinal outer plexiform layer':{'display name':'retinal outer plexiform layer','parent structure':'eye','anatomical id':6150,'parent id':6100,'color':'#9F0072','abv':'Rop'}, 'optic choroid':{'display name':'optic choroid','parent structure':'eye','anatomical id':6180,'parent id':6100,'color':'#940060','abv':'Oc'}, 'optic nerve head':{'display name':'optic nerve head','parent structure':'nervous','anatomical id':6190,'parent id':6100,'color':'#F40022','abv':'Onh'}, 'optic chiasm':{'display name':'optic chiasm','parent structure':'nervous','anatomical id':6191,'parent id':6100,'color':'#F4002A','abv':'Och'}, 'spinal cord':{'display name':'spinal cord','parent structure':'nervous','anatomical id':6600,'parent id':6000,'color':'#B4002A','abv':'Sc'}, 'notochord':{'display name':'notochord','parent structure':'nervous','anatomical id':6400,'parent id':6000,'color':'#B4000A','abv':'Not'}, 'brain':{'display name':'brain','parent structure':'nervous','anatomical id':6200,'parent id':6000,'color':'#FF0A11','abv':'Br'}, 'naris':{'display name':'naris','parent structure':'olfactory','anatomical id':6500,'parent id':6000,'color':'#FF1050','abv':'Nar'}, 'olfactory pit':{'display name':'olfactory pit','parent structure':'olfactory','anatomical id':6510,'parent id':6500,'color':'#FF1000','abv':'Op'}, 'olfactory epithelium':{'display name':'olfactory epithelium','parent structure':'olfactory','anatomical id':6520,'parent id':6500,'color':'#FF1100','abv':'Ole'}, 'otolith':{'display name':'otolith','parent structure':'auditory','anatomical id':6311,'parent id':6300,'color':'#B4000F','abv':'Oth'}, 'inner ear':{'display name':'inner ear','parent structure':'auditory','anatomical id':6300,'parent id':6000,'color':'#B4000D','abv':'Ie'}, 'semicircular canal':{'display name':'semicircular canal','parent structure':'auditory','anatomical id':6310,'parent id':6300,'color':'#FFFFFF','abv':'ssc'}, 'lateral semicircular canal':{'display name':'lateral semicircular canal','parent structure':'auditory','anatomical id':6312,'parent id':6310,'color':'#FFFFFF','abv':'lsc'}, 'posterior semicircular canal':{'display name':'posterior semicircular canal','parent structure':'auditory','anatomical id':6313,'parent id':6310,'color':'#FFFFFF','abv':'psc'}, 'anterior semicircular canal':{'display name':'anterior semicircular canal','parent structure':'auditory','anatomical id':6314,'parent id':6310,'color':'#FFFFFF','abv':'asc'}, 'otic sensory epithelium':{'display name':'otic sensory epithelium','parent structure':'auditory','anatomical id':6315,'parent id':6310,'color':'#FF0007','abv':'Ose'}, 'Reproductive/Endocrine':{'display name':'Reproductive/Endocrine','parent structure':'Body','anatomical id':8000,'parent id':0,'color':'#FFFFFF','abv':'Reproductive/Endocrine'}, 'epiphysis':{'display name':'epiphysis','parent structure':'endocrine','anatomical id':8400,'parent id':8000,'color':'#FFFFFF','abv':'ep'}, 'hypophysis/pituitary':{'display name':'hypophysis/pituitary','parent structure':'endocrine','anatomical id':8300,'parent id':8000,'color':'#FF7E35','abv':'Pit'}, 'ovary':{'display name':'ovary','parent structure':'reproductive','anatomical id':8100,'parent id':8000,'color':'#FF7E00','abv':'Ov'}, 'testis':{'display name':'testis','parent structure':'reproductive','anatomical id':8200,'parent id':8000,'color':'#FFFFFF','abv':'Te'}, 'Skeletal':{'display name':'Skeletal','parent structure':'Body','anatomical id':8000,'parent id':0,'color':'#FFFFFF','abv':''}, 'cranium':{'display name':'cranium','parent structure':'skeletal','anatomical id':8100,'parent id':8000,'color':'#FFFFFF','abv':'cr'}, 'chondrocranium':{'display name':'chondrocranium','parent structure':'cranium','anatomical id':8110,'parent id':8100,'color':'#00AA29','abv':'Cho'}, 'pharyngeal arch cartilage':{'display name':'pharyngeal arch cartilage','parent structure':'cranium','anatomical id':8141,'parent id':8140,'color':'#00AA00','abv':'Phac'}, 'neurocranium':{'display name':'neurocranium','parent structure':'cranium','anatomical id':8130,'parent id':8100,'color':'#00AA99','abv':'Nec'}, 'splanchnocranium':{'display name':'splanchnocranium','parent structure':'cranium','anatomical id':8140,'parent id':8100,'color':'#00AA80','abv':'Spc'}, 'dermatocranium':{'display name':'dermatocranium','parent structure':'cranium','anatomical id':8120,'parent id':8100,'color':'#00AA39','abv':'Dec'}, 'pharyngeal ':{'display name':'pharyngeal ','parent structure':'cranium','anatomical id':8141,'parent id':8140,'color':'#00AA49','abv':'Ps'}, 'paired fin skeleton':{'display name':'paired fin skeleton','parent structure':'skeletal','anatomical id':8200,'parent id':8000,'color':'#FFFFFF','abv':'pfs'}, 'postcranial axial skeleton':{'display name':'postcranial axial skeleton','parent structure':'Body','anatomical id':8300,'parent id':8000,'color':'#FFFFFF','abv':'Pas'}, 'vertebra':{'display name':'vertebra','parent structure':'axial skeleton','anatomical id':8310,'parent id':8300,'color':'#B4006D','abv':'vert'}, 'vertebral body':{'display name':'vertebral body','parent structure':'vertebra','anatomical id':8311,'parent id':8310,'color':'#B4006A','abv':'verb'}, 'Respiratory':{'display name':'Respiratory','parent structure':'Body','anatomical id':10000,'parent id':0,'color':'#FFFFFF','abv':''}, 'gill':{'display name':'gill','parent structure':'respiratory','anatomical id':11000,'parent id':10000,'color':'#F3FFA4','abv':'Gil'}, 'swim bladder':{'display name':'swim bladder','parent structure':'buoyancy','anatomical id':12000,'parent id':10000,'color':'#F9FFAA','abv':'Sb'}}
//Parse_h1
ontology_dict_h1={'Body':{'display name':'Annotation','parent structure':'0','anatomical id':0,'parent id':999999999,'color':'#FFFFFF','abv':''}, 'Circulatory':{'display name':'Circulatory','parent structure':'Body','anatomical id':1000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Heart':{'display name':'Heart','parent structure':'Circulatory','anatomical id':1100,'parent id':1000,'color':'#ff00e5','abv':'Ht'}, 'Blood Cell':{'display name':'Hemocyte','parent structure':'Circulatory','anatomical id':1200,'parent id':1000,'color':'#ff00e5','abv':'H'}, 'Digestive':{'display name':'Digestive','parent structure':'Body','anatomical id':2000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Esophagus':{'display name':'Esophagus','parent structure':'Digestive','anatomical id':2100,'parent id':2000,'color':'#00CC00','abv':'Eso'}, 'Food Channel':{'display name':'Food Groove','parent structure':'Digestive','anatomical id':2200,'parent id':2000,'color':'#ccff99','abv':'FG'}, 'Cecum':{'display name':'Hepatic Cecum','parent structure':'Digestive','anatomical id':2300,'parent id':2000,'color':'#5FFF5F','abv':'Ce'}, 'Epithelial Cecum':{'display name':'Epithelial Cell','parent structure':'Hepatic Cecum','anatomical id':2310,'parent id':2300,'color':'#005F18','abv':'EC'}, 'Microvilli Cecum':{'display name':'Microvilli','parent structure':'Hepatic Cecum','anatomical id':2320,'parent id':2310,'color':'#FFFF66','abv':'Mv'}, 'Hindgut':{'display name':'Hindgut ','parent structure':'Digestive','anatomical id':2400,'parent id':2000,'color':'#A0FF6A','abv':'HG'}, 'Epithelial Hindgut':{'display name':'Epithelial Cell','parent structure':'Hindgut','anatomical id':2410,'parent id':2400,'color':'#005F18','abv':'EC'}, 'Labrum':{'display name':'Labrum','parent structure':'Digestive','anatomical id':2500,'parent id':2000,'color':'#6AFF7B','abv':'L'}, 'Labral Gland Cell':{'display name':'Labral Gland Cell ','parent structure':'Labrum','anatomical id':2510,'parent id':2500,'color':'#004A1B','abv':'LGC'}, 'Vacuolation LGC':{'display name':'Vacuole','parent structure':'Labral Gland Cell ','anatomical id':2511,'parent id':2510,'color':'#6699ff','abv':'Vacuole'}, 'Mandible':{'display name':'Mandible','parent structure':'Digestive','anatomical id':2600,'parent id':2000,'color':'#00FF9B','abv':'Md'}, 'Maxillae':{'display name':'Maxillule','parent structure':'Digestive','anatomical id':2700,'parent id':2000,'color':'#1ab574','abv':'Mxl'}, 'Midgut':{'display name':'Midgut','parent structure':'Digestive','anatomical id':2800,'parent id':2000,'color':'#60FF2A','abv':'MG'}, 'Epithelial Midgut':{'display name':'Epithelial Cell','parent structure':'Midgut','anatomical id':2810,'parent id':2800,'color':'#005F18','abv':'EC'}, 'Vacuolation Midgut':{'display name':'Vacuole','parent structure':'Epithelial Cell','anatomical id':2811,'parent id':2810,'color':'#6699ff','abv':'Vacuole'}, 'Sloughing Midgut':{'display name':'Sloughing','parent structure':'Epithelial Cell','anatomical id':2812,'parent id':2810,'color':'#005F18','abv':'Slough'}, 'Excretory':{'display name':'Excretory','parent structure':'Body','anatomical id':3000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Maxillary Gland':{'display name':'Maxillary Gland','parent structure':'Excretory','anatomical id':3100,'parent id':3000,'color':'#0088FF','abv':'MxG'}, 'End Sac':{'display name':'End Sac','parent structure':'Maxillary Gland','anatomical id':3110,'parent id':3100,'color':'#0088FF','abv':'ES'}, 'Tubule':{'display name':'Tubule','parent structure':'Maxillary Gland','anatomical id':3120,'parent id':3100,'color':'#74DAFF','abv':'Tu'}, 'Locomotive and Osmotic  Regulatory':{'display name':'Locomotive and Osmoregulation','parent structure':'Body','anatomical id':4000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Swimming Antenna':{'display name':'Antenna','parent structure':'Locomotive and Osmoregulation','anatomical id':4100,'parent id':4000,'color':'#C98800','abv':'A2'}, 'Protopodite':{'display name':'Protopodite','parent structure':'Antenna','anatomical id':4110,'parent id':4100,'color':'#996600','abv':'Pr'}, 'Ramus':{'display name':'Ramus','parent structure':'Antenna','anatomical id':4120,'parent id':4100,'color':'#CC9900','abv':'Ra'}, 'Seta':{'display name':'Seta','parent structure':'Ramus','anatomical id':4130,'parent id':4120,'color':'#e2ad58','abv':'Se'}, 'Trunk Limb 1':{'display name':'Thoracic  Limb 1','parent structure':'Locomotive and Osmoregulation','anatomical id':4200,'parent id':4000,'color':'#C98800','abv':'T1'}, 'Copulatory Hook':{'display name':'Copulatory Hook (Male)','parent structure':'Thoracic  Limb 1','anatomical id':4210,'parent id':4200,'color':'#8A4D00','abv':'CH'}, 'Setae of Trunk Limb 1':{'display name':'Seta','parent structure':'Thoracic  Limb 1','anatomical id':4220,'parent id':4200,'color':'#e2ad58','abv':'Se1'}, 'Trunk Limb 2':{'display name':'Thoracic Limb 2','parent structure':'Locomotive and Osmoregulation','anatomical id':4300,'parent id':4000,'color':'#C98800','abv':'T2'}, 'Trunk Limb 3':{'display name':'Thoracic  Limb 3','parent structure':'Locomotive and Osmoregulation','anatomical id':4400,'parent id':4000,'color':'#C98800','abv':'T3'}, 'Filter Plate 3':{'display name':'Filter Plate 3','parent structure':'Thoracic  Limb 3','anatomical id':4410,'parent id':4400,'color':'#8A4D00','abv':'FP3'}, 'Trunk Limb 4':{'display name':'Thoracic  Limb 4','parent structure':'Locomotive and Osmoregulation','anatomical id':4500,'parent id':4000,'color':'#C98800','abv':'T4'}, 'Filter Plate 4':{'display name':'Filter Plate 4','parent structure':'Thoracic  Limb 4','anatomical id':4510,'parent id':4500,'color':'#8A4D00','abv':'FP4'}, 'Trunk Limb 5':{'display name':'Thoracic  Limb 5','parent structure':'Locomotive and Osmoregulation','anatomical id':4600,'parent id':4000,'color':'#C98800','abv':'T5'}, 'Muscular':{'display name':'Muscular','parent structure':'Body','anatomical id':5000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Antennal Muscle':{'display name':'Antennal Muscle','parent structure':'Muscular','anatomical id':5010,'parent id':5000,'color':'#000099','abv':'A2M'}, 'Antennule Muscle':{'display name':'Antennule Muscle (Male)','parent structure':'Muscular','anatomical id':5020,'parent id':5000,'color':'#0D24CC','abv':'A1M'}, 'Anterior Carapace Adductor Muscle':{'display name':'Anterior Carapace Adductor Muscle','parent structure':'Muscular','anatomical id':5030,'parent id':5000,'color':'#000099','abv':'ACAM'}, 'Anterior Rotator':{'display name':'Anterior Rotator Muscle of Mandible','parent structure':'Muscular','anatomical id':5040,'parent id':5000,'color':'#00197f','abv':'ARM'}, 'Circular Muscle':{'display name':'Circular Muscle ','parent structure':'Muscular','anatomical id':5050,'parent id':5000,'color':'#0D24CC','abv':'CM'}, 'Dorsal Longitudinal Muscle':{'display name':'Dorsal Longitudinal Muscle','parent structure':'Muscular','anatomical id':5060,'parent id':5000,'color':'#0000CC','abv':'DLM'}, 'Esophageal Dilator Muscle':{'display name':'Esophageal Dilator Muscle','parent structure':'Muscular','anatomical id':5070,'parent id':5000,'color':'#0D24CC','abv':'EDM'}, 'Horizontal Muscle':{'display name':'Horizontal Muscle','parent structure':'Muscular','anatomical id':5080,'parent id':5000,'color':'#0D24CC','abv':'HM'}, 'Levator Muscle of Labrum':{'display name':'Levator Muscle of Labrum','parent structure':'Muscular','anatomical id':5081,'parent id':5000,'color':'#000099','abv':'LM'}, 'Oblique-Lateral Muscle':{'display name':'Oblique-Lateral Muscle','parent structure':'Muscular','anatomical id':5090,'parent id':5000,'color':'#000099','abv':'OLM'}, 'Postabdominal Muscle':{'display name':'Postabdominal Muscle','parent structure':'Muscular','anatomical id':5100,'parent id':5000,'color':'#000099','abv':'PM'}, 'Posterior Carapace Adductor Muscle':{'display name':'Posterior Carapace Adductor Muscle','parent structure':'Muscular','anatomical id':5110,'parent id':5000,'color':'#0000CC','abv':'PCAM'}, 'Posterior Rotator':{'display name':'Posterior Rotator Muscle of Mandible','parent structure':'Muscular','anatomical id':5120,'parent id':5000,'color':'#033390','abv':'PRM'}, 'Rectal Dilator Muscle':{'display name':'Rectal Dilator Muscle','parent structure':'Muscular','anatomical id':5130,'parent id':5000,'color':'#0D24CC','abv':'RDM'}, 'Transverse Mandibular Muscle':{'display name':'Transverse Mandibular Muscle','parent structure':'Muscular','anatomical id':5140,'parent id':5000,'color':'#000099','abv':'TMM1'}, 'Transverse Mandibular Tendon':{'display name':'Transverse Mandibular Tendon','parent structure':'Muscular','anatomical id':5150,'parent id':5000,'color':'#0b3087','abv':'TMT'}, 'Transverse Muscle of Mandible':{'display name':'Transverse Muscle of Mandible','parent structure':'Muscular','anatomical id':5160,'parent id':5000,'color':'#0000CC','abv':'TMM2'}, 'Ventral Longitudinal Muscle':{'display name':'Ventral Longitudinal Muscle','parent structure':'Muscular','anatomical id':5170,'parent id':5000,'color':'#0000CC','abv':'VLM'}, 'Nervous, Sensory and Vision':{'display name':'Nervous, Sensory and Vision','parent structure':'Body','anatomical id':6000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Sensory Antenna':{'display name':'Antennule','parent structure':'Nervous, Sensory and Vision','anatomical id':6100,'parent id':6000,'color':'#FF0000','abv':'A1'}, 'Cerebral Ganglion':{'display name':'Cerebral Ganglion','parent structure':'Nervous, Sensory and Vision','anatomical id':6200,'parent id':6000,'color':'#960000','abv':'CG'}, 'Compound Eye':{'display name':'Compound Eye','parent structure':'Nervous, Sensory and Vision','anatomical id':6300,'parent id':6000,'color':'#FF0000','abv':'Ce'}, 'Ommatidium_':{'display name':'Ommatidium','parent structure':'Compound Eye','anatomical id':6310,'parent id':6300,'color':'#FFFFFF','abv':'Om'}, 'Ommatidium':{'display name':'Crystalline Cone','parent structure':'Ommatidium','anatomical id':6301,'parent id':6300,'color':'#FF0000','abv':'CC'}, 'Melanin Pigment':{'display name':'Retinula Cell','parent structure':'Ommatidium','anatomical id':6302,'parent id':6300,'color':'#FF9933','abv':'RC'}, 'Nerve Cord':{'display name':'Nerve Cord','parent structure':'Nervous, Sensory and Vision','anatomical id':6400,'parent id':6000,'color':'#FF155D','abv':'NC'}, 'Ocellus':{'display name':'Ocellus','parent structure':'Nervous, Sensory and Vision','anatomical id':6500,'parent id':6000,'color':'#FF353A','abv':'O'}, 'Optic Lobe':{'display name':'Optic Lobe of Cerebral Ganglion','parent structure':'Nervous, Sensory and Vision','anatomical id':6600,'parent id':6000,'color':'#D4000B','abv':'OL'}, 'Optic Nerve':{'display name':'Optic Nerve','parent structure':'Nervous, Sensory and Vision','anatomical id':6700,'parent id':6000,'color':'#FF353A','abv':'ON'}, 'Postabdomen':{'display name':'Postabdomen','parent structure':'Body','anatomical id':7000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Postabdominal Process':{'display name':'Abdominal Process','parent structure':'Postabdomen','anatomical id':7100,'parent id':7000,'color':'#FBB4FF','abv':'AP'}, 'Anus':{'display name':'Anus','parent structure':'Postabdomen','anatomical id':7200,'parent id':7000,'color':'#FBB4FF','abv':'An'}, 'Postabdominal Claw':{'display name':'Postabdominal Claw','parent structure':'Postabdomen','anatomical id':7300,'parent id':7000,'color':'#FBB4FF','abv':'PAC'}, 'Reproductive':{'display name':'Reproductive','parent structure':'Body','anatomical id':8000,'parent id':0,'color':'#FFFFFF','abv':''}, 'Embryo':{'display name':'Embryo','parent structure':'Reproductive','anatomical id':8100,'parent id':8000,'color':'#FFCC66','abv':'Emb'}, 'Dead':{'display name':'Dead','parent structure':'Embryo','anatomical id':8110,'parent id':8100,'color':'#FFCC66','abv':'Dead'}, 'Deformed':{'display name':'Deformed','parent structure':'Embryo','anatomical id':8120,'parent id':8100,'color':'#FFCC66','abv':'Deformed'}, 'Fat Cell':{'display name':'Fat Cell (Vacuolated)','parent structure':'Reproductive','anatomical id':8200,'parent id':8000,'color':'#FF5C00','abv':'FC'}, 'Ovary':{'display name':'Ovary','parent structure':'Reproductive','anatomical id':8300,'parent id':8000,'color':'#ffe21f','abv':'Ov'}, 'Oviduct':{'display name':'Oviduct','parent structure':'Ovary','anatomical id':8310,'parent id':8300,'color':'#ffa51f','abv':'Ovt'}, 'Testis':{'display name':'Testis','parent structure':'Reproductive','anatomical id':8400,'parent id':8000,'color':'#ffe21f','abv':'Te'}, 'Testis Duct':{'display name':'Sperm Duct','parent structure':'Testis','anatomical id':8410,'parent id':8400,'color':'#ffa51f','abv':'SD'}, 'Gonopore':{'display name':'Gonopore (Male)','parent structure':'Testis','anatomical id':8420,'parent id':8400,'color':'#ffa51f','abv':'Gn'}}




if (treatment_loadin=='sagittal_female_common_pain_reliever'){

    ontology_dict=ontology_dict_h1
}



//you know, ahe eats daphnia right?
ontology_MeeSiing={}
id_dict={}

for (var parent_key in ontology_dict) { //Five of these
    if (ontology_dict.hasOwnProperty(parent_key)) {
        console.log(parent_key)
        //SWAP COLOR SCHEMES HERE
        ontology_dict[parent_key]['color']=hexToRgb(ontology_dict[parent_key]['color'])
        ontology_MeeSiing[ontology_dict[parent_key]['anatomical id']]=[[ontology_dict[parent_key]['anatomical id']]]
        for (var wee_key in ontology_dict) {
            if (ontology_dict[wee_key]['parent id']==ontology_dict[parent_key]['anatomical id']){
                ontology_MeeSiing[ontology_dict[parent_key]['anatomical id']].push(ontology_dict[wee_key]['anatomical id'])
            }


        }

    }
}


for (var key in ontology_dict) {
    if (ontology_dict.hasOwnProperty(key)) {
        add_one_to_the_list=ontology_dict[key]
        add_one_to_the_list['segmentation name']=key
        id_dict[ontology_dict[key]['anatomical id']]=add_one_to_the_list
    }

}



//menu parser for wbaief024g084gb
// for label in ontology_dict.keys()



if (load_vars["c"]  === undefined){
    load_vars["c"]=false
    console.log("no zoom coordinates given, defaulting to normal")

}
else{
    zoom_box_loadin=load_vars["c"].split(",");
    console.log(zoom_box_loadin)
    zoom_box_loadin = new OpenSeadragon.Rect(parseFloat(zoom_box_loadin[0]),parseFloat(zoom_box_loadin[1]),parseFloat(zoom_box_loadin[2]),parseFloat(zoom_box_loadin[3]))
}



//change totle based on loadibn trt
trt_strings=treatment_loadin.split("_")
trt_strings.unshift("DAHRA")
document.title = trt_strings.join(" ")

treatment_samples_dict=eval(treatment_loadin+"_samples")
// treatment_samples_dict=eval(treatment_loadin)

z_dim=5

if(sample_loadin){
    z_dim=treatment_samples_dict[sample_loadin][1]
}

console.log(z_dim)
// available_samples = makeList("",".dzi",1,z_dim,available_samples)

// document.getElementById("label_button2").innerHTML='Annotations'

function makeList(prefix,suffix,start,end,the_array){
    for(var idx=start; idx<=treatment_samples_dict.length; idx++) {

        // sample_num=idx.toString().padStart(3, "0");
        var url = prefix+suffix
        the_array.push(url)
    }
    return the_array
}

for (const [key, value] of Object.entries(treatment_samples_dict)) {
    // available_samples.push("../../EC2_payloads/from_EC2/daphnia_atlas_payload_2192021/"+key+'.dzi')
    available_samples.push(key)
    console.log(key, value);
}


console.log(available_samples)

available_carusel_samples=[]
available_carusel = makeList("../../../assets/EC2/output/anatomical_reference_histology_zf/"+treatment_loadin+"/",".dzi",1,z_dim,available_carusel_samples)
available_carusel=[]
for (const [key, value] of Object.entries(treatment_samples_dict)) {
    available_carusel.push("../../../assets/EC2/output/anatomical_reference_histology_zf/"+treatment_loadin+"/"+key+'.dzi')
    console.log(key, value);
}

margin_=.5
img_width=0
carousel_jump_amount=parseInt(available_samples.length/10) //default is 10%

function makeList_collection(prefix,suffix,start,end,the_array){
    for(var idx=start; idx<=end; idx++) {

        sample_num=idx.toString().padStart(3, "0");
        // var url = prefix+sample_num+suffix
        var url = prefix+suffix
        the_array.push(url)
    }
    return the_array
}
console.log(available_carusel)
console.log(z_loadin)
var sample_idx=Math.ceil(z_dim/2)
if(z_loadin){
    sample_idx=parseInt(z_loadin)-1
}
console.log(z_loadin)
// var sample_dzi = "StitchedImage_Z049_L001"
var sample_dzi = available_samples[sample_idx]




//initialize dictionary
// carusel_rendered_already={}
// var viewer_index=0
// for (var i=-6; i<5;i++){
// if (i<0){i=0}
// if (i>0){i=available_carusel.length-1}
// console.log(i)
// carusel_rendered_already[sample_idx+i]=[available_carusel[sample_idx+i],viewer_index]
// viewer_index++
// }
carusel_rendered_already={}
carusel_rendered_already[sample_idx]=[available_samples[sample_idx],0]

console.log(carusel_rendered_already)


//this doesn't work
// // // // ontology_MeeSiing={}
// // // // list_build=[]
// // // // //Parse the ontology:
// // // // function onto_parse(input_term,id_dict){
// // // // list=[]
// // // // for (key_2 in id_dict){
// // // // //for next_id, next_name_parent in full_dict.items():
// // // // next_name_parent=parseInt(id_dict[key_2]['parent id'])
// // // // if (next_name_parent==parseInt(input_term)){
// // // // list.push(key_2)
// // // // }
// // // // }

// // // // return list
// // // // }



// // // // for (big_idx in id_dict){

// // // // list_runner=id_dict[big_idx]['anatomical id']
// // // // list_runner=[list_runner]
// // // // list_runner_big=[]
// // // // for (i in list_runner){
// // // // if (!(list_runner[parseInt(i)] in list_build)){
// // // // console.log(list_runner[parseInt(i)])
// // // // list_runner_append=onto_parse(list_runner[i],id_dict)
// // // // for (j in list_runner_append){
// // // // if (!(list_runner_append[j] in list_build)){
// // // // console.log(list_runner)
// // // // list_runner.push(parseInt(list_runner_append[j]))}}
// // // // console.log(list_runner)

// // // // list_runner_big.push([list_runner[i],list_runner_append])
// // // // ontology_MeeSiing[id_dict[big_idx]['anatomical id']]=list_runner_big
// // // // }


// // // // list_build.push(parseInt(list_runner[i]))
// // // // }

// // // // }

// ontology_MS_full={"0": [0, 1000, 2000, 4000, 5000, 6000, 7000, 8000, 11001, 1100, 1102, 1200, 1300, 1400, 1500, 1501, 1600, 1700, 2100, 2200, 2300, 2400, 2600, 2700, 4100, 4200, 4300, 4400, 5010, 5020, 5030, 5040, 5050, 5060, 5070, 5080, 5090, 5100, 5110, 5120, 5130, 5140, 6100, 7100, 7200, 7300, 7400, 7500, 7600, 8100, 11002, 11003, 1103, 1104, 1201, 1301, 2101, 2102, 2500, 4101, 7101, 7102, 7201, 7202, 7301, 7401, 7402, 7501, 7502, 7601, 8001, 7902, 1202, 1302, 7103], "1000": [1000, 1100, 1102, 1200, 1300, 1400, 1500, 1501, 1600, 1700, 1103, 1104, 1201, 1301, 1202, 1302], "1100": [1100], "1102": [1102, 1103, 1104, 1202, 1302], "1103": [1103, 1202, 1302], "1104": [1104], "1200": [1200, 1201], "1201": [1201], "1202": [1202], "1300": [1300, 1301], "1301": [1301], "1302": [1302], "1400": [1400], "1500": [1500], "1501": [1501], "1600": [1600], "1700": [1700], "2000": [2000, 2100, 2200, 2300, 2400, 2600, 2700, 2101, 2102, 2500], "2100": [2100, 2101, 2102], "2101": [2101], "2102": [2102], "2200": [2200], "2300": [2300], "2400": [2400, 2500], "2500": [2500], "2600": [2600], "2700": [2700], "4000": [4000, 4100, 4200, 4300, 4400, 4101], "4100": [4100, 4101], "4101": [4101], "4200": [4200], "4300": [4300], "4400": [4400], "5000": [5000, 5010, 5020, 5030, 5040, 5050, 5060, 5070, 5080, 5090, 5100, 5110, 5120, 5130, 5140], "5010": [5010], "5020": [5020], "5030": [5030], "5040": [5040], "5050": [5050], "5060": [5060], "5070": [5070], "5080": [5080], "5090": [5090], "5100": [5100], "5110": [5110], "5120": [5120], "5130": [5130], "5140": [5140], "6000": [6000, 6100], "6100": [6100], "7000": [7000, 7100, 7200, 7300, 7400, 7500, 7600, 7101, 7102, 7201, 7202, 7301, 7401, 7402, 7501, 7502, 7601, 7103], "7100": [7100, 7101, 7102, 7103], "7101": [7101], "7102": [7102, 7103], "7103": [7103], "7200": [7200, 7201, 7202], "7201": [7201], "7202": [7202], "7300": [7300, 7301], "7301": [7301], "7400": [7400, 7401, 7402], "7401": [7401], "7402": [7402], "7500": [7500, 7501, 7502], "7501": [7501], "7502": [7502], "7600": [7600, 7601], "7601": [7601], "8000": [8000, 8100, 8001, 7902], "8100": [8100, 8001, 7902], "8001": [8001], "7902": [7902], "11001": [11001, 11002, 11003], "11002": [11002], "11003": [11003]}
//parse5
// ontology_MS_full=	{"0": [0, 1000, 2000, 4000, 5000, 6000, 7000, 8000, 11001, 1100, 1102, 1200, 1300, 1400, 1501, 1600, 1700, 2100, 2200, 2300, 2400, 2600, 2700, 4100, 4200, 4300, 4400, 5010, 5020, 5030, 5040, 5050, 5060, 5070, 5080, 5090, 5100, 5110, 5120, 5130, 5140, 5150, 5160, 6100, 7100, 7200, 7300, 7400, 7500, 7600, 8100, 11002, 11003, 1103, 1104, 1201, 1301, 1500, 2101, 2102, 2500, 4101, 4500, 7101, 7102, 7201, 7202, 7301, 7401, 7402, 7501, 7502, 7601, 8001, 7902, 1202, 1302, 7103], "1000": [1000, 1100, 1102, 1200, 1300, 1400, 1501, 1600, 1700, 1103, 1104, 1201, 1301, 1500, 1202, 1302], "1100": [1100], "1102": [1102, 1103, 1104], "1103": [1103], "1104": [1104], "1200": [1200, 1201, 1202], "1201": [1201, 1202], "1202": [1202], "1300": [1300, 1301, 1302], "1301": [1301, 1302], "1302": [1302], "1400": [1400, 1500], "1500": [1500], "1501": [1501], "1600": [1600], "1700": [1700], "2000": [2000, 2100, 2200, 2300, 2400, 2600, 2700, 2101, 2102, 2500], "2100": [2100, 2101, 2102], "2101": [2101], "2102": [2102], "2200": [2200], "2300": [2300], "2400": [2400, 2500], "2500": [2500], "2600": [2600], "2700": [2700], "4000": [4000, 4100, 4200, 4300, 4400, 4101, 4500], "4100": [4100, 4101], "4101": [4101], "4200": [4200], "4300": [4300, 4500], "4500": [4500], "4400": [4400], "5000": [5000, 5010, 5020, 5030, 5040, 5050, 5060, 5070, 5080, 5090, 5100, 5110, 5120, 5130, 5140, 5150, 5160], "5010": [5010], "5020": [5020], "5030": [5030], "5040": [5040], "5050": [5050], "5060": [5060], "5070": [5070], "5080": [5080], "5090": [5090], "5100": [5100], "5110": [5110], "5120": [5120], "5130": [5130], "5140": [5140], "5150": [5150], "5160": [5160], "6000": [6000, 6100], "6100": [6100], "7000": [7000, 7100, 7200, 7300, 7400, 7500, 7600, 7101, 7102, 7201, 7202, 7301, 7401, 7402, 7501, 7502, 7601, 7103], "7100": [7100, 7101, 7102, 7103], "7101": [7101], "7102": [7102, 7103], "7103": [7103], "7200": [7200, 7201, 7202], "7201": [7201], "7202": [7202], "7300": [7300, 7301], "7301": [7301], "7400": [7400, 7401, 7402], "7401": [7401], "7402": [7402], "7500": [7500, 7501, 7502], "7501": [7501], "7502": [7502], "7600": [7600, 7601], "7601": [7601], "8000": [8000, 8100, 8001, 7902], "8100": [8100, 8001, 7902], "8001": [8001], "7902": [7902], "11001": [11001, 11002, 11003], "11002": [11002], "11003": [11003]}
//parse6
// ontology_MS_full=   {"0": [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 1100, 1200, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 3100, 4100, 4200, 4300, 4400, 4600, 5010, 5020, 5030, 5040, 5050, 5060, 5070, 5080, 5081, 5090, 5100, 5110, 5120, 5130, 5140, 5150, 5160, 6100, 6200, 6300, 6400, 6500, 6600, 6700, 4500, 7100, 7200, 7300, 8100, 8200, 8300, 8400, 2310, 2410, 2510, 2810, 3110, 3120, 4110, 4120, 4210, 4220, 4310, 4410, 4420, 4610, 6210, 6220, 4510, 4520, 8310, 8410, 8420, 2320, 2420, 2820, 4130], "1000": [1000, 1100, 1200], "1100": [1100], "1200": [1200], "2000": [2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2310, 2410, 2510, 2810, 2320, 2420, 2820], "2100": [2100], "2200": [2200], "2300": [2300, 2310, 2320], "2310": [2310, 2320], "2320": [2320], "2400": [2400, 2410, 2420], "2410": [2410, 2420], "2420": [2420], "2500": [2500, 2510], "2510": [2510], "2600": [2600], "2700": [2700], "2800": [2800, 2810, 2820], "2810": [2810, 2820], "2820": [2820], "3000": [3000, 3100, 3110, 3120], "3100": [3100, 3110, 3120], "3110": [3110], "3120": [3120], "4000": [4000, 4100, 4200, 4300, 4400, 4600, 4110, 4120, 4210, 4220, 4310, 4410, 4420, 4610, 4130], "4100": [4100, 4110, 4120, 4130], "4110": [4110], "4120": [4120, 4130], "4130": [4130], "4200": [4200, 4210, 4220], "4210": [4210], "4220": [4220], "4300": [4300, 4310], "4310": [4310], "4400": [4400, 4410, 4420], "4410": [4410], "4420": [4420], "4500": [4500, 4510, 4520], "4510": [4510], "4520": [4520], "4600": [4600, 4610], "4610": [4610], "5000": [5000, 5010, 5020, 5030, 5040, 5050, 5060, 5070, 5080, 5081, 5090, 5100, 5110, 5120, 5130, 5140, 5150, 5160], "5010": [5010], "5020": [5020], "5030": [5030], "5040": [5040], "5050": [5050], "5060": [5060], "5070": [5070], "5080": [5080], "5081": [5081], "5090": [5090], "5100": [5100], "5110": [5110], "5120": [5120], "5130": [5130], "5140": [5140], "5150": [5150], "5160": [5160], "6000": [6000, 6100, 6200, 6300, 6400, 6500, 6600, 6700, 6210, 6220], "6100": [6100], "6200": [6200, 6210, 6220], "6210": [6210], "6220": [6220], "6300": [6300], "6400": [6400], "6500": [6500], "6600": [6600], "6700": [6700], "7000": [7000, 4500, 7100, 7200, 7300, 4510, 4520], "7100": [7100], "7200": [7200], "7300": [7300], "8000": [8000, 8100, 8200, 8300, 8400, 8310, 8410, 8420], "8100": [8100], "8200": [8200], "8300": [8300, 8310], "8310": [8310], "8400": [8400, 8410, 8420], "8410": [8410], "8420": [8420]}
//ontology_MeeSiing={"0": [[0, ["1000", "2000", "3000", "4000", "5000", "6000", "7000", "8000"]], [1000, ["1100", "1200"]], [2000, ["2100", "2200", "2300", "2400", "2500", "2600", "2700", "2800"]], [3000, ["3100"]], [4000, ["4100", "4200", "4300", "4400", "4500", "4600"]], [5000, ["5010", "5020", "5030", "5040", "5050", "5060", "5070", "5080", "5081", "5090", "5100", "5110", "5120", "5130", "5140", "5150", "5160", "5170"]], [6000, ["6100", "6200", "6300", "6400", "6500", "6600", "6700"]], [7000, ["7100", "7200", "7300"]], [8000, ["8100", "8200", "8300", "8400"]], [1100, []], [1200, []], [2100, []], [2200, []], [2300, ["2310"]], [2400, ["2410"]], [2500, ["2510"]], [2600, []], [2700, []], [2800, ["2810"]], [3100, ["3110", "3120"]], [4100, ["4110", "4120"]], [4200, ["4210"]], [4300, []], [4400, ["4410"]], [4500, ["4510"]], [4600, []], [5010, []], [5020, []], [5030, []], [5040, []], [5050, []], [5060, []], [5070, []], [5080, []], [5081, []], [5090, []], [5100, []], [5110, []], [5120, []], [5130, []], [5140, []], [5150, []], [5160, []], [5170, []], [6100, []], [6200, []], [6300, ["6310"]], [6400, []], [6500, []], [6600, []], [6700, []], [7100, []], [7200, []], [7300, []], [8100, []], [8200, []], [8300, ["8310"]], [8400, ["8410", "8420"]], [2310, ["2320"]], [2410, ["2420"]], [2510, []], [2810, ["2820"]], [3110, []], [3120, []], [4110, []], [4120, ["4130"]], [4210, []], [4410, []], [4510, []], [6310, ["6301", "6302"]], [8310, []], [8410, []], [8420, []], [2320, []], [2420, []], [2820, []], [4130, []], [6301, []], [6302, []]]}

//parse8
// ontology_MeeSiing={"0": [[0, ["1000", "2000", "3000", "4000", "5000", "6000", "7000", "8000"]], [1000, ["1100", "1200"]], [2000, ["2100", "2200", "2300", "2400", "2500", "2600", "2700", "2800"]], [3000, ["3100"]], [4000, ["4100", "4200", "4300", "4400", "4500", "4600"]], [5000, ["5010", "5020", "5030", "5040", "5050", "5060", "5070", "5080", "5081", "5090", "5100", "5110", "5120", "5130", "5140", "5150", "5160", "5170"]], [6000, ["6100", "6200", "6300", "6400", "6500", "6600", "6700"]], [7000, ["7100", "7200", "7300"]], [8000, ["8100", "8200", "8300", "8400"]], [1100, []], [1200, []], [2100, []], [2200, []], [2300, ["2310"]], [2400, ["2410"]], [2500, ["2510"]], [2600, []], [2700, []], [2800, ["2810"]], [3100, ["3110", "3120"]], [4100, ["4110", "4120"]], [4200, ["4210", "4220"]], [4300, []], [4400, ["4410"]], [4500, ["4510"]], [4600, []], [5010, []], [5020, []], [5030, []], [5040, []], [5050, []], [5060, []], [5070, []], [5080, []], [5081, []], [5090, []], [5100, []], [5110, []], [5120, []], [5130, []], [5140, []], [5150, []], [5160, []], [5170, []], [6100, []], [6200, []], [6300, ["6310", "6301", "6302"]], [6400, []], [6500, []], [6600, []], [6700, []], [7100, []], [7200, []], [7300, []], [8100, []], [8200, []], [8300, ["8310"]], [8400, ["8410", "8420"]], [2310, ["2320"]], [2410, ["2420"]], [2510, []], [2810, ["2820"]], [3110, []], [3120, []], [4110, []], [4120, ["4130"]], [4210, []], [4220, []], [4410, []], [4510, []], [6310, []], [6301, []], [6302, []], [8310, []], [8410, []], [8420, []], [2320, []], [2420, []], [2820, []], [4130, []]]}
//parseZF1
ontology_MeeSiing={"0": [[0, ["1000", "2000", "3000", "4000", "5000", "6000", "8000", "10000"]], [1000, ["1100", "1200"]], [2000, ["2100", "2200", "2300", "2400", "2500"]], [3000, ["3100", "3200"]], [4000, ["4200", "4100"]], [5000, ["5100", "5200", "5210", "5300", "5400"]], [6000, ["6100", "6600", "6400", "6200", "6500", "6300"]], [8000, ["8400", "8300", "8100", "8200"]], [10000, ["11000", "12000"]], [1100, ["1120", "1110", "1130"]], [1200, []], [2100, []], [2200, []], [2300, []], [2400, []], [2500, []], [3100, ["3110"]], [3200, []], [4200, []], [4100, []], [5100, []], [5200, []], [5210, []], [5300, []], [5400, []], [6100, ["6120", "6110", "6111", "6140", "6160", "6170", "6130", "6150", "6180", "6190", "6191"]], [6600, []], [6400, []], [6200, []], [6500, ["6510", "6520"]], [6300, ["6311", "6310"]], [8400, []], [8300, ["8310"]], [8100, ["8110", "8130", "8140", "8120"]], [8200, []], [11000, []], [12000, []], [1120, []], [1110, []], [1130, []], [3110, []], [6120, []], [6110, []], [6111, []], [6140, ["6141", "6142"]], [6160, []], [6170, []], [6130, []], [6150, []], [6180, []], [6190, []], [6191, []], [6510, []], [6520, []], [6311, []], [6310, ["6312", "6313", "6314", "6315"]], [8310, ["8311"]], [8110, []], [8130, []], [8140, ["8141"]], [8120, []], [6141, []], [6142, []], [6312, []], [6313, []], [6314, []], [6315, []], [8311, []], [8141, []]]}
//parseh1 (histopath 1)
ontology_MeeSiing_h1={"0": [[0, ["1000", "2000", "3000", "4000", "5000", "6000", "7000", "8000"]], [1000, ["1100", "1200"]], [2000, ["2100", "2200", "2300", "2400", "2500", "2600", "2700", "2800"]], [3000, ["3100"]], [4000, ["4100", "4200", "4300", "4400", "4500", "4600"]], [5000, ["5010", "5020", "5030", "5040", "5050", "5060", "5070", "5080", "5081", "5090", "5100", "5110", "5120", "5130", "5140", "5150", "5160", "5170"]], [6000, ["6100", "6200", "6300", "6400", "6500", "6600", "6700"]], [7000, ["7100", "7200", "7300"]], [8000, ["8100", "8200", "8300", "8400"]], [1100, []], [1200, []], [2100, []], [2200, []], [2300, ["2310"]], [2400, ["2410"]], [2500, ["2510"]], [2600, []], [2700, []], [2800, ["2810"]], [3100, ["3110", "3120"]], [4100, ["4110", "4120"]], [4200, ["4210", "4220"]], [4300, []], [4400, ["4410"]], [4500, ["4510"]], [4600, []], [5010, []], [5020, []], [5030, []], [5040, []], [5050, []], [5060, []], [5070, []], [5080, []], [5081, []], [5090, []], [5100, []], [5110, []], [5120, []], [5130, []], [5140, []], [5150, []], [5160, []], [5170, []], [6100, []], [6200, []], [6300, ["6310", "6301", "6302"]], [6400, []], [6500, []], [6600, []], [6700, []], [7100, []], [7200, []], [7300, []], [8100, ["8110", "8120"]], [8200, []], [8300, ["8310"]], [8400, ["8410", "8420"]], [2310, ["2320"]], [2410, []], [2510, ["2511"]], [2810, ["2811", "2812"]], [3110, []], [3120, []], [4110, []], [4120, ["4130"]], [4210, []], [4220, []], [4410, []], [4510, []], [6310, []], [6301, []], [6302, []], [8110, []], [8120, []], [8310, []], [8410, []], [8420, []], [2320, []], [2511, []], [2811, []], [2812, []], [4130, []]]}
// ontology_MeeSiing=	{"0": [[0, ["1000", "2000", "4000", "5000", "6000", "7000", "8000", "11001"]], [1000, ["1100", "1102", "1200", "1300", "1400", "1500", "1501", "1600", "1700"]], [2000, ["2100", "2200", "2300", "2400", "2600", "2700"]], [4000, ["4100", "4200", "4300", "4400"]], [5000, ["5010", "5020", "5030", "5040", "5050", "5060", "5070", "5080", "5090", "5100", "5110", "5120", "5130", "5140"]], [6000, ["6100"]], [7000, ["7100", "7200", "7300", "7400", "7500", "7600"]], [8000, ["8100"]], [11001, ["11002", "11003"]], [1100, []], [1102, ["1103", "1104"]], [1200, ["1201"]], [1300, ["1301"]], [1400, []], [1500, []], [1501, []], [1600, []], [1700, []], [2100, ["2101", "2102"]], [2200, []], [2300, []], [2400, ["2500"]], [2600, []], [2700, []], [4100, ["4101"]], [4200, []], [4300, []], [4400, []], [5010, []], [5020, []], [5030, []], [5040, []], [5050, []], [5060, []], [5070, []], [5080, []], [5090, []], [5100, []], [5110, []], [5120, []], [5130, []], [5140, []], [6100, []], [7100, ["7101", "7102"]], [7200, ["7201", "7202"]], [7300, ["7301"]], [7400, ["7401", "7402"]], [7500, ["7501", "7502"]], [7600, ["7601"]], [8100, ["8001", "7902"]], [11002, []], [11003, []], [1103, ["1202", "1302"]], [1104, []], [1201, []], [1301, []], [2101, []], [2102, []], [2500, []], [4101, []], [7101, []], [7102, ["7103"]], [7201, []], [7202, []], [7301, []], [7401, []], [7402, []], [7501, []], [7502, []], [7601, []], [8001, []], [7902, []], [1202, []], [1302, []], [7103, []]]}// // // // // this_url=window.location.href;
//parse5 dont forget to remove body from its own thinggie
// ontology_MeeSiing=		{"0": [[0, ["1000", "2000", "4000", "5000", "6000", "7000", "8000", "11001"]], [1000, ["1100", "1102", "1200", "1300", "1400", "1501", "1600", "1700"]], [2000, ["2100", "2200", "2300", "2400", "2600", "2700"]], [4000, ["4100", "4200", "4300", "4400"]], [5000, ["5010", "5020", "5030", "5040", "5050", "5060", "5070", "5080", "5090", "5100", "5110", "5120", "5130", "5140", "5150", "5160"]], [6000, ["6100"]], [7000, ["7100", "7200", "7300", "7400", "7500", "7600"]], [8000, ["8100"]], [11001, ["11002", "11003"]], [1100, []], [1102, ["1103", "1104"]], [1200, ["1201"]], [1300, ["1301"]], [1400, ["1500"]], [1501, []], [1600, []], [1700, []], [2100, ["2101", "2102"]], [2200, []], [2300, []], [2400, ["2500"]], [2600, []], [2700, []], [4100, ["4101"]], [4200, []], [4300, ["4500"]], [4400, []], [5010, []], [5020, []], [5030, []], [5040, []], [5050, []], [5060, []], [5070, []], [5080, []], [5090, []], [5100, []], [5110, []], [5120, []], [5130, []], [5140, []], [5150, []], [5160, []], [6100, []], [7100, ["7101", "7102"]], [7200, ["7201", "7202"]], [7300, ["7301"]], [7400, ["7401", "7402"]], [7500, ["7501", "7502"]], [7600, ["7601"]], [8100, ["8001", "7902"]], [11002, []], [11003, []], [1103, []], [1104, []], [1201, ["1202"]], [1301, ["1302"]], [1500, []], [2101, []], [2102, []], [2500, []], [4101, []], [4500, []], [7101, []], [7102, ["7103"]], [7201, []], [7202, []], [7301, []], [7401, []], [7402, []], [7501, []], [7502, []], [7601, []], [8001, []], [7902, []], [1202, []], [1302, []], [7103, []]]}

//parse6
// ontology_MeeSiing=		{"0": [[0, ["1000", "2000", "3000", "4000", "5000", "6000", "7000", "8000"]], [1000, ["1100", "1200"]], [2000, ["2100", "2200", "2300", "2400", "2500", "2600", "2700", "2800"]], [3000, ["3100"]], [4000, ["4100", "4200", "4300", "4400", "4600"]], [5000, ["5010", "5020", "5030", "5040", "5050", "5060", "5070", "5080", "5081", "5090", "5100", "5110", "5120", "5130", "5140", "5150", "5160"]], [6000, ["6100", "6200", "6300", "6400", "6500", "6600", "6700"]], [7000, ["4500", "7100", "7200", "7300"]], [8000, ["8100", "8200", "8300", "8400"]], [1100, []], [1200, []], [2100, []], [2200, []], [2300, ["2310"]], [2400, ["2410"]], [2500, ["2510"]], [2600, []], [2700, []], [2800, ["2810"]], [3100, ["3110", "3120"]], [4100, ["4110", "4120"]], [4200, ["4210", "4220"]], [4300, ["4310"]], [4400, ["4410", "4420"]], [4600, ["4610"]], [5010, []], [5020, []], [5030, []], [5040, []], [5050, []], [5060, []], [5070, []], [5080, []], [5081, []], [5090, []], [5100, []], [5110, []], [5120, []], [5130, []], [5140, []], [5150, []], [5160, []], [6100, []], [6200, ["6210", "6220"]], [6300, []], [6400, []], [6500, []], [6600, []], [6700, []], [4500, ["4510", "4520"]], [7100, []], [7200, []], [7300, []], [8100, []], [8200, []], [8300, ["8310"]], [8400, ["8410", "8420"]], [2310, ["2320"]], [2410, ["2420"]], [2510, []], [2810, ["2820"]], [3110, []], [3120, []], [4110, []], [4120, ["4130"]], [4210, []], [4220, []], [4310, []], [4410, []], [4420, []], [4610, []], [6210, []], [6220, []], [4510, []], [4520, []], [8310, []], [8410, []], [8420, []], [2320, []], [2420, []], [2820, []], [4130, []]]}
// ontology_MS_full={"0": [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 1100, 1200, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 3100, 4100, 4200, 4300, 4400, 4500, 4600, 5010, 5020, 5030, 5040, 5050, 5060, 5070, 5080, 5081, 5090, 5100, 5110, 5120, 5130, 5140, 5150, 5160, 5170, 6100, 6200, 6300, 6400, 6500, 6600, 6700, 7100, 7200, 7300, 8100, 8200, 8300, 8400, 2310, 2410, 2510, 2810, 3110, 3120, 4110, 4120, 4210, 4410, 4510, 6310, 8310, 8410, 8420, 2320, 2420, 2820, 4130, 6301, 6302], "1000": [1000, 1100, 1200], "1100": [1100], "1200": [1200], "2000": [2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2310, 2410, 2510, 2810, 2320, 2420, 2820], "2100": [2100], "2200": [2200], "2300": [2300, 2310, 2320], "2310": [2310, 2320], "2320": [2320], "2400": [2400, 2410, 2420], "2410": [2410, 2420], "2420": [2420], "2500": [2500, 2510], "2510": [2510], "2600": [2600], "2700": [2700], "2800": [2800, 2810, 2820], "2810": [2810, 2820], "2820": [2820], "3000": [3000, 3100, 3110, 3120], "3100": [3100, 3110, 3120], "3110": [3110], "3120": [3120], "4000": [4000, 4100, 4200, 4300, 4400, 4500, 4600, 4110, 4120, 4210, 4410, 4510, 4130], "4100": [4100, 4110, 4120, 4130], "4110": [4110], "4120": [4120, 4130], "4130": [4130], "4200": [4200, 4210], "4210": [4210], "4300": [4300], "4400": [4400, 4410], "4410": [4410], "4500": [4500, 4510], "4510": [4510], "4600": [4600], "5000": [5000, 5010, 5020, 5030, 5040, 5050, 5060, 5070, 5080, 5081, 5090, 5100, 5110, 5120, 5130, 5140, 5150, 5160, 5170], "5010": [5010], "5020": [5020], "5030": [5030], "5040": [5040], "5050": [5050], "5060": [5060], "5070": [5070], "5080": [5080], "5081": [5081], "5090": [5090], "5100": [5100], "5110": [5110], "5120": [5120], "5130": [5130], "5140": [5140], "5150": [5150], "5160": [5160], "5170": [5170], "6000": [6000, 6100, 6200, 6300, 6400, 6500, 6600, 6700, 6310, 6301, 6302], "6100": [6100], "6200": [6200], "6300": [6300, 6310, 6301, 6302], "6310": [6310, 6301, 6302], "6301": [6301], "6302": [6302], "6400": [6400], "6500": [6500], "6600": [6600], "6700": [6700], "7000": [7000, 7100, 7200, 7300], "7100": [7100], "7200": [7200], "7300": [7300], "8000": [8000, 8100, 8200, 8300, 8400, 8310, 8410, 8420], "8100": [8100], "8200": [8200], "8300": [8300, 8310], "8310": [8310], "8400": [8400, 8410, 8420], "8410": [8410], "8420": [8420]}// // // // // //assign sample

//parse8
// ontology_MS_full={"0": [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 1100, 1200, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 3100, 4100, 4200, 4300, 4400, 4500, 4600, 5010, 5020, 5030, 5040, 5050, 5060, 5070, 5080, 5081, 5090, 5100, 5110, 5120, 5130, 5140, 5150, 5160, 5170, 6100, 6200, 6300, 6400, 6500, 6600, 6700, 7100, 7200, 7300, 8100, 8200, 8300, 8400, 2310, 2410, 2510, 2810, 3110, 3120, 4110, 4120, 4210, 4220, 4410, 4510, 6310, 6301, 6302, 8310, 8410, 8420, 2320, 2420, 2820, 4130], "1000": [1000, 1100, 1200], "1100": [1100], "1200": [1200], "2000": [2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2310, 2410, 2510, 2810, 2320, 2420, 2820], "2100": [2100], "2200": [2200], "2300": [2300, 2310, 2320], "2310": [2310, 2320], "2320": [2320], "2400": [2400, 2410, 2420], "2410": [2410, 2420], "2420": [2420], "2500": [2500, 2510], "2510": [2510], "2600": [2600], "2700": [2700], "2800": [2800, 2810, 2820], "2810": [2810, 2820], "2820": [2820], "3000": [3000, 3100, 3110, 3120], "3100": [3100, 3110, 3120], "3110": [3110], "3120": [3120], "4000": [4000, 4100, 4200, 4300, 4400, 4500, 4600, 4110, 4120, 4210, 4220, 4410, 4510, 4130], "4100": [4100, 4110, 4120, 4130], "4110": [4110], "4120": [4120, 4130], "4130": [4130], "4200": [4200, 4210, 4220], "4210": [4210], "4220": [4220], "4300": [4300], "4400": [4400, 4410], "4410": [4410], "4500": [4500, 4510], "4510": [4510], "4600": [4600], "5000": [5000, 5010, 5020, 5030, 5040, 5050, 5060, 5070, 5080, 5081, 5090, 5100, 5110, 5120, 5130, 5140, 5150, 5160, 5170], "5010": [5010], "5020": [5020], "5030": [5030], "5040": [5040], "5050": [5050], "5060": [5060], "5070": [5070], "5080": [5080], "5081": [5081], "5090": [5090], "5100": [5100], "5110": [5110], "5120": [5120], "5130": [5130], "5140": [5140], "5150": [5150], "5160": [5160], "5170": [5170], "6000": [6000, 6100, 6200, 6300, 6400, 6500, 6600, 6700, 6310, 6301, 6302], "6100": [6100], "6200": [6200], "6300": [6300, 6310, 6301, 6302], "6310": [6310], "6301": [6301], "6302": [6302], "6400": [6400], "6500": [6500], "6600": [6600], "6700": [6700], "7000": [7000, 7100, 7200, 7300], "7100": [7100], "7200": [7200], "7300": [7300], "8000": [8000, 8100, 8200, 8300, 8400, 8310, 8410, 8420], "8100": [8100], "8200": [8200], "8300": [8300, 8310], "8310": [8310], "8400": [8400, 8410, 8420], "8410": [8410], "8420": [8420]}
//parseZF1
ontology_MS_full={"0": [0, 1000, 2000, 3000, 4000, 5000, 6000, 8000, 10000, 1100, 1200, 2100, 2200, 2300, 2400, 2500, 3100, 3200, 4200, 4100, 5100, 5200, 5210, 5300, 5400, 6100, 6600, 6400, 6200, 6500, 6300, 8400, 8300, 8100, 8200, 11000, 12000, 1120, 1110, 1130, 3110, 6120, 6110, 6111, 6140, 6160, 6170, 6130, 6150, 6180, 6190, 6191, 6510, 6520, 6311, 6310, 8310, 8110, 8130, 8140, 8120, 6141, 6142, 6312, 6313, 6314, 6315, 8311, 8141], "1000": [1000, 1100, 1200, 1120, 1110, 1130], "1100": [1100, 1120, 1110, 1130], "1120": [1120], "1110": [1110], "1130": [1130], "1200": [1200], "2000": [2000, 2100, 2200, 2300, 2400, 2500], "2100": [2100], "2200": [2200], "2300": [2300], "2400": [2400], "2500": [2500], "3000": [3000, 3100, 3200, 3110], "3100": [3100, 3110], "3200": [3200], "3110": [3110], "4000": [4000, 4200, 4100], "4200": [4200], "4100": [4100], "5000": [5000, 5100, 5200, 5210, 5300, 5400], "5100": [5100], "5200": [5200], "5210": [5210], "5300": [5300], "5400": [5400], "6000": [6000, 6100, 6600, 6400, 6200, 6500, 6300, 6120, 6110, 6111, 6140, 6160, 6170, 6130, 6150, 6180, 6190, 6191, 6510, 6520, 6311, 6310, 6141, 6142, 6312, 6313, 6314, 6315], "6100": [6100, 6120, 6110, 6111, 6140, 6160, 6170, 6130, 6150, 6180, 6190, 6191, 6141, 6142], "6120": [6120], "6110": [6110], "6111": [6111], "6140": [6140, 6141, 6142], "6141": [6141], "6142": [6142], "6160": [6160], "6170": [6170], "6130": [6130], "6150": [6150], "6180": [6180], "6190": [6190], "6191": [6191], "6600": [6600], "6400": [6400], "6200": [6200], "6500": [6500, 6510, 6520], "6510": [6510], "6520": [6520], "6311": [6311], "6300": [6300, 6311, 6310, 6312, 6313, 6314, 6315], "6310": [6310, 6312, 6313, 6314, 6315], "6312": [6312], "6313": [6313], "6314": [6314], "6315": [6315], "8000": [8000, 8400, 8300, 8100, 8200, 8310, 8110, 8130, 8140, 8120, 8311, 8141], "8400": [8400], "8300": [8300, 8310, 8311], "8100": [8100, 8110, 8130, 8140, 8120, 8141], "8200": [8200], "8110": [8110], "8141": [8141], "8130": [8130], "8140": [8140, 8141], "8120": [8120], "8310": [8310, 8311], "8311": [8311], "10000": [10000, 11000, 12000], "11000": [11000], "12000": [12000]}
//parseh1 (histopath 1)
ontology_MS_full_h1={"0": [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 1100, 1200, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 3100, 4100, 4200, 4300, 4400, 4500, 4600, 5010, 5020, 5030, 5040, 5050, 5060, 5070, 5080, 5081, 5090, 5100, 5110, 5120, 5130, 5140, 5150, 5160, 5170, 6100, 6200, 6300, 6400, 6500, 6600, 6700, 7100, 7200, 7300, 8100, 8200, 8300, 8400, 2310, 2410, 2510, 2810, 3110, 3120, 4110, 4120, 4210, 4220, 4410, 4510, 6310, 6301, 6302, 8110, 8120, 8310, 8410, 8420, 2320, 2511, 2811, 2812, 4130], "1000": [1000, 1100, 1200], "1100": [1100], "1200": [1200], "2000": [2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2310, 2410, 2510, 2810, 2320, 2511, 2811, 2812], "2100": [2100], "2200": [2200], "2300": [2300, 2310, 2320], "2310": [2310, 2320], "2320": [2320], "2400": [2400, 2410], "2410": [2410], "2500": [2500, 2510, 2511], "2510": [2510, 2511], "2511": [2511], "2600": [2600], "2700": [2700], "2800": [2800, 2810, 2811, 2812], "2810": [2810, 2811, 2812], "2811": [2811], "2812": [2812], "3000": [3000, 3100, 3110, 3120], "3100": [3100, 3110, 3120], "3110": [3110], "3120": [3120], "4000": [4000, 4100, 4200, 4300, 4400, 4500, 4600, 4110, 4120, 4210, 4220, 4410, 4510, 4130], "4100": [4100, 4110, 4120, 4130], "4110": [4110], "4120": [4120, 4130], "4130": [4130], "4200": [4200, 4210, 4220], "4210": [4210], "4220": [4220], "4300": [4300], "4400": [4400, 4410], "4410": [4410], "4500": [4500, 4510], "4510": [4510], "4600": [4600], "5000": [5000, 5010, 5020, 5030, 5040, 5050, 5060, 5070, 5080, 5081, 5090, 5100, 5110, 5120, 5130, 5140, 5150, 5160, 5170], "5010": [5010], "5020": [5020], "5030": [5030], "5040": [5040], "5050": [5050], "5060": [5060], "5070": [5070], "5080": [5080], "5081": [5081], "5090": [5090], "5100": [5100], "5110": [5110], "5120": [5120], "5130": [5130], "5140": [5140], "5150": [5150], "5160": [5160], "5170": [5170], "6000": [6000, 6100, 6200, 6300, 6400, 6500, 6600, 6700, 6310, 6301, 6302], "6100": [6100], "6200": [6200], "6300": [6300, 6310, 6301, 6302], "6310": [6310], "6301": [6301], "6302": [6302], "6400": [6400], "6500": [6500], "6600": [6600], "6700": [6700], "7000": [7000, 7100, 7200, 7300], "7100": [7100], "7200": [7200], "7300": [7300], "8000": [8000, 8100, 8200, 8300, 8400, 8110, 8120, 8310, 8410, 8420], "8100": [8100, 8110, 8120], "8110": [8110], "8120": [8120], "8200": [8200], "8300": [8300, 8310], "8310": [8310], "8400": [8400, 8410, 8420], "8410": [8410], "8420": [8420]}
console.log('Hello')
console.log(treatment_loadin)
if (treatment_loadin=='sagittal_female_common_pain_reliever'){

    ontology_MS_full=ontology_MS_full_h1
    ontology_MeeSiing=ontology_MeeSiing_h1
}





// // // // // try{
// // // // // this_url=this_url.split("?")
// // // // // sample_dzi=this_url[1].split("#")[0]
// // // // // //sample_dzi=
// // // // // console.log(sample_dzi)
// // // // // }
// // // // // catch(err){
// // // // // // sample_dzi=available_samples[0].substring(0,available_samples[0].length-4)
// // // // // var sample_dzi = "StitchedImage_Z049_L001"
// // // // // }

// // // // // if (available_samples.indexOf(sample_dzi+".dzi") <= 0) {
// // // // // // sample_dzi=available_samples[0].substring(0,available_samples[0].length-4)
// // // // // var sample_dzi = "StitchedImage_Z049_L001"
// // // // // }

// // // // // //assign coordinates
// // // // // try{
// // // // // sample_coordinates=this_url[1].split("#")[1]
// // // // // console.log(sample_coordinates)
// // // // // sample_coordinates=sample_coordinates.split(",")
// // // // // }
// // // // // catch(err2){
// // // // // sample_coordinates=false
// // // // // }
if (window.location.pathname.split('/')[2]=='histotomography'){
    label_overlay_color='rgba(255,255,255,1)'
    label_overlay_color_faded='rgba(255,255,255,.25)'
    resolution=.52
    max_zoom=8
    dont_smooth_viewer=true
}
else{
    label_overlay_color='rgba(0,0,0,1)'
    label_overlay_color_faded='rgba(0,0,0,.25)'
    resolution=.252
// max_zoom=4 //pre 9-14=2022

    max_zoom=12
    dont_smooth_viewer=true
}

var brightness_pct = 100
var contrast_pct = 100
// var nav_hover_button_div=document.getElementById("nav_hover_button")
var stack_indicator_line_div=document.getElementById("stack_indicator_line")
var tool_bar_div=document.getElementById("tool_bar")
// var shopping_aisle_preview_div=document.getElementById("shopping_aisle_preview_div")
// var preview_location_div=document.getElementById("preview_location")
// var current_location_div=document.getElementById("current_location")
var OSD_div=document.getElementById("openseadragon1")
var single_onto_panels=document.getElementsByClassName('panel2')
// ontology_bar_width=getComputedStyle(single_onto_panels[0])['width']
ontology_bar_width=single_onto_panels[0].offsetWidth
console.log(ontology_bar_width)
OSD_div.style.width=window.innerWidth-ontology_bar_width+'px'
OSD_div.style.left=ontology_bar_width+'px'
var button_leftright_div=document.getElementById("nav_left_10")
// stack_indicator_line_div.style.backgroundColor = "black";
// stack_indicator_line_div.style.opacity = '1';


//toolbar setup
// var brightness_indicator_div=document.getElementById("brightness_indicator")
// var brightness_overlay_div=document.getElementById("brightness_overlay")
// var contrast_indicator_div=document.getElementById("contrast_indicator")
// var contrast_overlay_div=document.getElementById("contrast_overlay")
//history.pushState(null, null, '/en/step2');

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

//floating label

var div_slice_idx_display = document.createElement("div");
// div_label_display.id = "label_display_"+number_of_current_divs;
div_slice_idx_display.id = "slice_idx_display";
div_slice_idx_display.className = "unselectable";
div_slice_idx_display.addEventListener('contextmenu', event => event.preventDefault());
// div_label_display.style.background = "transparent";
div_slice_idx_display.style.letterSpacing  = "4px";
div_slice_idx_display.style.background  = 'rgba(0,0,0,.7)';
div_slice_idx_display.style.position = "absolute";
div_slice_idx_display.style.color = "white";
// div_label_display.style.top     = event.position["y"]
// div_label_display.style.left    = event.position["x"]
div_slice_idx_display.style.top     = "90%";
if (isMobile) {
    div_slice_idx_display.style.top     = "80%";
}




div_slice_idx_display.style.right    = 0;
download_link_base = "./assets/data_share/Vector_Illustrator_with_just_Allen/"+sample_loadin+"_vector.ai"
download_link_base_tif = "./assets/data_share/Suppl_File1_Labels_compressed/"+sample_loadin+".7z"
Atlas_Web_Release_data_link="./assets/data_share/Atlas_Web_Release_data.7z"
svg_url=svg_label_dict[treatment_loadin][available_samples[sample_idx]]
if (isMobile) {
    div_slice_idx_display.innerHTML    = sample_loadin
}
else{
    // div_slice_idx_display.innerHTML    = available_samples[sample_idx]+"<br><a style='color:gray; ' href='"+download_link_base+"'>vector file (1MB .ai)<a>"+"<br><a style='color:gray; ' href='"+download_link_base_tif+"'>label map (~100KB .7z)<a>"+"<br><a style='color:gray; ' href='"+Atlas_Web_Release_data_link+"'>all data (88MB)<a>"//<br><span style='font-size:12px'>Downloads<\span><br><a style='color:white; font-size:12px' href='"+svg_url+"' target='_blank'>vector file (1MB .svg)<\a>";
    div_slice_idx_display.innerHTML    = (sample_idx+1)+"/"+available_samples.length+"<br><a style='color:gray;font-size:7px;'>"+available_samples[sample_idx]+"</a><br><span style='font-size:12px'>Downloads<\span><br><a style='color:white; font-size:12px' href='"+svg_url+"' target='_blank'>vector file (1MB .svg)<\a>";
}
document.body.appendChild(div_slice_idx_display);

//Prep Window
window_resizing()
function window_resizing(){
    console.log("RESOZOMG")
    var window_height=window.innerHeight;
    var window_width=window.innerWidth;
    var stack_ind_height=window_height/16
    var stack_ind_height=window_height/10 //for carusel
    var stack_ind_width=window_width/2

    // nav_hover_button_div.style.width = stack_ind_height/4+"px";
    // nav_hover_button_div.style.height = stack_ind_height/4+"px";
    // nav_hover_button_div.style.top = window_height-stack_ind_height/4 + "px";
    // nav_hover_button_div.style.left = window_width/2-stack_ind_height/4+"px"

    // stack_indicator_line_div.style.width = stack_ind_width+"px";
    // stack_indicator_line_div.style.height = stack_ind_height+"px";
    // stack_indicator_line_div.style.top = window_height-stack_ind_height + "px";
    // stack_indicator_line_div.style.left = stack_ind_width/2+"px"
    //OSD Positioning
    var perma_drop_proj_menu=document.getElementById("proj1")
    console.log(perma_drop_proj_menu)
    OSD_div.style.height=window_height-50+"px";
    var single_onto_panels=document.getElementsByClassName('panel2')
    ontology_bar_width=single_onto_panels[0].offsetWidth
    console.log(ontology_bar_width)
    OSD_div.style.width=window.innerWidth-ontology_bar_width+'px'
    OSD_div.style.left=ontology_bar_width+'px'
    // console.log(perma_drop_proj_menu.clientWidth)
    // OSD_div.style.width=window_width-perma_drop_proj_menu.clientWidth+"px";
    // OSD_div.style.marginLeft =perma_drop_proj_menu.clientWidth+"px";
    perma_drop_proj_menu.style.height=window_height-50+"px";

    stack_indicator_line_div.style.width = stack_ind_width+"px";
    stack_indicator_line_div.style.height = stack_ind_height+"px";
    stack_indicator_line_div.style.top = window_height-stack_ind_height + "px";
    stack_indicator_line_div.style.left = stack_ind_width/2+ontology_bar_width/2+"px"


    // tool_bar_div.style.width =7.39*2+"vw";
    // tool_bar_div.style.width =stack_ind_width+"px";
    tool_bar_div.style.height = "50 px"
    tool_bar_div.style.position = "absolute";
    tool_bar_div_width=tool_bar_div.clientWidth;
    var indicator_rect_=stack_indicator_line_div.getBoundingClientRect();
    // tool_bar_div.style.top = parseInt(stack_indicator_line_div.style.top)-parseInt(tool_bar_div.clientHeight)-25+"px"//(event.clientX-20)+"px"
    tool_bar_div.style.top = parseInt(stack_indicator_line_div.style.top)-parseInt(button_leftright_div.clientHeight)+"px"//(event.clientX-20)+"px"
    tool_bar_div.style.left = ((indicator_rect_.right-indicator_rect_.left)-tool_bar_div_width/2)+ontology_bar_width/2+"px"

    // var stack_indicator_line_div = document.getElementById('stack_indicator_line').getBoundingClientRect

    // var indicator_rect_=stack_indicator_line_div.getBoundingClientRect();
    // tool_bar_div.style.top = parseInt(stack_indicator_line_div.style.top)-parseInt(tool_bar_div.clientHeight)-25+"px"//(event.clientX-20)+"px"
    var div_slice_idx_display=document.getElementById("slice_idx_display")
    // div_slice_idx_display.style.top = parseInt(stack_indicator_line_div.style.top)+parseInt(div_slice_idx_display.clientHeight)+"px"//(event.clientX-20)+"px"
    div_slice_idx_display.style.top = parseInt(stack_indicator_line_div.style.top)+"px"//(event.clientX-20)+"px"

    try{
        viewer.scalebar({
            maxWidth: (window.innerWidth-stack_indicator_line_div.getBoundingClientRect().right)/2+'px'
        });
        // viewer.scalebarInstance['minWidth']=window.innerWidth-stack_indicator_line_div.getBoundingClientRect().right+'px'
    }
    catch{
        1+1
    }
    // tool_bar_div.style.left = ((indicator_rect_.right-indicator_rect_.left)-tool_bar_div_width/2)+ontology_bar_width/2+"px"


    // shopping_aisle_preview_div.style.width=7.39*2+"vw";
    // shopping_aisle_preview_div.style.height=5*2+"vw";
    // shopping_aisle_preview_div.style.position = "absolute";
    // shopping_aisle_preview_div.style.zIndex=100
    // shopping_aisle_preview_div.style.backgroundRepeat = "no-repeat";
    // shopping_aisle_preview_div.style.backgroundSize = "contain";
    // shopping_aisle_preview_div.style.backgroundPosition = "center";
    // shopping_aisle_preview_div.style.backgroundImage = "url(../assets/images/brain.png)"

    // preview_location_div.style.height=5*2+"vw";
    // current_location.style.height=5*2+"vw";

    //toolbar setup
    // brightness_indicator_div.style.height=1+"vh";
    // brightness_indicator_div.style.width=10+"vw";
    // brightness_indicator_div.style.top=50+"vh";
    // brightness_indicator_div.style.left=100-10-2.5+"vw";

    // brightness_overlay_div.style.height=3+"vh";
    // brightness_overlay_div.style.width=.5+"vh";
    // brightness_overlay_div.style.top=50-1+"vh";
    // brightness_overlay_div.style.left=100-10-2.5+5+"vw";

    // contrast_indicator_div.style.height=1+"vh";
    // contrast_indicator_div.style.width=10+"vw";
    // contrast_indicator_div.style.top=50+4+"vh";
    // contrast_indicator_div.style.left=100-10-2.5+"vw";

    // contrast_overlay_div.style.height=3+"vh";
    // contrast_overlay_div.style.width=.5+"vh";
    // contrast_overlay_div.style.top=50+1+2+"vh";
    // contrast_overlay_div.style.left=100-10-2.5+5+"vw";

    // var elements = document.getElementsByClassName("displayregioncontainer");
    // var rect=elements[0].getBoundingClientRect();
    // re_place_cardinals([rect.top, rect.right, rect.bottom, rect.left])


}

// function re_place_cardinals(TRBL_list){
// var bbox_top = TRBL_list[0]
// var bbox_right = TRBL_list[1]
// var bbox_bottom =TRBL_list[2]
// var bbox_left =TRBL_list[3]

// }


summon_OSD()
//default brightness on load
document.getElementById("openseadragon1").style.filter = "brightness("+brightness_pct+"%) contrast("+contrast_pct+"%)";
document.getElementById("openseadragon1").style.WebkitFilter = "brightness("+brightness_pct+"%) contrast("+contrast_pct+"%)";

document.getElementById("stack_indicator_line").style.filter = "brightness("+brightness_pct+"%) contrast("+contrast_pct+"%)";
document.getElementById("stack_indicator_line").style.WebkitFilter = "brightness("+brightness_pct+"%) contrast("+contrast_pct+"%)";


function summon_carusel(){

    // starting_caru_samples=available_carusel.slice(parseInt(sample_idx)-6,parseInt(sample_idx)+5) //summon 11
    starting_caru_samples=available_carusel[parseInt(sample_idx)] //summon 11
    console.log("summoning navigator carousel")
    viewer1 = OpenSeadragon({
        id: 'stack_indicator_line',
        prefixUrl: '../assets/images/osd_assets/images/',
        // tileSources: "../../../assets/EC2/output/anatomical_reference_histology_zf/"+treatment_loadin+"/"+available_samples[sample_idx]+".dzi",
        // tileSources: "../../../assets/EC2/output/anatomical_reference_histology_zf/"+treatment_loadin+"/"+available_samples[sample_idx]+".dzi",
        // tileSources: available_carusel
        tileSources: starting_caru_samples, //only load the one sample.
        showNavigator:  false,
        showZoomControl: false,
        showzoomOutButton: false,
        showHomeControl: false,
        showSequenceControl: true,
        collectionMode: false,
        showFullPageControl: false,
        // collection: true,
        // collectionRows: 1,
        // sequenceControlAnchor: 'ABSOLUTE',
        // collectionTileSize:   1024,
        // collectionTileMargin: 256,
        // collectionLayout:     'horizontal',
        zoomPerScroll: 1,
        visibilityRatio: 1,
        panVertical: false,
        defaultZoomLevel:0.00027372891829368967,
        // collectionTileMargin: 2000,
    })

    viewer1.addOnceHandler('open', function() {
        var rows = 1
        var count = viewer1.world.getItemCount();
        var pos = new OpenSeadragon.Point(0, 0);
        var max_height=0
        var max_width=0
        // for (var i = 0; i < count; i++) {
        // image = viewer1.world.getItemAt(i)
        // var img_dims =image.getContentSize()
        // var height =image.getBounds().height
        // var width = image.getBounds().width;
        // if (height>max_height)max_height=height;
        // if (width>max_width)max_width=width;
        // }
        // var viewportPoint = viewer.viewport.pointFromPixel(webPoint);
        //vertical perfect stacking
        for (var i = 0; i < count; i++) {

            var image = viewer1.world.getItemAt(i);
            // dzi_index=parseInt(image.source.tilesUrl.split("/")[image.source.tilesUrl.split("/").length-2].split("_")[0])
            var _source=image.source.tilesUrl.split("/")[image.source.tilesUrl.split("/").length-2]
            dzi_index=_source.slice(0,_source.length-6)
            dzi_index=treatment_samples_dict[dzi_index][1]
            console.log("FIRST IMAGE PLACED IN CAROUSEL:"+ dzi_index)
            proxy_i=dzi_index
            image_bounds=image.getBounds()
            img_width=image_bounds.width

            var pos = new OpenSeadragon.Point(0, 0);
            // pos.x = proxy_i * img_width + (proxy_i * 256)
            pos.x = proxy_i * img_width + (proxy_i * margin_)
            // pos.x = proxy_i * img_width +  margin_
            pos.y = image_bounds['y']
            image.setPosition(pos, true)
            image_bounds=image.getBounds()
            // image.setPosition(pos, true);
            image.index=proxy_i;
            console.log(image.index)
            // var overlay_x=pos.x
            // var overlay_y=pos.y
            // image_bounds=image.getBounds()
            // console.log(image_bounds)
            // // pos.x += image.getBounds().width;
            // // pos.x += max_width*1.25;
            // pos.x += max_width;
            // if ((i+1)%rows==0) {
            // console.log("next row")
            // pos.x = 0;
            // // pos.y += image.getBounds().height;
            // // pos.y += max_height*1.25;
            // pos.y += max_height;
            // // console.log(image.getBounds().height)
            // }
            // console.log(overlay_x)
            var elt = document.createElement("div");
            elt.id = "example-overlay"+i;
            elt.className = "highlight";
            elt.style.cursor = "pointer";
            // elt.innerHTML=inset_ID_overlay_array[i]+". "+treatment_array[i]
            // elt.innerHTML=name_convention[i]
            elt.innerHTML="<span>"+(proxy_i)+'/'+available_carusel.length+"</span>"
            // elt.innerHTML="test"
            var tracker = new OpenSeadragon.MouseTracker({
                element: elt,
                clickHandler: function(j) { return function() {change_viewer_sample_carousel(j+''); }; }(proxy_i)
            });

            viewer1.addOverlay({
                element: elt,
                // location: new OpenSeadragon.Rect(viewportPoint["x"]-label_width/2,viewportPoint["y"]-label_height/2, label_width, label_height), //PULL THESE SIZES FROM THE MIN ENCLOSING CANVAS CALL
                // location: new OpenSeadragon.Rect(overlay_x,overlay_y,overlay_x+img_dims['x'],overlay_y+img_dims['y']), //PULL THESE SIZES FROM THE MIN ENCLOSING CANVAS CALL
                location: new OpenSeadragon.Rect(image_bounds['x'],image_bounds['y'],image_bounds['width'],image_bounds['height']), //PULL THESE SIZES FROM THE MIN ENCLOSING CANVAS CALL
                // location: image_bounds, //PULL THESE SIZES FROM THE MIN ENCLOSING CANVAS CALL
                // location: new OpenSeadragon.Rect(overlay_x,overlay_y,overlay_x,overlay_y), //PULL THESE SIZES FROM THE MIN ENCLOSING CANVAS CALL
            });
            //zoom to loadin sample
            viewer1.viewport.fitBounds(viewer1.world.getItemAt(0).getBounds(),true);
            buffer_carusel()
            // // // var elt2 = document.createElement("div");
            // // // elt2.id = "inset-overlay"+i;
            // // // elt2.className = "highlight2";
            // // // // elt2.innerHTML=inset_ID_overlay_array[i]
            // // // var inset_coordinates=inset_overlay_array[i]

            // // // //make these the same as the entire slice
            // // // intro_rect = new OpenSeadragon.Rect(parseFloat(inset_coordinates[0]),parseFloat(inset_coordinates[1]),parseFloat(inset_coordinates[2]),parseFloat(inset_coordinates[3]))
            // // // viewer.addOverlay({
            // // // element: elt2,
            // // // location:intro_rect
            // // // })


        }
        // change_viewer_sample_carousel(sample_idx)



    })
    viewer1.gestureSettingsMouse.clickToZoom = false
    viewer1.setFilterOptions({
        filters: {
            processors: [
                // OpenSeadragon.Filters.BRIGHTNESS(view_controls.brightness),
                OpenSeadragon.Filters.CONTRAST(1),
                // OpenSeadragon.Filters.GAMMA(view_controls.gamma),
                // OpenSeadragon.Filters.INVERT(),
                // // OpenSeadragon.Filters.SOBEL_EDGE()
                // OpenSeadragon.Filters.THRESHOLDING(view_controls.threshold),
                // OpenSeadragon.Filters.INVERT(view_controls.invert)=view_controls.invert == 'invert' ? 0 : 1; // 0: MIP, 1: ISO
                // OpenSeadragon.Filters.INVERT(view_controls.invert),

            ]
        }

    })
    // // viewer1.addOnceHandler('tile-loaded', function(event) {
    // // console.log("sample index: "+sample_idx)
    // // var tiledImage = viewer1.world.getItemAt(carusel_rendered_already[sample_idx][1]);
    // // var imageBounds = tiledImage.getBounds();
    // // var imageAspect = imageBounds.width / imageBounds.height;
    // // var aspectFactor = imageAspect / viewer1.viewport.getAspectRatio();
    // // var newHomeZoom = (aspectFactor >= 1 ? 1 : aspectFactor) / imageBounds.width;
    // // viewer1.viewport.zoomTo(newHomeZoom, null, true);
    // console.log(newHomeZoom)
    // // change_viewer_sample_carousel(sample_idx)
    // // })
// })
}


function summon_OSD(){
    viewer = OpenSeadragon({
        id: 'openseadragon1',

        prefixUrl: '../assets/images/osd_assets/images/',
        //tileSources: '/images 1/JP2K-33003-1.dzi'//,
        // tileSources: {
        // type:"image",
        // url: "../assets/"+subset_url_zoom
        // },
        // tileSources: 'https://s3.amazonaws.com/atlast-osd-data/ysk/'+available_samples[sample_idx]+".dzi",
        // tileSources: "../assets/image_repository/OTR/"+treatment_loadin.substring(4,treatment_loadin.length)+"/"+sample_loadin+"/"+available_samples[sample_idx]+".dzi",
        tileSources: "../../../assets/EC2/output/anatomical_reference_histology_zf/"+treatment_loadin+"/"+available_samples[sample_idx]+".dzi",
        // tileSources: "../assets/image_repository/"+available_samples[sample_idx]+".dzi",

        // tileSources: {
        // type:   "image",
        // tileSources:    '../assets/image_repository/'+sample_dzi+".dzi",
        crossOriginPolicy: 'Anonymous',
        // },
        minZoomLevel: 	.1,
        maxZoomLevel: 	max_zoom,
        // replace: true,
        // toolbar:       "toolbarDiv",
        showNavigator:  true,
        navigatorPosition:   "TOP_RIGHT",
        // zoomInButton:   "zoom_magp_button",
        // zoomOutButton:  "zoom_magm_button",
        showZoomControl: false,
        // showzoomOutButton: false,
        showHomeControl: false,
        // showSequenceControl: true,

        showFullPageControl: false,
        // sequenceMode: true,
        // sequenceControlAnchor: 'ABSOLUTE',
        // collectionTileSize:   1024,
        // collectionTileMargin: 256,
        // collectionLayout:     'vertical',
        // collectionTileSize: xxx
        // collectionTileMargin: 2000,
        // tileSources: available_samples_link,
        // navigatorSizeRatio: nav_size_ratio,
        // navigationControlAnchor:   "BOTTOM_RIGHT", //doesn't seem to work

        // ControlAnchor: "NONE"
        // overlays: [{
        // id: 'example-overlay',
        // x: 0.1,
        // y: 0.1,
        // width: .075,
        // height: .075,
        // className: 'highlight'
        // }],
        degrees: 0,
        // degrees: -90,
        // Show rotation buttons
        // showRotationControl: true,
        // Enable touch rotation on tactile devices
        gestureSettingsTouch: {
            pinchRotate: false
        }
    });

    // //FIT TO ZOOM!
    // viewer.addHandler('open', function() {
    // viewer.viewport.fitBounds(zoom_box,true);
    // });

    viewer.scalebar({
        // location: OpenSeadragon.ScalebarLocation.BOTTOM_LEFT,
        location: OpenSeadragon.ScalebarLocation.BOTTOM_RIGHT,
        stayInsideImage: false,
        pixelsPerMeter: 1000000/resolution, //meters per pixel
        color: "rgb(0, 0, 0)",
        fontColor: "rgb(0, 0, 0)",
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        // fontSize: "small",
        barThickness: 4,
        minWidth:(window.innerWidth-stack_indicator_line_div.getBoundingClientRect().right)/2+'px'

    })
    var scale_bar_overlay_canvas = viewer.scalebarInstance.getAsCanvas();
    console.log(viewer.tileSources)
    function pixelateAtMaximumZoom(data) {
        var viewer = data.eventSource;
        var drawer = viewer.drawer;
        var canvas = drawer.canvas;
        var context = canvas.getContext("2d");

        context.mozImageSmoothingEnabled    = false;
        context.oImageSmoothingEnabled      = false;
        context.webkitImageSmoothingEnabled = false;
        context.msImageSmoothingEnabled     = false;
        context.imageSmoothingEnabled       = false;
    }
    //To pixelate viewer
    if (dont_smooth_viewer){
        viewer.addHandler("tile-drawn", pixelateAtMaximumZoom);
    }

    viewer.addOnceHandler('open', function() {
        summon_carusel()
        eventFire(document.getElementById('id_0'), 'click');
        if (load_vars["c"]){
            viewer.viewport.fitBounds(zoom_box_loadin,true);
        }


    });

    // viewer.initializeAnnotations()
    viewer.gestureSettingsMouse.clickToZoom = false


    // viewer.addHandler('canvas-click', function(event) {
    viewer.addHandler('animation-finish', function(event) {
        var linkable_zoom_box=viewer.viewport.getBounds(true);
        var base_link = window.location.origin+window.location.pathname
        push_link=base_link+"?t="+encodeURI(treatment_loadin)+"&z="+(sample_idx+1)+"&c="+linkable_zoom_box['x']+","+linkable_zoom_box['y']+","+linkable_zoom_box['width']+","+linkable_zoom_box['height']
        console.log(push_link)
        history.pushState(null, '', push_link);
        // document.location = push_link
    })
    if (dont_smooth_viewer){
        viewer.addHandler('animation-finish', pixelateAtMaximumZoom);
    }
    // // // var gui = new dat.GUI();
    // // // var view_controls = new function() {
    // // // this.brightness = 0;
    // // // this.contrast = 1;
    // // // this.gamma = 1;
    // // // this.invert = false;
    // // // this.threshold_toggle=false
    // // // this.threshold = 255;
    // // // this.reset_filters = false;
    // // // // this.sobel = false;
    // // // // this.thresholding = 0;
    // // // // this.invert = 1;

// // // }
// // // gui.add( view_controls, 'brightness', -50, 150, 1 ).onChange( updateFilters );
// // // gui.add( view_controls, 'contrast', 0, 4, 0.1 ).onChange( updateFilters );
// // // gui.add( view_controls, 'gamma', 0, 5, .1 ).onChange( updateFilters );
// // // // gui.add( view_controls, 'sobel' ).onChange( updateFilters );
// // // gui.add( view_controls, 'invert' ).onChange( updateFilters );
// // // gui.add( view_controls, 'threshold_toggle' ).onChange( updateFilters );
// // // gui.add( view_controls, 'threshold', 0, 255, 1 ).onChange( updateFilters );
// // // gui.add( view_controls, 'reset_filters').onChange( updateFilters );
// // // // gui.add( view_controls, 'invert', { normal: 'nomrals', invert: 'invert' }).onChange( updateFilters );
// // // // gui.add( view_controls,  {normal: '1', invert: '0' }).onChange( updateFilters );
// // // // dat.GUI.toggleHide();

// // // gui.close()
// // // function updateFilters(){
// // // if (view_controls.reset_filters){
// // // gui.__controllers.forEach(controller => controller.setValue(controller.initialValue));
// // // }

// // // if (view_controls.invert && view_controls.threshold_toggle)
// // // // if (view_controls.sobel){
// // // viewer.setFilterOptions({
    // // // filters: {
    // // // processors: [
    // // // OpenSeadragon.Filters.BRIGHTNESS(view_controls.brightness),
    // // // OpenSeadragon.Filters.CONTRAST(view_controls.contrast),
    // // // OpenSeadragon.Filters.GAMMA(view_controls.gamma),
    // // // OpenSeadragon.Filters.INVERT(),
    // // // // OpenSeadragon.Filters.SOBEL_EDGE()
    // // // OpenSeadragon.Filters.THRESHOLDING(view_controls.threshold),
    // // // // OpenSeadragon.Filters.INVERT(view_controls.invert)=view_controls.invert == 'invert' ? 0 : 1; // 0: MIP, 1: ISO
    // // // // OpenSeadragon.Filters.INVERT(view_controls.invert),

    // // // ]
    // // // }
// // // })

// // // else if (view_controls.invert){
// // // // if (view_controls.sobel){
// // // viewer.setFilterOptions({
    // // // filters: {
    // // // processors: [
    // // // OpenSeadragon.Filters.BRIGHTNESS(view_controls.brightness),
    // // // OpenSeadragon.Filters.CONTRAST(view_controls.contrast),
    // // // OpenSeadragon.Filters.GAMMA(view_controls.gamma),
    // // // OpenSeadragon.Filters.INVERT(),
    // // // // OpenSeadragon.Filters.SOBEL_EDGE()
    // // // // OpenSeadragon.Filters.THRESHOLDING(view_controls.thresholding),
    // // // // OpenSeadragon.Filters.INVERT(view_controls.invert)=view_controls.invert == 'invert' ? 0 : 1; // 0: MIP, 1: ISO
    // // // // OpenSeadragon.Filters.INVERT(view_controls.invert),

    // // // ]
    // // // }
// // // })


// // // }



// // // else if (view_controls.threshold_toggle){
// // // viewer.setFilterOptions({
    // // // filters: {
    // // // processors: [
    // // // OpenSeadragon.Filters.BRIGHTNESS(view_controls.brightness),
    // // // OpenSeadragon.Filters.CONTRAST(view_controls.contrast),
    // // // OpenSeadragon.Filters.GAMMA(view_controls.gamma),
    // // // OpenSeadragon.Filters.THRESHOLDING(view_controls.threshold),
    // // // // OpenSeadragon.Filters.INVERT(view_controls.invert)=view_controls.invert == 'invert' ? 0 : 1; // 0: MIP, 1: ISO
    // // // // OpenSeadragon.Filters.INVERT(view_controls.invert),

    // // // ]
    // // // }
// // // })
// // // }
// // // else{
    // // // viewer.setFilterOptions({
    // // // filters: {
    // // // processors: [
    // // // OpenSeadragon.Filters.BRIGHTNESS(view_controls.brightness),
    // // // OpenSeadragon.Filters.CONTRAST(view_controls.contrast),
    // // // OpenSeadragon.Filters.GAMMA(view_controls.gamma),
    // // // // OpenSeadragon.Filters.SOBEL_EDGE()
    // // // // OpenSeadragon.Filters.THRESHOLDING(view_controls.thresholding),
    // // // // OpenSeadragon.Filters.INVERT(view_controls.invert)=view_controls.invert == 'invert' ? 0 : 1; // 0: MIP, 1: ISO
    // // // // OpenSeadragon.Filters.INVERT(view_controls.invert),

    // // // ]
    // // // }
// // // })

    // // // // viewer1.setFilterOptions({
    // // // // filters: {
    // // // // processors: [
    // // // // OpenSeadragon.Filters.BRIGHTNESS(view_controls.brightness),
    // // // // OpenSeadragon.Filters.CONTRAST(view_controls.contrast),
    // // // // OpenSeadragon.Filters.GAMMA(view_controls.gamma),
    // // // // // OpenSeadragon.Filters.SOBEL_EDGE()
    // // // // // OpenSeadragon.Filters.THRESHOLDING(view_controls.thresholding),
    // // // // // OpenSeadragon.Filters.INVERT(view_controls.invert)=view_controls.invert == 'invert' ? 0 : 1; // 0: MIP, 1: ISO
    // // // // // OpenSeadragon.Filters.INVERT(view_controls.invert),

    // // // // ]
    // // // // }
// // // // })

// // // }


// // // }
// const annotations = new viewer.annotations({ viewer });
//Dan look here to change double label loading 7/8/2021
    first_run=true

    if (available_samples[sample_idx] in svg_label_dict[treatment_loadin]){
        console.log("DEBUG THIS, WHY IS THIS TRIGGERING")
        console.log(available_samples[sample_idx])
        console.log(svg_label_dict[treatment_loadin])

        viewer.addHandler('open', function() {

            for (var key in ontology_MS_full){

                try{
                    // console.log('checkbox_'+ontology_dict[key.replaceAll('_', ' ')]['anatomical id'])
                    console.log('checkbox_'+key)
                    document.getElementById('checkbox_'+key).remove()
                }
                catch{1+1}

            }

            children_id_on_slide_dict={}
            label_ids_on_this_slide=[]
            render_set=new Set()
            render_set_list=[]

            current_svg=[]
            //remove previous checkboxes

            global_label_dict={}
            // removeAllChildNodes(document.getElementById("label_panel"))
            try{
                removeAllChildNodes(_svg_overlay.node())
                document.getElementById('current_svg_'+available_samples[sample_idx]).remove()
                removeAllChildNodes(document.getElementById('current_svg_'+available_samples[sample_idx]))
                removeAllChildNodes(svg_embed_element)
                svg_embed_element.remove()

            }
            catch{
                console.log('no labels to erase!')
            }
            console.log("There are labels for this slide!")
            // svg_overlay = viewer.svgOverlay();
            // console.log(svg_overlay)
            // console.log(svg_label_dict[available_samples[sample_idx]])
            url=svg_label_dict[treatment_loadin][available_samples[sample_idx]]


            e = document.createElement('embed');
            e.src = url
            e.type = "image/svg+xml";
            e.id = 'current_svg_'+available_samples[sample_idx]
            // e.style.visibility = 'collapse'
            // document.body.appendChild(e);
            var div = document.createElement("div");
            div.style.height='1px'
            div.style.width='1px'
            div.style.visibility=' hidden'
            div.style.position=' absolute'
            div.style.top=' -9999px'
            div.appendChild(e)
            document.body.appendChild(div);
            e.addEventListener('load', function()
            {


                // var head = document.body;
                // var svg_embed = document.createElement('embed');
                // svg_embed.src = url;
                // svg_embed.id = 'svg_embed';

                // svg_embed.on("load", function () {
                // svg_embed.removeAttr('data-href');



                // Then bind the event to the callback function.
                // There are several events for cross browser compatibility.
                // svg_embed.onreadystatechange = callback;
                // svg_embed.onload = callback;

                // Fire the loading
                // head.appendChild(svg_embed);
                svg_embed_element=this.getSVGDocument().documentElement
                // width_svg=svg_embed_element.width.baseVal.value //CHANGE THIS TO VIEWBOX RETRIEVAL 6/30/2021
                width_svg=svg_embed_element.viewBox.baseVal.width//CHANGE THIS TO VIEWBOX RETRIEVAL 6/30/2021
                console.log(svg_embed_element.getElementById("maxillae"))
                // // //finds all plottable elements
                // // console.log(svg_embed_element.querySelectorAll('*[id]'))
                label_group=svg_embed_element.getElementsByTagName('g')
                console.log(label_group.length)
                colors=['blue','red','green','yellow','green','blue','purple','black','brown','orange','blue','red','green','yellow','green','blue','purple','black','brown','orange','blue','red','green','yellow','green','blue','purple','black','brown','orange']
                class_list=svg_embed_element.getElementsByTagName('defs')[0]['textContent']
                for (var label_index=0; label_index<label_group.length; label_index++){
                    console.log(label_group[label_index])
                    console.log(label_group[label_index].id)
                    color_from_svg=false
                    if (color_from_svg){
                        color_class=label_group[label_index].getElementsByTagName('path')[0].classList.value


                        substr_1_idx=class_list.lastIndexOf(color_class)
                        // class_string_pre=class_list.substr(substr_1_idx,class_list.indexOf('}'))
                        class_string_pre=class_list.substr(substr_1_idx,class_list.length)
                        fill_color=class_string_pre.substring(class_string_pre.indexOf('fill:')+5,class_string_pre.indexOf(';'))
                    }
                    else{
                        fill_color_naked=ontology_dict[label_group[label_index].id.replaceAll('_', ' ')]['color']
                        fill_color='rgb('+ontology_dict[label_group[label_index].id.replaceAll('_', ' ')]['color']+')'
                    }
                    // fill_color_pre=class_string_pre.substring(class_string_pre.indexOf('fill:')+5,class_string_pre.length)
                    // fill_color=fill_color_pre.substring(0,fill_color_pre.indexOf(';'))
                    g=label_group[label_index].cloneNode(true)
                    // width_var=1/7740
                    scale_var=1/width_svg
                    // console.log(width_var)
                    // console.log("scale("+scale_var+")")
                    g.setAttribute("transform", "scale("+scale_var+")")
                    g.setAttribute("fill-opacity", ".50")
                    stroke_it=true
                    if (stroke_it){
                        g.setAttribute("stroke", "black")
                        g.setAttribute("stroke-width", ".5px")
                        // g.setAttribute("stroke-width", "5px")
                    }
                    feather_it=true
                    if (feather_it){
                        var defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

                        var filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
                        filter.setAttribute("id","f1");
                        filter.setAttribute("x","0");
                        filter.setAttribute("y","0");

                        var gaussianFilter = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
                        gaussianFilter.setAttribute("in","SourceGraphic");
                        gaussianFilter.setAttribute("stdDeviation","2"); //REALLY FEATHERY

                        filter.appendChild(gaussianFilter);
                        defs.appendChild(filter);
                        g.appendChild(defs);
                        g.setAttribute("filter","url(#f1)");

                    }
                    //svg_embed_element.getElementsByTagName('defs')[0]['textContent']
                    //label_group[label_index].getElementsByTagName('path').classList.value
                    // className.baseVal.getElementsByTagName('path')
                    // g.setAttribute("fill", colors[label_index])
                    g.setAttribute("fill", fill_color)
                    var segmentation_name=label_group[label_index].id.replaceAll('_', ' ')
                    // g.onmouseenter = function(j) { return function() {svg_hovering(j); }; }([segmentation_name,1,g]);
                    //changing this function to just click
                    g.onmouseenter = function(j) { return function() {svg_hovering_simple(j); }; }([segmentation_name,1,g]);
                    g.onmouseout = function(j) { return function() {svg_hovering(j); }; }([segmentation_name,0,g]);
                    // g.onclick = function(j) { return function() {svg_click(j); }; }(segmentation_name);
                    //swapping this function for hover
                    g.onclick = function(j) { return function() {svg_click_complex(j); }; }([segmentation_name,1,g]);

                    global_label_dict[label_group[label_index].id] = g

                    //tie in label_panel2 instead of bumping in a new label panel:
                    //grab label_id if current svg:
                    var anatomical_svg_id=ontology_dict[label_group[label_index].id.replaceAll('_', ' ')]['anatomical id']


                    //search_this
                    //populate current label list id's for concurrent checkboxing through onotlogy:
                    label_ids_on_this_slide.push(anatomical_svg_id)

                    // var all_children_ids=ontology_MS_full[key]

                    // var slide_children_ids = all_children_ids.filter( ( item ) => label_ids_on_this_slide.includes( item ) );

                    // children_id_on_slide_dict[anatomical_svg_id]=slide_children_ids
                    // console.log(ontology_MS_slide_specific)







                    // // // // // // // // // var aTag = document.createElement('a');
                    // // // // // // // // // aTag.innerHTML =  label_group[label_index].id
                    // // // // // // // // // aTag.style.cursor =  'pointer'
                    // // // // // // // // // // aTag.innerHTML =  "<span style='font-weight: 700; color: "+colors[label_index]+"'>"+label_group[label_index].id.replaceAll('_', ' ')+"</span>"
                    // // // // // // // // // aTag.innerHTML =  "<span style='font-weight: 700; color: "+fill_color+"'>"+label_group[label_index].id.replaceAll('_', ' ')+"</span>"
                    // // // // // // // // // // +color_list[0]+","+color_list[1]+","+color_list[2]+"')><u>"+info_string[6]+"</u></span>"
                    // // // // // // // // // var x = document.createElement("input");
                    // // // // // // // // // x.setAttribute("type", "checkbox")
                    // // // // // // // // // x.setAttribute("id", "checkbox_"+label_group[label_index].id)
                    // // // // // // // // // x.style.cssFloat = "right";
                    // // // // // // // // // x.style.top = "50%";
                    // // // // // // // // // x.style.transform = "translateY(50%)"


                    // // // // // // // // // // var pass_list= [g, ]

                    // // // // // // // // // // aTag.onclick = function(k) {return function()}
                    // // // // // // // // // x.onclick  = null;
                    // // // // // // // // // // aTag.onclick  = function(j) { return function() {label_it(j); }; }({label_group[label_index].id});
                    // // // // // // // // // x.onclick  = function(j) { return function() {label_it(j); }; }(label_group[label_index].id);
                    // // // // // // // // // aTag.onmouseover  = function(j) { return function() {hover_it(j); }; }(label_group[label_index].id);


                    // // // // // // // // // // // // aTag.onclick  = function(j) { return function() {
                    // // // // // // // // // // // // try{
                    // // // // // // // // // // // // removeAllChildNodes(_svg_overlay.node())
                    // // // // // // // // // // // // document.getElementById('current_svg_'+available_samples[sample_idx]).remove()
                    // // // // // // // // // // // // removeAllChildNodes(document.getElementById('current_svg_'+available_samples[sample_idx]))
                    // // // // // // // // // // // // removeAllChildNodes(svg_embed_element)
                    // // // // // // // // // // // // svg_embed_element.remove()
                    // // // // // // // // // // // // }
                    // // // // // // // // // // // // catch{
                    // // // // // // // // // // // // 1+1}

                    // // // // // // // // // // // // _svg_overlay = viewer.svgOverlay();
                    // // // // // // // // // // // // _svg_overlay.node().appendChild(j)



                    // // // // // // // // // // // // };







                    // // // // // // // // // // // // }(g);


                    // // // // // // // // // document.getElementById("label_panel").appendChild(x)
                    // // // // // // // // // document.getElementById("label_panel").appendChild(aTag);

                    // // // // // // // // // console.log(label_group[label_index].id + " added to the panel")
                }
                // // // // // // // // // document.getElementById("accordian_button").innerHTML = "labels ("+label_group.length+")"
                //pull corresponding checkbox div:
                //maybe redundant


                label_ids_on_this_slide_clean=label_ids_on_this_slide.map((i) => Number(i));
                parentstoo_label_ids_on_this_slide=[]
                for (full_label_key in ontology_MS_full){
                    const found = ontology_MS_full[full_label_key].some(r=> label_ids_on_this_slide_clean.includes(r))
                    if (found){
                        console.log('found '+full_label_key)
                        label_ids_on_this_slide_clean.push(parseInt(full_label_key))
                        var slide_children_ids = ontology_MS_full[full_label_key].filter( ( item ) => label_ids_on_this_slide_clean.includes( item ) );
                        children_id_on_slide_dict[full_label_key]=slide_children_ids
                        // // parentstoo_label_ids_on_this_slide.push(slide_children_ids)
                    }
                }


                label_ids_on_this_slide=unique(label_ids_on_this_slide_clean)
                for (label_id in label_ids_on_this_slide){
                    anatomical_svg_id=label_ids_on_this_slide[label_id]

                    labels_only_here_checkboxes=true
                    //This is where we will knock in hover events for the ontology. Only on menu items that have checkboxes.
                    if (labels_only_here_checkboxes){
                        console.log(anatomical_svg_id)
                        var menu_item_div = document.getElementById("id_"+anatomical_svg_id)
                        menu_item_div_a_innerhtml= menu_item_div.getElementsByTagName('a')[0].innerHTML
                        menu_item_div_a_innerhtml="<input type='checkbox' id='checkbox_"+anatomical_svg_id+"' class='show' style='float: right; transform:translateY(-40%)'>"+menu_item_div_a_innerhtml
                        menu_item_div.getElementsByTagName('a')[0].innerHTML=menu_item_div_a_innerhtml
                        div_click=document.getElementById("checkbox_"+anatomical_svg_id)
                        // div_click.onclick  = function(j) { return function() {label_it(j); }; }(anatomical_svg_id);
                        div_click.onclick  = function(j) { return function() {label_it(j); }; }(anatomical_svg_id);
                        // document.getElementById("id_"+anatomical_svg_id).prepend(div_click)

                        //'hover' events for ontology highlighting.
                        menu_item_div.onmouseover = function(j) { return function() {menu_hover_enter(j); }; }(anatomical_svg_id);
                        menu_item_div.onmouseout = function(j) { return function() {menu_hovering_exit(j); }; }(anatomical_svg_id);





                    }


                    // var childDiv = menu_item_div
                    // var parentDiv = childDiv.parentNode
                    // console.log(parentDiv)
                    // var parent_id=parentDiv.id.split("_")[1]
                    // var child_div_count = 0
                    // var child_div_checked_count = 0
                    // for (key_child_idx in ontology_MS_full[parent_id]){
                    // try{
                    // var div_click_child=document.getElementById("checkbox_"+ontology_YT_full[parent_id][key_child_idx])
                    // // console.log(div_click_child.id)
                    // if (div_click_child.checked==true || div_click_child.indeterminate==true){
                    // child_div_count++
                    // child_div_checked_count++

                    // }
                    // else{
                    // child_div_count++}
                    // }
                    // catch{1+1}

                    // }

                }
                //keep boxes checked logic, if body is checked, keep it checked when you change slices.
                var div_click = document.getElementById('checkbox_0')
                if (first_run){
                    div_click.checked=true
                    select_all_labels_on_load=true
                }
                // div_click.checked=true

                if (select_all_labels_on_load){
                    div_click.checked=true
                    // if(div_click.checked){

                    eventFire(document.getElementById('checkbox_0'), 'click');
                    // label_it('0')
                    first_run=false
                    // }
                }
            });

        });



    }

}

label_window_exists=false


function svg_click_complex(segmentation_name_list){

    var [segmentation_name,in_out,svg_element]=segmentation_name_list
    console.log(segmentation_name+ " " +in_out)
    if (!label_window_exists){
        div_label_display = document.createElement("div");
        // div_label_display.id = "label_display_"+number_of_current_divs;
        div_label_display.id = "label_display";
        div_label_display.className = "unselectable";
        div_label_display.addEventListener('contextmenu', event => event.preventDefault());
        // div_label_display.style.background = "transparent";
        div_label_display.style.letterSpacing  = "5px";
        div_label_display.style.background  = 'rgba(255,255,255,.9)';
        div_label_display.style.position = "absolute";
        div_label_display.style.fontWeight   = "normal";
        // div_label_display.style.top     = event.position["y"]
        // div_label_display.style.left    = event.position["x"]

        // div_label_display.style.top = parseInt(stack_indicator_line_div.style.top)+parseInt(div_label_display.clientHeight)+"px"//(event.clientX-20)+"px"

        div_label_display.style.top     = "90%";
        div_label_display.style.width='25%'
        var indicator_rect_=stack_indicator_line_div.getBoundingClientRect();
        // div_label_display.style.left    = indicator_rect_.left

        div_label_display.style.left    = 0;
        console.log(div_label_display)
        document.body.appendChild(div_label_display);
    }
    //When you're hovering over nothing, mouse-out event
    if (!(in_out)){
        div_label_display = document.getElementById("label_display").remove()
        label_window_exists=false


        //push abbreviated label back to text label
        var text_label_div=document.getElementById('text_label_'+segmentation_name.replaceAll(" ","_"))
        text_label_div.innerHTML=ontology_dict[segmentation_name]['abv']



        // push_color_to_inside([segmentation_name,svg_element])
        for (var id_ of render_set){
            var segmentation_name_ = id_dict[id_]['segmentation name']
            // if (!(segmentation_name==segmentation_name_)){
            var svegg = global_label_dict[segmentation_name_.replaceAll(' ','_')]
            push_color_to_inside([segmentation_name_,svegg])
            // }
        }
        // svg_element.setAttribute("fill-opacity", ".50")
        // stroke_it=true
        // if (stroke_it){
        // svg_element.setAttribute("stroke", "black")
        // svg_element.setAttribute("stroke-width", ".5px")
        // // g.setAttribute("stroke-width", "5px")
        // }
        // feather_it=true
        // if (feather_it){
        // var defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

        // var filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
        // filter.setAttribute("id","f1");
        // filter.setAttribute("x","0");
        // filter.setAttribute("y","0");

        // var gaussianFilter = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        // gaussianFilter.setAttribute("in","SourceGraphic");
        // gaussianFilter.setAttribute("stdDeviation","2"); //REALLY FEATHERY

        // filter.appendChild(gaussianFilter);
        // defs.appendChild(filter);
        // svg_element.appendChild(defs);
        // svg_element.setAttribute("filter","url(#f1)");

        // }
        // //svg_embed_element.getElementsByTagName('defs')[0]['textContent']
        // //label_group[label_index].getElementsByTagName('path').classList.value
        // // className.baseVal.getElementsByTagName('path')
        // // g.setAttribute("fill", colors[label_index])
        // svg_element.setAttribute("fill", 'rgb('+ontology_dict[segmentation_name]['color']+')')







    }


    else{
        var label_info=ontology_dict[segmentation_name]

        label_window_exists=true

        // div_label_display.innerHTML = "Label: "+segmentation_name
        div_label_display.innerHTML = ontology_dict[segmentation_name]['display name']
        color_string=label_info['color']
        color_string_front=color_string[0]+","+color_string[1]+","+color_string[2]
        div_label_display.style.color  = "rgb("+color_string_front+")"
        //Get label ID element:
        var text_label_div=document.getElementById('text_label_'+segmentation_name.replaceAll(" ","_"))
        text_label_div.innerHTML=ontology_dict[segmentation_name]['display name']



        console.log(segmentation_name)
        console.log(ontology_dict[segmentation_name])
        if (document.getElementById('checkbox_'+ontology_dict[segmentation_name]['anatomical id']).checked){
            push_color_to_border([segmentation_name,svg_element])
            for (var id_ of render_set){
                var segmentation_name_ = id_dict[id_]['segmentation name']
                if (!(segmentation_name==segmentation_name_)){
                    var svegg = global_label_dict[segmentation_name_.replaceAll(' ','_')]
                    remove_color([segmentation_name_,svegg])
                }
            }
        }


        // svg_element.setAttribute("fill-opacity", "0")
        // stroke_it=true
        // if (stroke_it){
        // // svg_element.setAttribute("stroke", "black")
        // svg_element.setAttribute("stroke", 'rgb('+ontology_dict[segmentation_name]['color']+')')

        // svg_element.setAttribute("stroke-width", "5px")
        // // g.setAttribute("stroke-width", "5px")
        // }
        // feather_it=true
        // if (feather_it){
        // var defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

        // var filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
        // filter.setAttribute("id","f1");
        // filter.setAttribute("x","0");
        // filter.setAttribute("y","0");

        // var gaussianFilter = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        // gaussianFilter.setAttribute("in","SourceGraphic");
        // gaussianFilter.setAttribute("stdDeviation",".5"); //REALLY FEATHERY

        // filter.appendChild(gaussianFilter);
        // defs.appendChild(filter);
        // svg_element.appendChild(defs);
        // svg_element.setAttribute("filter","url(#f1)");

        // }





        // svg_element.setAttribute("border", "0")
        // try {
        // var label_str=slice_labels[String(color.r)+","+String(color.g)+","+String(color.b)+","+String(color.a)][3]
        // div_label_display.innerHTML = "Label: "+slice_labels[String(color.r)+","+String(color.g)+","+String(color.b)+","+String(color.a)][0]+" <b>("+slice_labels[String(color.r)+","+String(color.g)+","+String(color.b)+","+String(color.a)][1]+")</b>";
        // div_label_display.style.color  = "rgb("label_info['color']")";

        // }
        // catch(err){

        // div_label_display.style.color='white'
        // label_str='background'
        // div_label_display.style.color='white'
        // div_label_display.innerHTML = label_str
        // }

        // div_label_display.style.color  = "rgb("+String(color.r)+","+String(color.g)+","+String(color.b)+")";
        // div_label_display.innerHTML = label_str;
    }
    try{
        target.style.borderTop="none";
        target.style.borderBottom="none";
        target.style.borderRight="none";
    }
    catch{
        1+1
    }


    var anat_id = ontology_dict[segmentation_name]['anatomical id']
    for (var parent_onto in ontology_MS_full){
        if (ontology_MS_full[parent_onto].includes(anat_id)){
            var current_div=document.getElementById('id_'+parent_onto)
            if (!(current_div.classList.contains("active"))){

                eventFire(document.getElementById('id_'+parent_onto),'click')

            }
        }
        else if (document.getElementById('id_'+parent_onto).classList.contains("active")){
            eventFire(document.getElementById('id_'+parent_onto),'click')
        }
        // document.getElementById('id_'+anat_id).classList.toggle("active")
    }
    target=document.getElementById('id_'+ontology_dict[segmentation_name]['anatomical id'])
    target.style.borderTop="solid thick";
    target.style.borderBottom="solid thick";
    target.style.borderRight="solid thick";
    console.log('CLICKED!')

}


function svg_hovering_simple(segmentation_name_list){

    var [segmentation_name,in_out,svg_element]=segmentation_name_list
    console.log(segmentation_name+ " " +in_out)
    if (!label_window_exists){
        div_label_display = document.createElement("div");
        // div_label_display.id = "label_display_"+number_of_current_divs;
        div_label_display.id = "label_display";
        div_label_display.className = "unselectable";
        div_label_display.addEventListener('contextmenu', event => event.preventDefault());
        // div_label_display.style.background = "transparent";
        div_label_display.style.letterSpacing  = "5px";
        div_label_display.style.background  = 'rgba(255,255,255,.9)';
        div_label_display.style.position = "absolute";
        div_label_display.style.fontWeight   = "normal";
        // div_label_display.style.top     = event.position["y"]
        // div_label_display.style.left    = event.position["x"]
        // div_label_display.style.top     = "90%";

        div_label_display.style.width=parseInt(stack_indicator_line_div.getBoundingClientRect().left)-parseInt(tool_bar_div.style.left)+"px"
        // div_label_display.style.width='25%'
        // div_label_display.style.left    = 0;
        var indicator_rect_=stack_indicator_line_div.getBoundingClientRect();
        div_label_display.style.left    = indicator_rect_.left
        console.log(div_label_display)
        document.body.appendChild(div_label_display);
        // div_label_display.style.top = parseInt(stack_indicator_line_div.style.top)+parseInt(div_label_display.clientHeight)+"px"//(event.clientX-20)+"px"
        // div_label_display.style.top = parseInt(stack_indicator_line_div.style.top)-parseInt(div_label_display.getBoundingClientRect().height)+"px"//(event.clientX-20)+"px"
        // div_label_display.style.top = parseInt(stack_indicator_line_div.style.top)-parseInt(div_label_display.style.height)+"px"//(event.clientX-20)+"px"
        // console.log(div_label_display.getBoundingClientRect())
    }
    if (!(in_out)){
        div_label_display = document.getElementById("label_display").remove()
        label_window_exists=false


        //push abbreviated label back to text label
        var text_label_div=document.getElementById('text_label_'+segmentation_name.replaceAll(" ","_"))
        text_label_div.innerHTML=ontology_dict[segmentation_name]['abv']



        // push_color_to_inside([segmentation_name,svg_element])
        for (var id_ of render_set){
            var segmentation_name_ = id_dict[id_]['segmentation name']
            // if (!(segmentation_name==segmentation_name_)){
            var svegg = global_label_dict[segmentation_name_.replaceAll(' ','_')]
            push_color_to_inside([segmentation_name_,svegg])
            // }
        }


    }


    else{
        var label_info=ontology_dict[segmentation_name]

        label_window_exists=true

        // div_label_display.innerHTML = segmentation_name
        div_label_display.innerHTML = ontology_dict[segmentation_name]['display name']
        div_label_display.style.top = parseInt(stack_indicator_line_div.style.top)-parseInt(div_label_display.getBoundingClientRect().height)+"px"//(event.clientX-20)+"px"

        // div_label_display.innerHTML = "Label: "+segmentation_name
        color_string=label_info['color']
        color_string_front=color_string[0]+","+color_string[1]+","+color_string[2]
        div_label_display.style.color  = "rgb("+color_string_front+")"
        //Get label ID element:
        var text_label_div=document.getElementById('text_label_'+segmentation_name.replaceAll(" ","_"))
        text_label_div.innerHTML=ontology_dict[segmentation_name]['display name']


    }
}




function svg_hovering(segmentation_name_list){

    var [segmentation_name,in_out,svg_element]=segmentation_name_list
    console.log(segmentation_name+ " " +in_out)
    if (!label_window_exists){
        div_label_display = document.createElement("div");
        // div_label_display.id = "label_display_"+number_of_current_divs;
        div_label_display.id = "label_display";
        div_label_display.className = "unselectable";
        div_label_display.addEventListener('contextmenu', event => event.preventDefault());
        // div_label_display.style.background = "transparent";
        div_label_display.style.letterSpacing  = "5px";
        div_label_display.style.background  = 'rgba(255,255,255,.9)';
        div_label_display.style.position = "absolute";
        div_label_display.style.fontWeight   = "normal";
        // div_label_display.style.top     = event.position["y"]
        // div_label_display.style.left    = event.position["x"]
        div_label_display.style.top     = "90%";
        div_label_display.style.width='25%'
        div_label_display.style.left    = 0;
        console.log(div_label_display)
        document.body.appendChild(div_label_display);
    }
    //When you're hovering over nothing, mouse-out event
    if (!(in_out)){
        div_label_display = document.getElementById("label_display").remove()
        label_window_exists=false


        //push abbreviated label back to text label
        var text_label_div=document.getElementById('text_label_'+segmentation_name.replaceAll(" ","_"))
        text_label_div.innerHTML=ontology_dict[segmentation_name]['abv']



        // push_color_to_inside([segmentation_name,svg_element])
        for (var id_ of render_set){
            var segmentation_name_ = id_dict[id_]['segmentation name']
            // if (!(segmentation_name==segmentation_name_)){
            var svegg = global_label_dict[segmentation_name_.replaceAll(' ','_')]
            push_color_to_inside([segmentation_name_,svegg])
            // }
        }
        // svg_element.setAttribute("fill-opacity", ".50")
        // stroke_it=true
        // if (stroke_it){
        // svg_element.setAttribute("stroke", "black")
        // svg_element.setAttribute("stroke-width", ".5px")
        // // g.setAttribute("stroke-width", "5px")
        // }
        // feather_it=true
        // if (feather_it){
        // var defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

        // var filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
        // filter.setAttribute("id","f1");
        // filter.setAttribute("x","0");
        // filter.setAttribute("y","0");

        // var gaussianFilter = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        // gaussianFilter.setAttribute("in","SourceGraphic");
        // gaussianFilter.setAttribute("stdDeviation","2"); //REALLY FEATHERY

        // filter.appendChild(gaussianFilter);
        // defs.appendChild(filter);
        // svg_element.appendChild(defs);
        // svg_element.setAttribute("filter","url(#f1)");

        // }
        // //svg_embed_element.getElementsByTagName('defs')[0]['textContent']
        // //label_group[label_index].getElementsByTagName('path').classList.value
        // // className.baseVal.getElementsByTagName('path')
        // // g.setAttribute("fill", colors[label_index])
        // svg_element.setAttribute("fill", 'rgb('+ontology_dict[segmentation_name]['color']+')')







    }


    else{
        var label_info=ontology_dict[segmentation_name]

        label_window_exists=true

        div_label_display.innerHTML = segmentation_name
        div_label_display.style.top = parseInt(stack_indicator_line_div.style.top)-parseInt(div_label_display.getBoundingClientRect().height)+"px"//(event.clientX-20)+"px"

        // div_label_display.innerHTML = "Label: "+segmentation_name
        color_string=label_info['color']
        color_string_front=color_string[0]+","+color_string[1]+","+color_string[2]
        div_label_display.style.color  = "rgb("+color_string_front+")"
        //Get label ID element:
        var text_label_div=document.getElementById('text_label_'+segmentation_name.replaceAll(" ","_"))
        text_label_div.innerHTML=ontology_dict[segmentation_name]['display name']



        console.log(segmentation_name)
        console.log(ontology_dict[segmentation_name])
        if (document.getElementById('checkbox_'+ontology_dict[segmentation_name]['anatomical id']).checked){
            push_color_to_border([segmentation_name,svg_element])
            for (var id_ of render_set){
                var segmentation_name_ = id_dict[id_]['segmentation name']
                if (!(segmentation_name==segmentation_name_)){
                    var svegg = global_label_dict[segmentation_name_.replaceAll(' ','_')]
                    remove_color([segmentation_name_,svegg])
                }
            }
        }


        // svg_element.setAttribute("fill-opacity", "0")
        // stroke_it=true
        // if (stroke_it){
        // // svg_element.setAttribute("stroke", "black")
        // svg_element.setAttribute("stroke", 'rgb('+ontology_dict[segmentation_name]['color']+')')

        // svg_element.setAttribute("stroke-width", "5px")
        // // g.setAttribute("stroke-width", "5px")
        // }
        // feather_it=true
        // if (feather_it){
        // var defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

        // var filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
        // filter.setAttribute("id","f1");
        // filter.setAttribute("x","0");
        // filter.setAttribute("y","0");

        // var gaussianFilter = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        // gaussianFilter.setAttribute("in","SourceGraphic");
        // gaussianFilter.setAttribute("stdDeviation",".5"); //REALLY FEATHERY

        // filter.appendChild(gaussianFilter);
        // defs.appendChild(filter);
        // svg_element.appendChild(defs);
        // svg_element.setAttribute("filter","url(#f1)");

        // }





        // svg_element.setAttribute("border", "0")
        // try {
        // var label_str=slice_labels[String(color.r)+","+String(color.g)+","+String(color.b)+","+String(color.a)][3]
        // div_label_display.innerHTML = "Label: "+slice_labels[String(color.r)+","+String(color.g)+","+String(color.b)+","+String(color.a)][0]+" <b>("+slice_labels[String(color.r)+","+String(color.g)+","+String(color.b)+","+String(color.a)][1]+")</b>";
        // div_label_display.style.color  = "rgb("label_info['color']")";

        // }
        // catch(err){

        // div_label_display.style.color='white'
        // label_str='background'
        // div_label_display.style.color='white'
        // div_label_display.innerHTML = label_str
        // }

        // div_label_display.style.color  = "rgb("+String(color.r)+","+String(color.g)+","+String(color.b)+")";
        // div_label_display.innerHTML = label_str;
    }
}

function remove_color(segmentation_name_list){
    var [segmentation_name,svg_element]=segmentation_name_list
    // console.log(segmentation_name)
    svg_element.setAttribute("fill", 'rgba('+ontology_dict[segmentation_name]['color']+',0)')

    var text_label_div=document.getElementById('text_label_'+segmentation_name.replaceAll(" ","_"))
    text_label_div.style.color=label_overlay_color_faded
    // svg_element.setAttribute('mask','url(#'+segmentation_name+')');

}

function remove_color_all(segmentation_name_list){
    var [segmentation_name,svg_element]=segmentation_name_list
    // console.log(segmentation_name)
    svg_element.setAttribute("fill", 'rgba('+ontology_dict[segmentation_name]['color']+',0)')

    var text_label_div=document.getElementById('text_label_'+segmentation_name.replaceAll(" ","_"))
    text_label_div.style.color='rgba(0,0,0,0)'

}

function push_color_to_inside(segmentation_name_list){
    var [segmentation_name,svg_element]=segmentation_name_list
    // svg_element=global_label_dict[segmentation_name.replaceAll(" ","_")]
    svg_element.setAttribute("opacity", "1")
    stroke_it=true
    if (stroke_it){
        svg_element.setAttribute("stroke", "black")
        svg_element.setAttribute("stroke-width", ".5px")
        // g.setAttribute("stroke-width", "5px")
    }
    feather_it=true
    if (feather_it){
        var defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

        var filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
        filter.setAttribute("id","f1");
        filter.setAttribute("x","0");
        filter.setAttribute("y","0");

        var gaussianFilter = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        gaussianFilter.setAttribute("in","SourceGraphic");
        gaussianFilter.setAttribute("stdDeviation","2"); //REALLY FEATHERY

        filter.appendChild(gaussianFilter);
        defs.appendChild(filter);
        svg_element.appendChild(defs);
        svg_element.setAttribute("filter","url(#f1)");

    }
    //svg_embed_element.getElementsByTagName('defs')[0]['textContent']
    //label_group[label_index].getElementsByTagName('path').classList.value
    // className.baseVal.getElementsByTagName('path')
    // g.setAttribute("fill", colors[label_index])
    svg_element.setAttribute("fill", 'rgb('+ontology_dict[segmentation_name]['color']+')')
    var text_label_div=document.getElementById('text_label_'+segmentation_name.replaceAll(" ","_"))
    text_label_div.style.color=label_overlay_color
}

function push_color_to_border(segmentation_name_list){
    console.log('this '+segmentation_name_list)
    var [segmentation_name,svg_element]=segmentation_name_list
    console.log('i am inside the function '+segmentation_name)
    console.log('i am inside the function '+svg_element)
    // var svg_element=global_label_dict[segmentation_name.replaceAll(" ","_")]

    svg_element.setAttribute("fill", 'rgba('+ontology_dict[segmentation_name]['color']+',0)')
    stroke_it=true
    if (stroke_it){
        // svg_element.setAttribute("stroke", "black")
        svg_element.setAttribute("stroke", 'rgba('+ontology_dict[segmentation_name]['color']+',.75)')

        svg_element.setAttribute("stroke-width", "10px")
        // g.setAttribute("stroke-width", "5px")
    }
    feather_it=true
    if (feather_it){
        var defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

        var filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
        filter.setAttribute("id","f1");
        filter.setAttribute("x","0");
        filter.setAttribute("y","0");

        var gaussianFilter = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        gaussianFilter.setAttribute("in","SourceGraphic");
        gaussianFilter.setAttribute("stdDeviation","2"); //REALLY FEATHERY

        filter.appendChild(gaussianFilter);
        defs.appendChild(filter);
        svg_element.appendChild(defs);
        svg_element.setAttribute("filter","url(#f1)");

    }
    // svg_element.setAttribute('mask','url(#'+segmentation_name+')');
    // svg_element.setAttribute('style','mix-blend-mode:multiply');
    // svg_element.globalCompositeOperation='destination-out'

}



target=''



function svg_click(segmentation_name){

    try{
        target.style.borderTop="none";
        target.style.borderBottom="none";
        target.style.borderRight="none";
    }
    catch{
        1+1
    }


    var anat_id = ontology_dict[segmentation_name]['anatomical id']
    for (var parent_onto in ontology_MS_full){
        if (ontology_MS_full[parent_onto].includes(anat_id)){
            var current_div=document.getElementById('id_'+parent_onto)
            if (!(current_div.classList.contains("active"))){

                eventFire(document.getElementById('id_'+parent_onto),'click')

            }
        }
        else if (document.getElementById('id_'+parent_onto).classList.contains("active")){
            eventFire(document.getElementById('id_'+parent_onto),'click')
        }
        // document.getElementById('id_'+anat_id).classList.toggle("active")
    }
    target=document.getElementById('id_'+ontology_dict[segmentation_name]['anatomical id'])
    target.style.borderTop="solid thick";
    target.style.borderBottom="solid thick";
    target.style.borderRight="solid thick";
    console.log('CLICKED!')
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return [parseInt(result[1], 16),parseInt(result[2], 16),parseInt(result[3], 16)]
}

//New ontology pop ins


node_list=[]
has_been_placeed=[]


function unique(arr) {
    var u = {}, a = [];
    for(var i = 0, l = arr.length; i < l; ++i){
        if(!u.hasOwnProperty(arr[i])) {
            a.push(arr[i]);
            u[arr[i]] = 1;
        }
    }
    return a;
}

for (var key in ontology_MeeSiing) { //Five of these
    color_the_menu=true
// check if the property/key is defined in the object itself, not in parent
    if (ontology_MeeSiing.hasOwnProperty(key)) {
        Onto_Trunk=ontology_MeeSiing[key]
        console.log("key: "+key)
        //MAJOR MAJOR CATAGORIES -> SHOULD BE FIVE OF THEMs
        trunk_div_id="id_"+key
        trunk_tag=document.createElement('div');
        trunk_tag.className="trunklapse unselectable"
        // trunk_tag.style.maxHeight = trunk_tag.scrollHeight + "px"
        // trunk_tag.style.maxHeight = 50 + "px"
        trunk_tag.id=trunk_div_id

        color_string=id_dict[key]['color']
        // color_string=rgbToHex(fill_color_hex)
        // color_string=full_label_dict[key][2]
        console.log(color_string)


        color_string_front=color_string[0]+","+color_string[1]+","+color_string[2]
        color_string_bg=color_string[0]+","+color_string[1]+","+color_string[2]+","+.1
        trunk_tag.style.color="rgba("+color_string+")"
        // console.log(color_string)
        // trunk_tag.innerHTML="<a>"+trunk_div_id+"</a>"
        // trunk_tag.innerHTML=full_label_dict[key][0]+" ("+key+")"
        trunk_tag.style.backgroundColor="rgba("+color_string_bg+")"
        trunk_tag.style.borderLeft="thin solid rgba("+color_string+")"
        // trunk_tag.innerHTML="<a><span style='color: rgb("+color_string_front+")'>"+full_label_dict[key][0]+" ("+full_label_dict[key][3]+")"+"</span></a><button type='button'>mask</button>"
        //CHECK IF ABV EXISTS
        if (id_dict[key]['abv']==''){
            trunk_tag.innerHTML="<a><span style='color: rgb("+color_string_front+")'>"+id_dict[key]['display name']+"</span></a>"
        }
        else{
            //IF IT DOES, WRITE IT OUT
            trunk_tag.innerHTML="<a><span style='color: rgb("+color_string_front+")'>"+id_dict[key]['display name']+' ('+id_dict[key]['abv']+')'+"</span></a>"
        }
        // var x = document.createElement("BUTTON");
        // var t = document.createTextNode("");



        // trunk_tag
        // trunk_tag.onauxclick  = function(j) { return function() {mask_it(j+''); }; }(trunk_div_id);
        run_functions=false
        if (run_functions){
            trunk_tag.onclick  = function(j) { return function() {label_it(j); }; }(id_dict[key]['display name']);
            // trunk_tag.onclick  = function(j) { return function() {mask_it(j+''); }; }(key);
        }
        all_checkboxes=false
        if (all_checkboxes){
            var x = document.createElement("input");
            x.setAttribute("type", "checkbox")
            x.setAttribute("id", "checkbox_"+key)
            x.style.cssFloat = "right";
            x.style.top = "50%";
            x.style.transform = "translateY(50%)"
            x.onclick  = function(j) { return function() {label_it(j); }; }(key);

            document.getElementById("label_pane2").appendChild(x)
        }
        document.getElementById("label_pane2").appendChild(trunk_tag);

        for (idx_Onto_Trunk in Onto_Trunk){ //tons of of these

            // console.log(idx_Onto_Trunk)
            // console.log(Onto_Trunk[idx_Onto_Trunk])
            // if (document.getElementById("trunk_"+Onto_Trunk[idx_Onto_Trunk])!=null){
            // console.log("THIS SHOULD BE 8")
            // console.log(Onto_Trunk[idx_Onto_Trunk])
            // continue
            // }

            Onto_Branch=Onto_Trunk[idx_Onto_Trunk]
            // console.log("Onto_Branch: "+key+" "+Onto_Branch)
            parent_id=Onto_Branch[0]
            current_Onto_children=Onto_Branch[1]



            //add parent entry



            if (current_Onto_children.length<1){


                // ontology_MeeSiing_full[parent_id].push([parseInt(parent_id),'terminal region',full_label_dict[parent_id][0]])
                // ontology_MeeSiing_full[current_Onto_children]=ontology_MeeSiing_full[key].push(parent_id)
                color_string=id_dict[parent_id]['color']
                if (!(color_the_menu)){color_string='0,0,0'}
                // color_string=rgbToHex(fill_color_hex)
                // color_string=full_label_dict[key][2]
                console.log(color_string)


                color_string_front=color_string[0]+","+color_string[1]+","+color_string[2]
                color_string_bg=color_string[0]+","+color_string[1]+","+color_string[2]+","+.1
                node_div=document.getElementById("id_"+parent_id)

                // node_div.style.backgroundColor="white"
                if(all_checkboxes){

                    node_div.innerHTML="<a><span style='color: rgb("+color_string_front+")'>"+id_dict[parent_id]['display name']+"</span><input type='checkbox' id='checkbox_"+parent_id+"' class='show' style='float: right;'></a>"
                    // node_div.innerHTML="<a><span style='color: rgb("+color_string_front+")'><i>"+id_dict[parent_id]['display name']+"</i></span><input type='checkbox' id='checkbox_"+parent_id+"' class='show' style='float: right;'></a>"
                }
                else{
                    // node_div.innerHTML="<a><span style='color: rgb("+color_string_front+")'>"+id_dict[parent_id]['display name']+' ('+id_dict[parent_id]['abv']+')'+"</span></a>"

                    if (id_dict[parent_id]['abv']=='Dead' || id_dict[parent_id]['abv']=='Deformed'){

                        node_div.innerHTML="<a><span style='color: rgb("+color_string_front+")'>"+id_dict[parent_id]['display name']+"</span></a>"
                        // node_div.innerHTML="<a><span style='color: rgb("+color_string_front+")'>"+id_dict[key]['display name']+"</span></a>"
                    }
                    else{
                        node_div.innerHTML="<a><span style='color: rgb("+color_string_front+")'>"+id_dict[parent_id]['display name']+' ('+id_dict[parent_id]['abv']+')'+"</span></a>"
                    }
                    // node_div.innerHTML="<a><span style='color: rgb("+color_string_front+")'><i>"+id_dict[parent_id]['display name']+"</i>"+' ('+id_dict[parent_id]['abv']+')'+"</span></a>"

                }
                // console.log([slice_pos_dict[parent_id],parent_id])
                // // // if (typeof(slice_pos_dict[parent_id]) == "undefined"){
                // // // // console.log("Label not in URee atlas")
                // // // node_div.onclick  = function(j) { return function() {mask_it(j+''); }; }(parent_id);
                // // // }
                // // // else if(typeof(id_dict[parent_id])!="undefined"){
                // // // // var color_key=full_label_dict[parent_id][2].join(",")
                // // // // Plot_Label()
                // // // // node_div.onmouseover = function(j) { return function() {Plot_Label(j+''); }; }(color_key);
                // // // node_div.onclick  = function(j) { return function() {mask_it(j+''); }; }(parent_id);

                // // // }
                // // // else{
                // // // // node_div.onclick = function(j) { return function() {change_viewer_sample_label(j); }; }([slice_pos_dict[parent_id],parent_id]);
                // // // node_div.onclick  = function(j) { return function() {mask_it(j+''); }; }(parent_id);

                // // // }


                //add terminal label to parent entry



                // ontology_MeeSiing_full[key].push(parent_id)
                // node_div.onmouseover = function(j) { return function() {shopping_aisle_preview(j+''); }; }(5); //MAKE THIS PREVIEW THE DIV YOU WILL TRAVEL TO.

                // node_div.className.toggle("")
                // node_div.className.toggle("")
                // node_div.style.color="red"
                // console.log("rgba("+full_label_dict[parent_id][2]+")")
                // node_div.style.borderStyle="solid rgba("+color_string+")"
                // node_div.style.borderStyle="solid"
                // node_div.style.borderWidth="thin"
                // node_div.style.borderColor="rgba("+color_string+")"
                // console.log(node_div)
                // console.log(parent_id)
                //do special formatting and stuff
            }
            else{
                for (idx_Onto_Nodes in current_Onto_children){
                    // console.log(current_Onto_children[idx_Onto_Nodes])
                    current_Onto_Branch=current_Onto_children[idx_Onto_Nodes]

                    // console.log(current_Onto_children)
                    branch_div_id="id_"+current_Onto_Branch

                    branch_tag=document.createElement('div');
                    branch_tag.className="collapsible unselectable"
                    branch_tag.id=branch_div_id
                    color_string=id_dict[current_Onto_Branch]['color']
                    if (!(color_the_menu)){color_string='0,0,0'}
                    // color_string=rgbToHex(fill_color_hex)
                    // color_string=full_label_dict[key][2]
                    console.log(color_string)


                    color_string_front=color_string[0]+","+color_string[1]+","+color_string[2]
                    color_string_bg=color_string[0]+","+color_string[1]+","+color_string[2]+","+.1
                    // branch_tag.style.color="blue"
                    branch_tag.style.color="rgba("+color_string+")"
                    // // branch_tag.style.backgroundColor="rgba("+color_string_bg+")"
                    branch_tag.style.backgroundColor="rgba(200,200,200,.5)"
                    // branch_tag.style.borderTop="thin solid rgba("+color_string+")"
                    branch_tag.style.borderLeft="thin solid"
                    branch_tag.style.borderLeftColor="rgba("+color_string+") transparent"
                    branch_tag.style.padding ="0 0 0 20px"
                    // branch_tag.innerHTML=branch_div_id
                    // branch_tag.innerHTML="<a>"+branch_div_id+"</a>"
                    // console.log("<a><span style='color: rgb("+color_string_front+")'>v")
                    // branch_tag.innerHTML="<a><span style='color: rgb("+color_string_front+")'><u>"+full_label_dict[current_Onto_Branch][0]+" ("+full_label_dict[current_Onto_Branch][3]+")"+"</u></span></a>"


                    if (all_checkboxes){
                        branch_tag.innerHTML="<a><span style='color: rgb("+color_string_front+")'><u>"+id_dict[current_Onto_Branch]['display name']+"</u></span><input type='checkbox' id='checkbox_"+current_Onto_Branch+"' class='show' style='float: right;'></a>"
                    }
                    else{
                        //check if abv exists
                        if (id_dict[current_Onto_Branch]['abv']==''){

                            branch_tag.innerHTML="<a><span style='color: rgb("+color_string_front+")'><u>"+id_dict[current_Onto_Branch]['display name']+"</u></a>"
                        }
                        else{
                            if (id_dict[current_Onto_Branch]['abv']=='Dead' || id_dict[key]['abv']=='Deformed'){
                                branch_tag.innerHTML="<a><span style='color: rgb("+color_string_front+")'><u>"+id_dict[current_Onto_Branch]['display name']+"</u></a>"}

                            else{
                                branch_tag.innerHTML="<a><span style='color: rgb("+color_string_front+")'><u>"+id_dict[current_Onto_Branch]['display name']+' ('+id_dict[current_Onto_Branch]['abv']+')'+"</u></a>"
                            }
                        }
                    }

                    //<input type='checkbox' id='checkbox_"+current_Onto_Branch+"' class='show' style='float: right;'></a>
                    //in case a parent label is actually has a region to highlight that is present (example, LH)
                    if(typeof(id_dict[current_Onto_Branch])!="undefined"){
                        // console.log(label_by_ID[current_Onto_Branch])
                        // var color_key=full_label_dict[current_Onto_Branch][2].join(",")
                        // Plot_Label()
                        // branch_tag.onmouseover = function(j) { return function() {Plot_Label(j+''); }; }(color_key);
                        if (run_functions){
                            branch_tag.onclick  = function(j) { return function() {label_it(j); }; }(id_dict[current_Onto_Branch]['display name']);
                            // branch_tag.onclick  = function(j) { return function() {mask_it(j+''); }; }(current_Onto_Branch);
                        }

                    }
                    // var x = document.createElement("input");
                    // x.setAttribute("type", "checkbox")
                    // x.setAttribute("id", "checkbox_"+current_Onto_Branch)
                    // x.style.cssFloat = "right";
                    // aTag=branch_tag.getElementsByTagName("a")
                    // console.log(aTag)
                    // branch_tag.appendChild(x)
                    // x.style.top = "50%";
                    // x.style.transform = "translateY(50%)"

                    document.getElementById("id_"+parent_id).appendChild(branch_tag);
                    if (run_functions){
                        branch_tag.onclick  = function(j) { return function() {label_it(j); }; }(id_dict[current_Onto_Branch]['display name']);
                        // branch_tag.onclick  = function(j) { return function() {mask_it(j+''); }; }(current_Onto_Branch);
                    }

                    //add grouped terminal label to parent entry


                    // ontology_MeeSiing_full[current_Onto_Branch]=current_Onto_Branch
                    // ontology_MeeSiing_full[key].push(current_Onto_Branch)
                    // ontology_MeeSiing_full[parent_id].push(current_Onto_Branch)


                }
            }

            // // if (node_list.includes("node_"+current_Onto_Branch) && current_Onto_Nodes.length>0){  //test if node div exists, if yes - over-write node div in position on ontology list - next match the following labels to the same div.
            // // replace_node_with_branch=document.getElementById("node_"+current_Onto_Branch)
            // // branch_div_id="branch_"+current_Onto_Branch
            // // replace_node_with_branch.className="trunklapse"
            // // replace_node_with_branch.id=branch_div_id
            // // // replace_node_with_branch.innerHTML="<a>"+branch_div_id+"REPLACED</a>"
            // // // replace_node_with_branch.innerHTML=branch_div_id+"REPLACED"
            // // replace_node_with_branch.innerHTML="<a><span style='color:rgb(255,0,0)'>"+branch_div_id+"REPLACED"+"</span></a>"
            // // // replace_node_with_branch.style.color="red"
            // // // document.getElementById(trunk_div_id).appendChild(branch_tag);
            // // // console.log("Write this to insert value")
            // // // console.log(node_list)
            // // // console.log(current_Onto_Branch)


            // // // branch_div_id="branch_"+current_Onto_Branch
            // // // branch_tag=document.createElement('div');
            // // // branch_tag.className="trunklapse"
            // // // branch_tag.id=branch_div_id
            // // // branch_tag.innerHTML=branch_div_id
            // // // document.getElementById(trunk_div_id).appendChild(branch_tag);
            // // }

            // // else{ //regular node
            // // for (idx_Onto_Nodes in current_Onto_Nodes){
            // // console.log("WHAT I GOINGNGAOUDFB")
            // // Onto_Node=current_Onto_Nodes[idx_Onto_Nodes]
            // // console.log(Onto_Node)
            // // // node_tag=document.createElement('div');

            // // node_div_id="node_"+Onto_Node
            // // node_tag=document.createElement('div');
            // // node_tag.className="trunklapse"
            // // node_tag.id=node_div_id
            // // node_tag.style.color="blue"
            // // // node_tag.innerHTML="<a>"+node_div_id+"</a>"
            // // node_tag.innerHTML="node_div_id"
            // // document.getElementById(branch_div_id).appendChild(node_tag);
            // // // console.log(div_id)
            // // node_list.push(node_div_id) //feedback for duplicate nodes that are actually branches.
            // // }
            // //
            // // }

        }

    }

}



//METADATA PARSER:
trunk_div_id="Metadata"
trunk_tag=document.createElement('div');
trunk_tag.className="trunklapse unselectable"
// trunk_tag.style.maxHeight = trunk_tag.scrollHeight + "px"
// trunk_tag.style.maxHeight = 50 + "px"
trunk_tag.id=trunk_div_id
color_string_front="255,255,255"
color_string_bg="255,255,255,.1"
trunk_tag.style.color="rgba("+color_string+")"
// console.log(color_string)
// trunk_tag.innerHTML="<a>"+trunk_div_id+"</a>"
// trunk_tag.innerHTML=full_label_dict[key][0]+" ("+key+")"
trunk_tag.style.backgroundColor="rgba("+color_string_bg+")"
trunk_tag.style.borderLeft="thin solid rgba("+color_string+")"
// trunk_tag.innerHTML="<a><span style='color: rgb("+color_string_front+")'>"+full_label_dict[key][0]+" ("+full_label_dict[key][3]+")"+"</span></a><button type='button'>mask</button>"
//CHECK IF ABV EXISTS
trunk_tag.innerHTML="<a><span style='color: rgb("+color_string_front+")'>"+trunk_div_id+"</span></a>"
run_functions=false
if (run_functions){
    trunk_tag.onclick  = function(j) { return function() {label_it(j); }; }(id_dict[key]['display name']);
    // trunk_tag.onclick  = function(j) { return function() {mask_it(j+''); }; }(key);
}
document.getElementById("label_pane2").appendChild(trunk_tag);




metadata_dict={
    'Transverse_3dpf':{'name':'3dpf'},
    'Coronal_3dpf':{'name':'3dpf'},
    'Sagittal_3dpf':{'name':'3dpf'},
    'sagittal_female':{'name':'21-day old'},
    'coronal_female':{'name':'18-day old','desc':'carrying stage 4 developing embryos'},
    'transverse_female':{'name':'11-day old','desc':'carrying stage 1 developing embryos'},
    'sagittal_male':{'name':'12-day old'},
    'coronal_male':{'name':'12-day old'},
    'transverse_male':{'name':'15-day old'},
    'coronal_female_59':{'name':'18-day old','desc':'carrying stage 4 developing embryos'},
    'sagittal_female_64':{'name':'15-day old','desc':'carrying stage 4 developing embryos'},
    'transverse_female_57':{'name':'12-day old','desc':'carrying stage 1 developing embryos'},
    'sagittal_female_ephippium_16':{'name':'15-day old'},
    'sagittal_female_resting_egg_17':{'name':'12-day old'},
    'coronal_male_59':{'name':'12-day old'},
    'sagittal_male_37':{'name':'12-day old'},
    'transverse_male_88':{'name':'15-day old'},
    'AAA392':{'name':'9-day old','desc':'carrying stage 1 developing embryos'}
}


if (treatment_loadin=='sagittal_female_common_pain_reliever'){

    document.getElementById('Metadata').innerHTML=document.getElementById('Metadata').innerHTML.replace('Metadata','Histopathology')

///MD ENTRY 1
    branch_div_id="Deadembryo"
    branch_info='Dead embryo'
    branch_tag=document.createElement('div');
    branch_tag.className="collapsible unselectable"
    branch_tag.id=branch_div_id
    color_string_front="255,255,255"
    color_string_bg="255,255,255,.1"
    branch_tag.style.color="rgba("+color_string+")"
    branch_tag.style.backgroundColor="rgba(200,200,200,.5)"
    branch_tag.style.borderLeft="thin solid"
    branch_tag.style.borderLeftColor="rgba("+color_string+") transparent"
    branch_tag.style.padding ="0 0 0 20px"
    if (all_checkboxes){
        branch_tag.innerHTML="<a href='http://daphnia.io/anatomy/histology/?t=sagittal_female_common_pain_reliever&z=4&c=0.511478101654764,0.7016987123162622,0.37324799999999986,0.25156141864716625' target='_blank'><span style='color: rgb("+color_string_front+")'><u>"+id_dict[current_Onto_Branch]['display name']+"</u></span><input type='checkbox' id='checkbox_"+current_Onto_Branch+"' class='show' style='float: right;'></a>"
    }

    branch_tag.innerHTML="<a href='http://daphnia.io/anatomy/histology/?t=sagittal_female_common_pain_reliever&z=4&c=0.511478101654764,0.7016987123162622,0.37324799999999986,0.25156141864716625' target='_blank'><span style='color: rgb("+color_string_front+")'>"+branch_info+"</span></a>"

    document.getElementById('Metadata').appendChild(branch_tag);



///MD ENTRY 2
    branch_div_id="Deformedembryo"
    branch_info='Deformed embryo'
    branch_hover_text='no visible development of the swimming antennae and thoracic limbs'
    branch_tag=document.createElement('div');
    branch_tag.className="collapsible unselectable"
    branch_tag.id=branch_div_id
    branch_tag.title=branch_hover_text
    color_string_front="255,255,255"
    color_string_bg="255,255,255,.1"
    branch_tag.style.color="rgba("+color_string+")"
    branch_tag.style.backgroundColor="rgba(200,200,200,.5)"
    branch_tag.style.borderLeft="thin solid"
    branch_tag.style.borderLeftColor="rgba("+color_string+") transparent"
    branch_tag.style.padding ="0 0 0 20px"
    if (all_checkboxes){
        branch_tag.innerHTML="<a href='http://daphnia.io/anatomy/histology/?t=sagittal_female_common_pain_reliever&z=12&c=0.4087408018370102,0.646248997437749,0.5374771199999997,0.3622484428519193' target='_blank'><span style='color: rgb("+color_string_front+")'><u>"+id_dict[current_Onto_Branch]['display name']+"</u></span><input type='checkbox' id='checkbox_"+current_Onto_Branch+"' class='show' style='float: right;'></a>"
    }

    branch_tag.innerHTML="<a href='http://daphnia.io/anatomy/histology/?t=sagittal_female_common_pain_reliever&z=12&c=0.4087408018370102,0.646248997437749,0.5374771199999997,0.3622484428519193' target='_blank'><span style='color: rgb("+color_string_front+")'>"+branch_info+"</span></a>"

    document.getElementById('Metadata').appendChild(branch_tag);




///MD ENTRY 3
    branch_div_id="Sloughing"
    branch_info='Sloughing of epithelial cells'
    branch_hover_text='sloughing of gut epithelial cells'
    branch_tag=document.createElement('div');
    branch_tag.className="collapsible unselectable"
    branch_tag.id=branch_div_id
    branch_tag.title=branch_hover_text
    color_string_front="255,255,255"
    color_string_bg="255,255,255,.1"
    branch_tag.style.color="rgba("+color_string+")"
    branch_tag.style.backgroundColor="rgba(200,200,200,.5)"
    branch_tag.style.borderLeft="thin solid"
    branch_tag.style.borderLeftColor="rgba("+color_string+") transparent"
    branch_tag.style.padding ="0 0 0 20px"
    if (all_checkboxes){
        branch_tag.innerHTML="<a href='http://daphnia.io/anatomy/histology/?t=sagittal_female_common_pain_reliever&z=4&c=0.4554444824651701,0.2605877014851312,0.3110399999999998,0.20963451553930518' target='_blank'><span style='color: rgb("+color_string_front+")'><u>"+id_dict[current_Onto_Branch]['display name']+"</u></span><input type='checkbox' id='checkbox_"+current_Onto_Branch+"' class='show' style='float: right;'></a>"
    }

    branch_tag.innerHTML="<a href='http://daphnia.io/anatomy/histology/?t=sagittal_female_common_pain_reliever&z=4&c=0.4554444824651701,0.2605877014851312,0.3110399999999998,0.20963451553930518' target='_blank'><span style='color: rgb("+color_string_front+")'>"+branch_info+"</span></a>"

    document.getElementById('Metadata').appendChild(branch_tag);



///MD ENTRY 4
    branch_div_id="Vacuoles_gut"
    branch_info='Vacuoles (gut)'
    branch_hover_text='vacuoles in midgut and hindgut'
    branch_tag=document.createElement('div');
    branch_tag.className="collapsible unselectable"
    branch_tag.id=branch_div_id
    branch_tag.title=branch_hover_text
    color_string_front="255,255,255"
    color_string_bg="255,255,255,.1"
    branch_tag.style.color="rgba("+color_string+")"
    branch_tag.style.backgroundColor="rgba(200,200,200,.5)"
    branch_tag.style.borderLeft="thin solid"
    branch_tag.style.borderLeftColor="rgba("+color_string+") transparent"
    branch_tag.style.padding ="0 0 0 20px"
    if (all_checkboxes){
        branch_tag.innerHTML="<a href='http://daphnia.io/anatomy/histology/?t=sagittal_female_common_pain_reliever&z=4&c=0.4554444824651701,0.2605877014851312,0.3110399999999998,0.20963451553930518' target='_blank'><span style='color: rgb("+color_string_front+")'><u>"+id_dict[current_Onto_Branch]['display name']+"</u></span><input type='checkbox' id='checkbox_"+current_Onto_Branch+"' class='show' style='float: right;'></a>"
    }

    branch_tag.innerHTML="<a href='http://daphnia.io/anatomy/histology/?t=sagittal_female_common_pain_reliever&z=4&c=0.4554444824651701,0.2605877014851312,0.3110399999999998,0.20963451553930518' target='_blank'><span style='color: rgb("+color_string_front+")'>"+branch_info+"</span></a>"

    document.getElementById('Metadata').appendChild(branch_tag);


// Vacuoles in labral gland cells

///MD ENTRY 6
    branch_div_id="Vacuoles_lab"
    branch_info='Vacuoles (gland cells)'
    branch_hover_text='Vacuoles in labral gland cells'
    branch_tag=document.createElement('div');
    branch_tag.className="collapsible unselectable"
    branch_tag.id=branch_div_id
    branch_tag.title=branch_hover_text
    color_string_front="255,255,255"
    color_string_bg="255,255,255,.1"
    branch_tag.style.color="rgba("+color_string+")"
    branch_tag.style.backgroundColor="rgba(200,200,200,.5)"
    branch_tag.style.borderLeft="thin solid"
    branch_tag.style.borderLeftColor="rgba("+color_string+") transparent"
    branch_tag.style.padding ="0 0 0 20px"
    if (all_checkboxes){
        branch_tag.innerHTML="<a href='http://daphnia.io/anatomy/histology/?t=sagittal_female_common_pain_reliever&z=7&c=0.3503144688688774,0.3300071983442797,0.17999999999999997,0.12131627056672757' target='_blank'><span style='color: rgb("+color_string_front+")'><u>"+id_dict[current_Onto_Branch]['display name']+"</u></span><input type='checkbox' id='checkbox_"+current_Onto_Branch+"' class='show' style='float: right;'></a>"
    }

    branch_tag.innerHTML="<a href='http://daphnia.io/anatomy/histology/?t=sagittal_female_common_pain_reliever&z=7&c=0.3503144688688774,0.3300071983442797,0.17999999999999997,0.12131627056672757' target='_blank'><span style='color: rgb("+color_string_front+")'>"+branch_info+"</span></a>"

    document.getElementById('Metadata').appendChild(branch_tag);



///MD ENTRY 5
    branch_div_id="Vacuoles_fat"
    branch_info='Vacuolated fat cells'
    branch_hover_text=''
    branch_tag=document.createElement('div');
    branch_tag.className="collapsible unselectable"
    branch_tag.id=branch_div_id
// branch_tag.title=branch_hover_text
    color_string_front="255,255,255"
    color_string_bg="255,255,255,.1"
    branch_tag.style.color="rgba("+color_string+")"
    branch_tag.style.backgroundColor="rgba(200,200,200,.5)"
    branch_tag.style.borderLeft="thin solid"
    branch_tag.style.borderLeftColor="rgba("+color_string+") transparent"
    branch_tag.style.padding ="0 0 0 20px"
    if (all_checkboxes){
        branch_tag.innerHTML="<a href='http://daphnia.io/anatomy/histology/?t=sagittal_female_common_pain_reliever&z=4&c=0.3691798334670032,0.9335397596731176,0.17999999999999997,0.12131627056672757' target='_blank'><span style='color: rgb("+color_string_front+")'><u>"+id_dict[current_Onto_Branch]['display name']+"</u></span><input type='checkbox' id='checkbox_"+current_Onto_Branch+"' class='show' style='float: right;'></a>"
    }

    branch_tag.innerHTML="<a href='http://daphnia.io/anatomy/histology/?t=sagittal_female_common_pain_reliever&z=4&c=0.3691798334670032,0.9335397596731176,0.17999999999999997,0.12131627056672757' target='_blank'><span style='color: rgb("+color_string_front+")'>"+branch_info+"</span></a>"

    document.getElementById('Metadata').appendChild(branch_tag);





}

else{
///MD ENTRY 1
    branch_div_id="sample_name"
    branch_info=metadata_dict[treatment_loadin]['name']
    branch_tag=document.createElement('div');
    branch_tag.className="collapsible unselectable"
    branch_tag.id=branch_div_id
    color_string_front="255,255,255"
    color_string_bg="255,255,255,.1"
    branch_tag.style.color="rgba("+color_string+")"
    branch_tag.style.backgroundColor="rgba(200,200,200,.5)"
    branch_tag.style.borderLeft="thin solid"
    branch_tag.style.borderLeftColor="rgba("+color_string+") transparent"
    branch_tag.style.padding ="0 0 0 20px"
    if (all_checkboxes){
        branch_tag.innerHTML="<a><span style='color: rgb("+color_string_front+")'><u>"+id_dict[current_Onto_Branch]['display name']+"</u></span><input type='checkbox' id='checkbox_"+current_Onto_Branch+"' class='show' style='float: right;'></a>"
    }

    branch_tag.innerHTML="<a><span style='color: rgb("+color_string_front+")'>"+branch_info+"</span></a>"

    document.getElementById('Metadata').appendChild(branch_tag);

    if ('desc' in metadata_dict[treatment_loadin]){
///MD ENTRY 2
        branch_div_id="sample_desc"
        branch_info=metadata_dict[treatment_loadin]['desc']
        branch_tag=document.createElement('div');
        branch_tag.className="collapsible unselectable"
        branch_tag.id=branch_div_id
        color_string_front="255,255,255"
        color_string_bg="255,255,255,.1"
        branch_tag.style.color="rgba("+color_string+")"
        branch_tag.style.backgroundColor="rgba(200,200,200,.5)"
        branch_tag.style.borderLeft="thin solid"
        branch_tag.style.borderLeftColor="rgba("+color_string+") transparent"
        branch_tag.style.padding ="0 0 0 20px"
        if (all_checkboxes){
            branch_tag.innerHTML="<a><span style='color: rgb("+color_string_front+")'><u>"+id_dict[current_Onto_Branch]['display name']+"</u></span><input type='checkbox' id='checkbox_"+current_Onto_Branch+"' class='show' style='float: right;'></a>"
        }

        branch_tag.innerHTML="<a><span style='color: rgb("+color_string_front+")'>"+branch_info+"</span></a>"

        document.getElementById('Metadata').appendChild(branch_tag);
    }

}









// document.getElementById('id_0').classList.toggle("active");
function eventFire(el, etype){
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
    }
}




























// // // // for (key in id_dict){
// // // // if (!(key == 0)){
// // // // if (id_dict.hasOwnProperty(key)) {

// // // // var div_click = document.getElementById("checkbox_"+key)

// // // // div_click.onclick=null;
// // // // // div_click.onclick  = function(j) { return function() {label_it(j); }; }({'key':key,'texture':texture,'masked_volume':volume.data,'img':volume2,'allen':allen_labels_volume,'scene':scene,'camera':camera,'renderer':renderer});
// // // // div_click.onclick  = function(j) { return function() {label_it(j); }; }(key);
// // // // }
// // // // }
// // // // }















//Misc Functions
function mode(array){
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}

function shopping_aisle_preview(event,clicked){

    var indicator_rect=stack_indicator_line_div.getBoundingClientRect();
    var shopping_aisle_preview_rect=shopping_aisle_preview_div.getBoundingClientRect();
    var shopping_aisle_preview_div_width=shopping_aisle_preview_div.clientWidth;



    //Handler for which backgroundImage to use:
    //Find length of indicator bar, find % into bar mouse is located, apply to stack fraction
    var left_end = indicator_rect.left
    var right_end = indicator_rect.right
    var stack_fraction = (event.clientX-left_end)/(right_end-left_end)
    var current_fraction = sample_idx/available_samples.length
    // //use this new index for background preview
    // subset_url_zoom = eval("images_"+last_slice_selected)[preview_idx].substring(eval("images_"+last_slice_selected)[preview_idx].indexOf("/") + 1);
    // subset_url_zoom = subset_url_zoom.substring(subset_url_zoom.indexOf("/") + 1);
    // shopping_aisle_preview_div.style.backgroundImage = "url("+"assets/"+subset_url_zoom+")"

    //The offset of the zoom window messes with the xpos of clientX for some reason..... So just subtract that offset (window.innerheight...)
    shopping_aisle_preview_div.style.top = parseInt(stack_indicator_line_div.style.top)-parseInt(shopping_aisle_preview_div.clientHeight)-25+"px"//(event.clientX-20)+"px"

    // //To mirror mouse localtion
    // shopping_aisle_preview_div.style.left=(event.clientX-shopping_aisle_preview_div_width/2)+"px"
    shopping_aisle_preview_div.style.left=((indicator_rect.right-indicator_rect.left)-shopping_aisle_preview_div_width/2)+"px"

    //Event handler feeds in here (located in function that brings zoom overlay up
    //Most of this is reused code from function that brings zoom overlay up

    //Place Preview location onto aisle preview
    // preview_location_div.style.top=shopping_aisle_preview_rect.top;
    preview_location_div.style.top = parseInt(stack_indicator_line_div.style.top)-parseInt(shopping_aisle_preview_div.clientHeight)-25+1+"px"
    current_location.style.top = parseInt(stack_indicator_line_div.style.top)-parseInt(shopping_aisle_preview_div.clientHeight)-25+1+"px"
    // preview_location_div.style.right="0";

    preview_location_div.style.left=shopping_aisle_preview_rect.left+(stack_fraction*(shopping_aisle_preview_rect.right-shopping_aisle_preview_rect.left))+"px";
    current_location.style.left=shopping_aisle_preview_rect.left+(current_fraction*(shopping_aisle_preview_rect.right-shopping_aisle_preview_rect.left))+"px";

    // console.log(shopping_aisle_preview_rect.left)
    // console.log(shopping_aisle_preview_rect.right)
    // console.log(stack_fraction)

    console.log(sample_idx)
    // shopping_aisle_preview_div.style.backgroundImage = "url("+"assets/OTR/"+subset_url_zoom+")"
    shopping_aisle_preview_div.style.backgroundImage = "url('../../EC2_payloads/from_EC2/"+treatment_loadin+"/"+""+Math.round((available_samples.length-1)*stack_fraction).toString().padStart(3, "0")+"_files"+"/8/0_0.jpeg')"
    // shopping_aisle_preview_div.style.backgroundImage = "url('../../EC2_payloads/from_EC2/"+treatment_loadin+"/"+available_samples[sample_idx]+"_files"+"/8/0_0.jpeg')"
    console.log(shopping_aisle_preview_div)
    if (event.buttons){
        sample_idx = Math.round((available_samples.length-1)*stack_fraction)

        console.log("STACK FRACTION:")
        console.log(stack_fraction)
        console.log("SAMPLE IDX:")
        console.log(sample_idx)
        console.log(viewer.tileSources)
        console.log(event.buttons)
        //replaces current view with prewview index, set to same OSD viewport bounds
        var zoom_box=viewer.viewport.getBounds(true);

        viewer.close()

        viewer.open({
            // tileSource: "../assets/image_repository/"+available_samples[sample_idx]+".dzi"
            tileSource: "../../../assets/EC2/output/anatomical_reference_histology_zf/"+treatment_loadin+"/"+available_samples[sample_idx]+".dzi",
            // tileSource: "./"+available_samples[sample_idx]+".dzi",
        })
        viewer.addHandler('open', function() {
            viewer.viewport.fitBounds(zoom_box, true); //(the true part makes it snap/animate immediately, no transition time!!!)
            console.log(zoom_box)
            console.log("FIT THAT SUCKER")

            // summon_carusel()
        });
        // console.log("Current slice #: "+current_slice_number)
        // console.log("Current slice idx: "+preview_idx)
        // //reverse slice handler - propegates new slice index to the viewer
        // if (last_slice_selected=="sagittal"){
        // i=preview_idx
        // }
        // if (last_slice_selected=="coronal"){
        // j=preview_idx
        // }
        // if (last_slice_selected=="transverse"){
        // k=preview_idx
        // }	download
        div_slice_idx_display.innerHTML    = (sample_idx+1)+"/"+available_samples.length+"<br><a style='color:gray;font-size:7px;'>"+available_samples[sample_idx]+"</a><br><span style='font-size:12px'>Downloads<\span><br><a style='color:white; font-size:12px' href='"+svg_url+"' target='_blank'>vector file (1MB .svg)<\a>";
        // div_slice_idx_display.innerHTML    = (sample_idx+1)+"/"+available_samples.length+"<br><a style='color:gray;font-size:7px;'>"+available_samples[sample_idx]+"</a><br><span style='font-size:12px'>Downloads<\span><br><a style='color:white; font-size:12px' href='"+svg_url+"' target='_blank'>vector file (1MB .svg)<\a>";

    }
    tool_bar_div.style.height = "50 px"
    tool_bar_div.style.position = "absolute";
    tool_bar_div_width=tool_bar_div.clientWidth;
    var indicator_rect_=stack_indicator_line_div.getBoundingClientRect();
    // tool_bar_div.style.top = parseInt(stack_indicator_line_div.style.top)-parseInt(tool_bar_div.clientHeight)-25+"px"//(event.clientX-20)+"px"
    tool_bar_div.style.top = parseInt(stack_indicator_line_div.style.top)-parseInt(button_leftright_div.clientHeight)+"px"//(event.clientX-20)+"px"
    tool_bar_div.style.left = ((indicator_rect_.right-indicator_rect_.left)-tool_bar_div_width/2)+"px"
    //
}


function redirect_carousel_sample(){

    // viewer1.close()
    // viewer1.open({
    // // tileSource: "../assets/image_repository/"+available_samples[sample_idx]+".dzi"
    // tileSource: "../../../assets/EC2/output/anatomical_reference_histology_zf/"+treatment_loadin+"/"+available_samples[sample_idx]+".dzi",
    // // tileSource: "./"+available_samples[sample_idx]+".dzi",
    // })
    buffer_carusel()
    console.log('carusel left right clicked, naving to this sample_idx: ',sample_idx)

    if (sample_idx>1){
        var tiledImage = viewer1.world.getItemAt(carusel_rendered_already[sample_idx][1]);
    }
    else{
        var tiledImage = viewer1.world.getItemAt(carusel_rendered_already[sample_idx][1]);
    }

    try{
        var imageBounds = tiledImage.getBounds();
        viewer1.viewport.fitBounds(imageBounds)
    }
    catch{
        console.log('new 10 slice my dude')
    }
    // var imageAspect = imageBounds.width / imageBounds.height;
    // var aspectFactor = imageAspect / viewer1.viewport.getAspectRatio();
    // var newHomeZoom = (aspectFactor >= 1 ? 1 : aspectFactor) / imageBounds.width;
    // viewer1.viewport.zoomTo(newHomeZoom, null, true);
    // console.log("new home zoom is "+newHomeZoom)
    // console.log(newHomeZoom)

}

function buffer_carusel(){
    // dzi_render_array_index=Array.from(new Array(11), (x, i) => i + (sample_idx-5));
    dzi_render_array_index=Array.from(new Array(available_samples.length), (x, i) => i);
    console.log(dzi_render_array_index)
    for (var index_ in dzi_render_array_index){
        var dataset_index=dzi_render_array_index[index_]
        if (dataset_index>=0 && dataset_index<available_samples.length){
            if (carusel_rendered_already[dataset_index]){
                console.log("tilesource already rendered no need to add to viewer")


                // console.log(carusel_rendered_already[dataset_index])
            }
            else{

                v_image_idx=Object.keys(carusel_rendered_already).length

                carusel_rendered_already[dataset_index]=[available_carusel[dataset_index],v_image_idx]

                viewer1.addTiledImage({
                    tileSource:available_carusel[dataset_index],
                    success:function(data) {
                        image=data.item
                        // dzi_index=parseInt(image.source.tilesUrl.split("/")[image.source.tilesUrl.split("/").length-2].split("_")[0])
                        var _source=image.source.tilesUrl.split("/")[image.source.tilesUrl.split("/").length-2]
                        dzi_index=_source.slice(0,_source.length-6)
                        dzi_index=treatment_samples_dict[dzi_index][1]

                        console.log(dzi_index + " : " + _source)
                        // var image=viewer1.world.getItemAt(v_image_idx)
                        // console.trace(image)

                        dataset_index=dzi_index
                        image.index=dzi_index;

                        image_bounds=image.getBounds()
                        // img_width=image_bounds.width

                        var pos = new OpenSeadragon.Point(0, 0);
                        // pos.x = dataset_index * img_width + (dataset_index * 256)
                        pos.x = dataset_index * img_width + (dataset_index * margin_)
                        // pos.x = dataset_index * img_width + margin_
                        pos.y = image_bounds['y']
                        image.setPosition(pos, true)
                        image_bounds=image.getBounds()
                        // console.log(image_bounds)
                        // // pos.x += image.getBounds().width;
                        // // pos.x += max_width*1.25;
                        // pos.x += max_width;
                        // if ((i+1)%rows==0) {
                        // console.log("next row")
                        // pos.x = 0;
                        // // pos.y += image.getBounds().height;
                        // // pos.y += max_height*1.25;
                        // pos.y += max_height;
                        // // console.log(image.getBounds().height)
                        // }
                        // console.log(overlay_x)

                        // proxy_i=available_carusel.indexOf(available_carusel[dataset_index])
                        proxy_i=dataset_index
                        var elt = document.createElement("div");
                        elt.id = "example-overlay"+proxy_i;
                        elt.className = "highlight";
                        elt.style.cursor = "pointer";
                        // elt.innerHTML=inset_ID_overlay_array[i]+". "+treatment_array[i]
                        // elt.innerHTML=name_convention[i]
                        elt.innerHTML="<span>"+(proxy_i)+'/'+available_carusel.length+"</span>"
                        // elt.innerHTML="test"
                        var tracker = new OpenSeadragon.MouseTracker({
                            element: elt,
                            clickHandler: function(j) { return function() {change_viewer_sample_carousel(j+''); }; }(proxy_i-1)
                        });

                        viewer1.addOverlay({
                            element: elt,
                            // location: new OpenSeadragon.Rect(viewportPoint["x"]-label_width/2,viewportPoint["y"]-label_height/2, label_width, label_height), //PULL THESE SIZES FROM THE MIN ENCLOSING CANVAS CALL
                            // location: new OpenSeadragon.Rect(overlay_x,overlay_y,overlay_x+img_dims['x'],overlay_y+img_dims['y']), //PULL THESE SIZES FROM THE MIN ENCLOSING CANVAS CALL
                            location: new OpenSeadragon.Rect(image_bounds['x'],image_bounds['y'],image_bounds['width'],image_bounds['height']), //PULL THESE SIZES FROM THE MIN ENCLOSING CANVAS CALL
                            // location: image_bounds, //PULL THESE SIZES FROM THE MIN ENCLOSING CANVAS CALL
                            // location: new OpenSeadragon.Rect(overlay_x,overlay_y,overlay_x,overlay_y), //PULL THESE SIZES FROM THE MIN ENCLOSING CANVAS CALL
                        });

                        if(dzi_index==sample_idx+1){
                            viewer1.viewport.fitBounds(image.getBounds(),true);
                        }
                    }





                });


                // viewer1.addHandler('tile-loaded', function() {


            }
            // var count = viewer1.world.getItemCount();
            // for (var i = 0; i < count; i++) {

            // var image = viewer1.world.getItemAt(i);
            // var pos = new OpenSeadragon.Point(0, 0);
            // var index = image.index
            // pos.x = index * img_width + (index * 256)
            // pos.y = image_bounds['y']
            // image.setPosition(pos, true)
        }}

    // // // var image = viewer1.world.getItemAt(carusel_rendered_already[sample_idx-1][1]); //this errors
    // // // var imageBounds = image.getBounds();
    // // // viewer1.viewport.fitBounds(imageBounds)

}

function change_viewer_sample(){
    this_is_the_first_click=1
    redirect_carousel_sample()
    var zoom_box=viewer.viewport.getBounds(true);
    console.log(zoom_box);

    if (Object.keys(svg_label_dict[treatment_loadin]).length>0){
        //keep boxes checked logic, if body is checked, keep it checked when you change slices.
        var div_click = document.getElementById('checkbox_0')
        select_all_labels_on_load=div_click.checked
    }

    viewer.close()
    viewer.open({
        // tileSource: "../assets/image_repository/"+available_samples[sample_idx]+".dzi"
        tileSource: "../../../assets/EC2/output/anatomical_reference_histology_zf/"+treatment_loadin+"/"+available_samples[sample_idx]+".dzi",
        // tileSource: "./"+available_samples[sample_idx]+".dzi",
    })

    viewer.addHandler('open', function() {
        viewer.viewport.fitBounds(zoom_box, true); //(the true part makes it snap/animate immediately, no transition time!!!)


    });
    // document.getElementById("label_button2").innerHTML='labels'

    // // // // // if (available_samples[sample_idx] in svg_label_dict){

    // // // // // viewer.addHandler('open', function() {
    // // // // // removeAllChildNodes(document.getElementById("label_panel"))
    // // // // // try{
    // // // // // removeAllChildNodes(_svg_overlay.node())
    // // // // // document.getElementById('current_svg_'+available_samples[sample_idx]).remove()
    // // // // // removeAllChildNodes(document.getElementById('current_svg_'+available_samples[sample_idx]))
    // // // // // removeAllChildNodes(svg_embed_element)
    // // // // // svg_embed_element.remove()

    // // // // // }
    // // // // // catch{
    // // // // // console.log('no labels to erase!')
    // // // // // }
    // // // // // console.log("There are labels for this slide!")
    // // // // // // svg_overlay = viewer.svgOverlay();
    // // // // // // console.log(svg_overlay)
    // // // // // // console.log(svg_label_dict[available_samples[sample_idx]])
    // // // // // url=svg_label_dict[available_samples[sample_idx]]
    // // // // // e = document.createElement('embed');
    // // // // // e.src = url
    // // // // // e.type = "image/svg+xml";
    // // // // // e.id = 'current_svg_'+available_samples[sample_idx]
    // // // // // // e.style.visibility = 'collapse'
    // // // // // // document.body.appendChild(e);
    // // // // // var div = document.createElement("div");
    // // // // // div.style.height='1px'
    // // // // // div.style.width='1px'
    // // // // // div.style.visibility=' hidden'
    // // // // // div.style.position=' absolute'
    // // // // // div.style.top=' -9999px'
    // // // // // div.appendChild(e)
    // // // // // document.body.appendChild(div);
    // // // // // e.addEventListener('load', function()
    // // // // // {


    // // // // // // var head = document.body;
    // // // // // // var svg_embed = document.createElement('embed');
    // // // // // // svg_embed.src = url;
    // // // // // // svg_embed.id = 'svg_embed';

    // // // // // // svg_embed.on("load", function () {
    // // // // // // svg_embed.removeAttr('data-href');



    // // // // // // Then bind the event to the callback function.
    // // // // // // There are several events for cross browser compatibility.
    // // // // // // svg_embed.onreadystatechange = callback;
    // // // // // // svg_embed.onload = callback;

    // // // // // // Fire the loading
    // // // // // // head.appendChild(svg_embed);
    // // // // // svg_embed_element=this.getSVGDocument().documentElement
    // // // // // width_svg=svg_embed_element.width.baseVal.value //CHANGE THIS TO VIEWBOX RETRIEVAL 6/30/2021
    // // // // // console.log(svg_embed_element.getElementById("maxillae"))
    // // // // // // // //finds all plottable elements
    // // // // // // // console.log(svg_embed_element.querySelectorAll('*[id]'))
    // // // // // label_group=svg_embed_element.getElementsByTagName('g')
    // // // // // console.log(label_group.length)
    // // // // // colors=['blue','red','green','yellow','green','blue','purple','black','brown','orange','blue','red','green','yellow','green','blue','purple','black','brown','orange','blue','red','green','yellow','green','blue','purple','black','brown','orange']
    // // // // // class_list=svg_embed_element.getElementsByTagName('defs')[0]['textContent']
    // // // // // for (var label_index=0; label_index<label_group.length; label_index++){
    // // // // // console.log(label_group[label_index])
    // // // // // console.log(label_group[label_index].id)
    // // // // // color_from_svg=false
    // // // // // if (color_from_svg){
    // // // // // color_class=label_group[label_index].getElementsByTagName('path')[0].classList.value


    // // // // // substr_1_idx=class_list.lastIndexOf(color_class)
    // // // // // // class_string_pre=class_list.substr(substr_1_idx,class_list.indexOf('}'))
    // // // // // class_string_pre=class_list.substr(substr_1_idx,class_list.length)
    // // // // // fill_color=class_string_pre.substring(class_string_pre.indexOf('fill:')+5,class_string_pre.indexOf(';'))
    // // // // // }
    // // // // // else{
    // // // // // // fill_color=ontology_color_dict[label_group[label_index].id.replaceAll('_', ' ')]
    // // // // // fill_color='rgb('+ontology_dict[label_group[label_index].id.replaceAll('_', ' ')]['color']+')'
    // // // // // }
    // // // // // // fill_color_pre=class_string_pre.substring(class_string_pre.indexOf('fill:')+5,class_string_pre.length)
    // // // // // // fill_color=fill_color_pre.substring(0,fill_color_pre.indexOf(';'))
    // // // // // g=label_group[label_index].cloneNode(true)
    // // // // // // width_var=1/7740
    // // // // // scale_var=1/width_svg
    // // // // // // console.log(width_var)
    // // // // // // console.log("scale("+scale_var+")")
    // // // // // g.setAttribute("transform", "scale("+scale_var+")")
    // // // // // g.setAttribute("fill-opacity", ".5")
    // // // // // //svg_embed_element.getElementsByTagName('defs')[0]['textContent']
    // // // // // //label_group[label_index].getElementsByTagName('path').classList.value
    // // // // // // className.baseVal.getElementsByTagName('path')
    // // // // // // g.setAttribute("fill", colors[label_index])
    // // // // // g.setAttribute("fill", fill_color)



    // // // // // global_label_dict[label_group[label_index].id] = g

    // // // // // //tie in label_panel2 instead of bumping in a new label panel:
    // // // // // //grab label_id if current svg:
    // // // // // var anatomical_svg_id=ontology_dict[label_group[label_index].id.replaceAll('_', ' ')]['anatomical id']
    // // // // // //pull corresponding checkbox div:
    // // // // // var div_click = document.getElementById("checkbox_"+anatomical_svg_id)
    // // // // // div_click.onclick  = function(j) { return function() {label_it(j); }; }(label_group[label_index].id);


    // // // // // // // // // // // // // // var aTag = document.createElement('a');
    // // // // // // // // // // // // // // aTag.innerHTML =  label_group[label_index].id
    // // // // // // // // // // // // // // aTag.style.cursor =  'pointer'
    // // // // // // // // // // // // // // // aTag.innerHTML =  "<span style='font-weight: 700; color: "+colors[label_index]+"'>"+label_group[label_index].id.replaceAll('_', ' ')+"</span>"
    // // // // // // // // // // // // // // aTag.innerHTML =  "<span style='font-weight: 700; color: "+fill_color+"'>"+label_group[label_index].id.replaceAll('_', ' ')+"</span>"
    // // // // // // // // // // // // // // // +color_list[0]+","+color_list[1]+","+color_list[2]+"')><u>"+info_string[6]+"</u></span>"
    // // // // // // // // // // // // // // var x = document.createElement("input");
    // // // // // // // // // // // // // // x.setAttribute("type", "checkbox")
    // // // // // // // // // // // // // // x.setAttribute("id", "checkbox_"+label_group[label_index].id)
    // // // // // // // // // // // // // // x.style.cssFloat = "right";
    // // // // // // // // // // // // // // x.style.top = "50%";
    // // // // // // // // // // // // // // x.style.transform = "translateY(50%)"


    // // // // // // // // // // // // // // // var pass_list= [g, ]

    // // // // // // // // // // // // // // // aTag.onclick = function(k) {return function()}
    // // // // // // // // // // // // // // x.onclick  = null;
    // // // // // // // // // // // // // // // aTag.onclick  = function(j) { return function() {label_it(j); }; }({label_group[label_index].id});
    // // // // // // // // // // // // // // x.onclick  = function(j) { return function() {label_it(j); }; }(label_group[label_index].id);
    // // // // // // // // // // // // // // aTag.onmouseover  = function(j) { return function() {hover_it(j); }; }(label_group[label_index].id);


    // // // // // // // // // // // // // // // // // aTag.onclick  = function(j) { return function() {
    // // // // // // // // // // // // // // // // // try{
    // // // // // // // // // // // // // // // // // removeAllChildNodes(_svg_overlay.node())
    // // // // // // // // // // // // // // // // // document.getElementById('current_svg_'+available_samples[sample_idx]).remove()
    // // // // // // // // // // // // // // // // // removeAllChildNodes(document.getElementById('current_svg_'+available_samples[sample_idx]))
    // // // // // // // // // // // // // // // // // removeAllChildNodes(svg_embed_element)
    // // // // // // // // // // // // // // // // // svg_embed_element.remove()
    // // // // // // // // // // // // // // // // // }
    // // // // // // // // // // // // // // // // // catch{
    // // // // // // // // // // // // // // // // // 1+1}

    // // // // // // // // // // // // // // // // // _svg_overlay = viewer.svgOverlay();
    // // // // // // // // // // // // // // // // // _svg_overlay.node().appendChild(j)



    // // // // // // // // // // // // // // // // // };







    // // // // // // // // // // // // // // // // // }(g);


    // // // // // // // // // // // // // // document.getElementById("label_panel").appendChild(x)
    // // // // // // // // // // // // // // document.getElementById("label_panel").appendChild(aTag);

    // // // // // // // // // // // // // // console.log(label_group[label_index].id + " added to the panel")
    // // // // // }
    // // // // // // // // // // // // // // document.getElementById("accordian_button").innerHTML = "labels ("+label_group.length+")"


    // // // // // });


    // // // // // });



    // // // // // }
    // console.log(zoom_box)
    // console.log("FIT THAT SUCKER")


    div_slice_idx_display.innerHTML    = (sample_idx+1)+"/"+available_samples.length+"<br><a style='color:gray;font-size:7px;'>"+available_samples[sample_idx]+"</a><br><span style='font-size:12px'>Downloads<\span><br><a style='color:white; font-size:12px' href='"+svg_url+"' target='_blank'>vector file (1MB .svg)<\a>";

    //you can have persistent labels up between samples if you redo the following: render_set_list=[];removeAllChildNodes(_svg_overlay.node())
    // render_set_list=[]
    // removeAllChildNodes(_svg_overlay.node())


}


function change_viewer_sample_carousel(sam_idx){
    this_is_the_first_click=1
    sample_idx=parseInt(sam_idx)
    if (sample_idx<0) sample_idx=0
    if (sample_idx>(available_samples.length-1)) sample_idx=available_samples.length-1
    redirect_carousel_sample()
    var zoom_box=viewer.viewport.getBounds(true);
    console.log(zoom_box);
    viewer.close()
    viewer.open({
        // tileSource: "../assets/image_repository/"+available_samples[sample_idx]+".dzi"
        tileSource: "../../../assets/EC2/output/anatomical_reference_histology_zf/"+treatment_loadin+"/"+available_samples[sample_idx]+".dzi",
        // tileSource: "./"+available_samples[sample_idx]+".dzi",
    })
    viewer.addHandler('open', function() {
        viewer.viewport.fitBounds(zoom_box, true); //(the true part makes it snap/animate immediately, no transition time!!!)
        // console.log(zoom_box)
        // console.log("FIT THAT SUCKER")
    });
    // div_slice_idx_display.innerHTML    = available_samples[sample_idx]+"<br><a style='color:gray; ' href='"+download_link_base+"'>vector file (1MB .ai)<a>"+"<br><a style='color:gray; ' href='"+download_link_base_tif+"'>label map (~100KB .7z)<a>"+"<br><a style='color:gray; ' href='"+Atlas_Web_Release_data_link+"'>all data (88MB)<a>"//<br><span style='font-size:12px'>Downloads<\span><br><a style='color:white; font-size:12px' href='"+svg_url+"' target='_blank'>vector file (1MB .svg)<\a>";

    div_slice_idx_display.innerHTML    = (sample_idx+1)+"/"+available_samples.length+"<br><a style='color:gray;font-size:7px;'>"+available_samples[sample_idx]+"</a><br><span style='font-size:12px'>Downloads<\span><br><a style='color:white; font-size:12px' href='"+svg_url+"' target='_blank'>vector file (1MB .svg)<\a>";

}

function brightness_update(event){
    console.log("md")
    // if (event.buttons){

    var indicator_rect=brightness_indicator_div.getBoundingClientRect();
    var left_end = indicator_rect.left
    var right_end = indicator_rect.right

    var stack_fraction = (event.clientX-left_end)/(right_end-left_end)
    brightness_pct = stack_fraction*200
    brightness_overlay_div.style.left = event.clientX
    document.getElementById("openseadragon1").style.filter = "brightness("+brightness_pct+"%) contrast("+contrast_pct+"%)";
    console.log(brightness_pct)
    //Handler for which backgroundImage to use:
    //Find length of indicator bar, find % into bar mouse is located, apply to stack fraction


    brightness_indicator_div.addEventListener('mousemove',brightness_update);
    document.body.addEventListener('mouseup',function(){
        brightness_indicator_div.removeEventListener('mousemove',brightness_update)
        document.body.removeEventListener('mousemove',brightness_update)
    });

    // }



}


function contrast_update(event){
    // if (event.buttons){

    var indicator_rect=contrast_indicator_div.getBoundingClientRect();
    var left_end = indicator_rect.left
    var right_end = indicator_rect.right

    var stack_fraction = (event.clientX-left_end)/(right_end-left_end)
    contrast_pct = stack_fraction*200
    contrast_overlay_div.style.left = event.clientX
    document.getElementById("openseadragon1").style.filter = "brightness("+brightness_pct+"%) contrast("+contrast_pct+"%)";
    console.log(brightness_pct)
    //Handler for which backgroundImage to use:
    //Find length of indicator bar, find % into bar mouse is located, apply to stack fraction
    contrast_indicator_div.addEventListener('mousemove',contrast_update);
    document.body.addEventListener('mouseup',function(){
        contrast_indicator_div.removeEventListener('mousemove',contrast_update)
        document.body.removeEventListener('mousemove',contrast_update)
    });


    // }



}


//IO control calls
window.addEventListener("resize", window_resizing, true);

// stack_indicator_line_div.addEventListener('mousedown',shopping_aisle_preview);
// stack_indicator_line_div.addEventListener('mousemove',shopping_aisle_preview);


// brightness_indicator_div.addEventListener('mousedown',brightness_update);
// contrast_indicator_div.addEventListener('mousedown',contrast_update);


document.body.addEventListener("keydown",function(event){
    var keyCode = event.keyCode;
    //left = 37
    if (keyCode==37){
        sample_idx--
        if (sample_idx<0) sample_idx=0
        else{change_viewer_sample()}
    }
    //right = 39
    if (keyCode==39){
        sample_idx++
        if (sample_idx>(available_samples.length-1)) sample_idx=available_samples.length-1
        else{change_viewer_sample()}
    }
    console.log(sample_idx)
})





function previous_button_10(){
    sample_idx-=carousel_jump_amount
    if (sample_idx<0) {
        sample_idx=0
        change_viewer_sample()}
    else{change_viewer_sample()}

    console.log(sample_idx)
}

function next_button_10(){
    sample_idx+=carousel_jump_amount
    if (sample_idx>(available_samples.length-1)) {
        sample_idx=available_samples.length-1
        change_viewer_sample()}
    else{change_viewer_sample()}

    console.log(sample_idx)
}

function previous_button_1(){
    sample_idx-=1
    if (sample_idx<0) sample_idx=0
    else{change_viewer_sample()}

    console.log(sample_idx)
}

function next_button_1(){
    sample_idx+=1
    if (sample_idx>(available_samples.length-1)) sample_idx=available_samples.length-1
    else{change_viewer_sample()}

    console.log(sample_idx)
}


// //Filtering label drop down menu

// function myFunction_labels() {
// console.log("Attempting to toggle")
// document.getElementById("label_but").classList.toggle("hide");
// document.getElementById("Label_dropdown").classList.toggle("show");

// document.getElementById("mySidenav").innerHTML="";
// document.getElementById("mySidenav").innerHTML= "<a href='javascript:void(0)' class='closebtn' onclick='closeNav()'>&times;</a>"
// // if (!summoned){ //Don't summon canvas here in case they don't click a label!! Or in case there ARE no labels!!!
// // summon_canvas();
// // }
// }

// function filterFunction_labels() {
// var input, filter, ul, li, a, i;
// input = document.getElementById("myInput_labels");
// filter = input.value.toUpperCase();
// div = document.getElementById("Label_dropdown");
// a = div.getElementsByTagName("a");
// for (i = 0; i < a.length; i++) {
// if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
// a[i].style.display = "";
// } else {
// a[i].style.display = "none";
// }
// }
// }


// // Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {

// if (!event.target.matches('.dropbtn') && !event.target.matches('.dropbtn2')) {
// if (!event.target.matches('#myInput')) {
// var dropdowns = document.getElementsByClassName("dropdown-content");
// var i;
// for (i = 0; i < dropdowns.length; i++) {
// var openDropdown = dropdowns[i];
// if (openDropdown.classList.contains('show')) {
// openDropdown.classList.remove('show');
// }
// }
// }
// if (!event.target.matches('#myInput_labels')) {

// var dropdowns = document.getElementsByClassName("dropdown-content-labels");
// var i;
// for (i = 0; i < dropdowns.length; i++) {
// var openDropdown = dropdowns[i];
// if (openDropdown.classList.contains('show')) {
// openDropdown.classList.remove('show');
// }
// }
// // if ()   document.getElementById("label_but").classList.toggle("hide");
// document.getElementById("label_but").className = document.getElementById("label_but").className.replace(/\bhide\b/, " ");
// }
// }
// }

// /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
// function openNav(input) {
// var treatment_samples=eval(input+"_samples")
// var menu = document.getElementById("mySidenav");
// for(key in treatment_samples){
// console.log(key)
// var aTag = document.createElement('a');
// var treatment_age=treatment_samples[key][0];
// var treatment_sample=key;
// // aTag.onclick = function(j) { return function() {openNav(j+''); }; }(label_PATH);
// aTag.setAttribute('href',"?t="+input+"&s="+treatment_sample);
// aTag.setAttribute('title',treatment_sample);
// aTag.innerHTML = treatment_age;
// menu.appendChild(aTag);
// }
// // document.getElementById("mySidenav").style.width = "250px";
// // document.getElementById("main").style.marginLeft = "250px";
// var width=112.33
// width+=85
// document.getElementById("mySidenav").style.width = width+"px";
// document.getElementById("main").style.marginLeft = width+"px";
// document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
// document.getElementById("mySidenav").style.backgroundColor = "rgba(1,1,1,0.8)";
// console.log(input)
// }

// /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
// function closeNav() {
// document.getElementById("mySidenav").style.width = "0";
// document.getElementById("main").style.marginLeft = "0";
// document.body.style.backgroundColor = "white";
// }
// window.onbeforeunload = function () {
// window.scrollTo(0, 0);
// }

phase_background_color()
function phase_background_color(){
    viewer.addHandler("tile-drawing", function(event) {
        // tile_count++;
        var tile = event.tile;
        var tiledImage = event.tiledImage;

        var canvas = document.createElement('canvas');

        var image = new Image();
        image.setAttribute('crossOrigin', '');
        image.src = event.tiledImage["lastDrawn"]["0"]["url"]+ '?' + new Date().getTime();
        image.onload = function() {
            canvas.width=image.width;
            canvas.height=image.height;

            canvas.getContext('2d').drawImage(image, 0, 0, image.width, image.height)

            // console.log("canvas loaded?");

            // console.log(canvas);
            // console.log(image.width+"x"+image.height);

            // for (var idx=0; idx < canvas.getContext('2d').getImageData(0,0, image.width, image.height).data.length;idx++){
            // console.log(canvas.getContext('2d').getImageData(0,0, image.width, image.height).data[idx])
            // }


            ///THIS IS NOT CALLING THE CORRECT COLOR INDICIES!!!
            var pixelData_pos1 = canvas.getContext('2d').getImageData(0,0, 1, 1).data;
            var pixelData_pos2 = canvas.getContext('2d').getImageData(image.width-1,0, 1, 1).data;
            var pixelData_pos3 = canvas.getContext('2d').getImageData(image.width-1,image.height-1, 1, 1).data;
            var pixelData_pos4 = canvas.getContext('2d').getImageData(0,image.height-1, 1, 1).data;


            // console.log(pixelData_pos1)
            // console.log(pixelData_pos2)
            // console.log(pixelData_pos3)
            // console.log(pixelData_pos4)
            var red     =   [pixelData_pos1[0],pixelData_pos2[0],pixelData_pos3[0],pixelData_pos4[0]]
            var green   =   [pixelData_pos1[1],pixelData_pos2[1],pixelData_pos3[1],pixelData_pos4[1]]
            var blue    =   [pixelData_pos1[2],pixelData_pos2[2],pixelData_pos3[2],pixelData_pos4[2]]
            var rainbows = [red,green,blue];
            final_color=[]
            // console.log(rainbows);
            for (var idx=0; idx < rainbows.length;idx++){
                var temp_array = rainbows[idx];
                // console.log(temp_array);
                var color_temp=mode(temp_array);
                final_color.push(color_temp)
                // console.log(idx);
                // var obj = {};
                // for (var i = 0, j = temp_array.length; i < j; i++) {
                // console.log("mode: "+temp_array[i])
                // obj[temp_array[i]] = (obj[temp_array[i]] || 0) + 1;
                // }
                // let arr = Object.values(obj);
                // let max = Math.max(...arr);
                // final_color.push(max)
            }
            // console.log(final_color);

            // console.log("pixel data:");
            // console.log(pixelData);
            document.getElementById("openseadragon1").style.backgroundColor = 'rgb('+final_color+')';
            document.getElementById("openseadragon1").style.backgroundColor = 'rgb('+final_color+')';

            var elements = document.getElementsByClassName("navigator");
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.backgroundColor='rgb('+final_color+')';
            }

            //place elements inside of the nav for cardinal directions:
            // element_disregcontainer = document.getElementsByClassName("displayregion")[0];
            element_disregcontainer = document.getElementsByClassName("displayregioncontainer")[0];

            //floating label
            //parsing directionality:
            n_text='Anterior'
            s_text='Posterior'
            w_text=''
            e_text=''
            orientation=load_vars['t'].split('_')[0]
            if (orientation=='transverse'){
                n_text='Ventral'
                s_text='Dorsal'
            }
            if (orientation=='sagittal'){
                w_text='Ventral'
                e_text='Dorsal'
            }
            var card_dir_W = document.createElement("div");
            // div_label_display.id = "label_display_"+number_of_current_divs;
            card_dir_W.id = "card_dir_W";
            card_dir_W.className = "unselectable";
            card_dir_W.addEventListener('contextmenu', event => event.preventDefault());
            // div_label_display.style.background = "transparent";
            card_dir_W.style.letterSpacing  = "1px";
            // card_dir_W.style.background  = 'rgba(255,0,0,.15)';
            card_dir_W.style.background  = 'transparent';
            // card_dir_W.style.position = "relative";
            card_dir_W.style.position = "absolute";
            card_dir_W.style.color = "black";
            // card_dir_W.style.textAlign  = "left";
            // card_dir_W.style.justifyContent = "center";
            // card_dir_W.style.alignItems  = "center";
            // card_dir_W.style.display= "flex";

            card_dir_W.style.width     = "25%";
            card_dir_W.style.top     = "50%";
            card_dir_W.style.height     = "50%";
            card_dir_W.style.fontSize     = '1vw';
            if (isMobile){
                card_dir_W.style.fontSize     = '2vw';
            }

            // card_dir_W.style.cssFloat    = 'left';
            // card_dir_W.style.left    = '0';
            // var card_dir_W_text = document.createElement("div");
            // var card_dir_W_text = document.createElement("div");

            card_dir_W.innerHTML    = w_text
            // card_dir_W_text.innerHTML    = 'W'
            // card_dir_W_text.style.background    = '#06c'
            // card_dir_W_text.style.color    = 'black'
            // card_dir_W_text.style.width    = '100%'
            // card_dir_W_text.style.height    = '100%'
            // card_dir_W_text.style.flex    = '0 0 120px'
            // card_dir_W.style.whiteSpace      = "nowrap";

            element_disregcontainer.appendChild(card_dir_W);
            // card_dir_W.appendChild(card_dir_W_text);




            var card_dir_NS = document.createElement("div");
            // div_label_display.id = "label_display_"+number_of_current_divs;
            card_dir_NS.id = "card_dir_NS";
            card_dir_NS.className = "unselectable";
            card_dir_NS.addEventListener('contextmenu', event => event.preventDefault());
            // div_label_display.style.background = "transparent";
            card_dir_NS.style.letterSpacing  = "1px";
            // card_dir_NS.style.background  = 'rgba(0,0,255,.15)';
            card_dir_NS.style.background  = 'transparent';
            card_dir_NS.style.position = "absolute";
            card_dir_NS.style.color = "black";
            // card_dir_NS.style.textAlign  = "center";

            card_dir_NS.style.width     = "50%";
            card_dir_NS.style.left     = "25%";
            // card_dir_W.style.top     = "50%";
            card_dir_NS.style.height     = "100%";
            card_dir_NS.style.fontSize     = '1vw';


            // card_dir_NS.style.cssFloat    = 'left';
            // card_dir_W.style.left    = '0';
            // card_dir_W.innerHTML    = 'W'
            // card_dir_W.style.whiteSpace      = "nowrap";

            element_disregcontainer.appendChild(card_dir_NS);



            var card_dir_N = document.createElement("div");
            // div_label_display.id = "label_display_"+number_of_current_divs;
            card_dir_N.id = "card_dir_N";
            card_dir_N.className = "unselectable";
            card_dir_N.addEventListener('contextmenu', event => event.preventDefault());
            // div_label_display.style.background = "transparent";
            card_dir_N.style.letterSpacing  = "1px";
            // card_dir_N.style.background  = 'rgba(0,255,255,.15)';
            card_dir_N.style.background  = 'transparent';
            card_dir_N.style.position = "relative";
            card_dir_N.style.color = "black";
            // card_dir_N.style.textAlign  = "center";
            card_dir_N.style.justifyContent = "center";
            card_dir_N.style.alignItems  = "top";
            card_dir_N.style.display= "flex";

            card_dir_N.style.width     = "100%";
            // card_dir_W.style.top     = "50%";
            card_dir_N.style.height     = "50%";


            // card_dir_N.style.cssFloat    = 'left';
            // card_dir_W.style.left    = '0';
            card_dir_N.innerHTML    = n_text
            card_dir_N.style.fontSize     = '1vw';
            if (isMobile){
                card_dir_N.style.fontSize     = '2vw';
            }
            // card_dir_W.style.whiteSpace      = "nowrap";

            card_dir_NS.appendChild(card_dir_N);

            var card_dir_S = document.createElement("div");
            // div_label_display.id = "label_display_"+number_of_current_divs;
            card_dir_S.id = "card_dir_S";
            card_dir_S.className = "unselectable";
            card_dir_S.addEventListener('contextmenu', event => event.preventDefault());
            // div_label_display.style.background = "transparent";
            card_dir_S.style.letterSpacing  = "1px";
            // card_dir_S.style.background  = 'rgba(255,0,255,.15)';
            card_dir_S.style.background  = 'transparent';
            card_dir_S.style.position = "relative";
            card_dir_S.style.color = "black";
            // card_dir_S.style.textAlign  = "center";
            card_dir_S.style.justifyContent = "center";
            card_dir_S.style.alignItems  = "flex-end";
            card_dir_S.style.display= "flex";

            card_dir_S.style.width     = "100%";
            // card_dir_S.style.top     = "50%";
            card_dir_S.style.height     = "50%";


            // card_dir_S.style.cssFloat    = 'left';
            // card_dir_W.style.left    = '0';
            card_dir_S.innerHTML    = s_text
            card_dir_S.fontSize     = '1vw';
            if (isMobile){
                card_dir_S.style.fontSize     = '2vw';
            }
            // card_dir_W.style.whiteSpace      = "nowrap";

            card_dir_NS.appendChild(card_dir_S);




            // document.getElementById("openseadragon1").appendChild(canvas)
            // console.log('rgb('+pixelData[0]+","+pixelData[1]+","+pixelData[2]+')')
            // element_disregcontainer = document.getElementsByClassName("displayregioncontainer")[0];
            var card_dir_E = document.createElement("div");
            // div_label_display.id = "label_display_"+number_of_current_divs;
            card_dir_E.id = "card_dir_E";
            card_dir_E.className = "unselectable";
            card_dir_E.addEventListener('contextmenu', event => event.preventDefault());
            // div_label_display.style.background = "transparent";
            card_dir_E.style.letterSpacing  = "1px";
            // card_dir_E.style.background  = 'rgba(0,255,0,.15)';
            card_dir_E.style.background  = 'transparent';
            card_dir_E.style.position = "absolute";
            card_dir_E.style.color = "black";
            // card_dir_E.style.textAlign  = "center";
            // card_dir_E.style.justifyContent = "center";
            // card_dir_E.style.alignItems  = "center";
            // card_dir_E.style.display= "flex";

            card_dir_E.style.width     = "25%";
            card_dir_E.style.top     = "50%";
            card_dir_E.style.height     = "50%";
            card_dir_E.style.left     = "75%";
            card_dir_E.style.fontSize     = '1vw';
            if (isMobile){
                card_dir_E.style.fontSize     = '2vw';
            }

            // card_dir_E.style.cssFloat    = 'right';
            // card_dir_E.style.left    = '50%';
            card_dir_E.innerHTML    = e_text
            // card_dir_E.style.whiteSpace      = "nowrap";

            element_disregcontainer.appendChild(card_dir_E);

            // var card_dir_N = document.createElement("div");
            // // div_label_display.id = "label_display_"+number_of_current_divs;
            // card_dir_N.id = "card_dir_N";
            // card_dir_N.className = "unselectable";
            // card_dir_N.addEventListener('contextmenu', event => event.preventDefault());
            // // div_label_display.style.background = "transparent";
            // card_dir_N.style.letterSpacing  = "5px";
            // // card_dir_N.style.background  = 'rgba(0,0,0,.7)';
            // div_slice_idx_display.style.position = "absolute";
            // card_dir_N.style.color = "black";
            // card_dir_N.style.textAlign  = "center";

            // card_dir_N.style.width     = "100%";
            // card_dir_N.style.top     = "0";
            // // card_dir_N.style.height     = "10%";
            // card_dir_N.style.whiteSpace      = "nowrap";

            // // card_dir_N.style.cssFloat    = 'right';
            // // card_dir_N.style.right    = '0';
            // card_dir_N.innerHTML    = 'N'
            // element_disregcontainer.appendChild(card_dir_N);




        };
        //same as below

        //using + '?' + new Date().getTime(); to bypass cross-origin error you get from drawing an image directly to canvas from another origin (s3 -> lithium)








        viewer.removeAllHandlers("tile-drawing");
    });
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
function removeAll(originalSet, toBeRemovedSet) {
    [...toBeRemovedSet].forEach(function(v) {
        originalSet.delete(v);
    });
}


function addAll(originalSet, toBeRemovedSet) {
    [...toBeRemovedSet].forEach(function(v) {
        originalSet.add(v);
    });
}

//filter dictionary:



function menu_hovering_exit(key){
    event.stopPropagation();

    //kill all
    for (var id_ of potential_children){
        var segmentation_name_ = id_dict[id_]['segmentation name']
        var svegg = global_label_dict[segmentation_name_.replaceAll(' ','_')]
        if (svegg){
            remove_color_all([segmentation_name_,svegg])
        }
    }

    for (var id_ of render_set){
        var segmentation_name_ = id_dict[id_]['segmentation name']
        var svegg = global_label_dict[segmentation_name_.replaceAll(' ','_')]
        push_color_to_inside([segmentation_name_,svegg])

    }






}


function menu_hovering_exit2(key){
    event.stopPropagation();
    potential_children=children_id_on_slide_dict[key].slice()


    render_set_list=Array.from(render_set);
    for (var child of potential_children){
        // removeAllChildNodes(_svg_overlay.node())
        if (!(render_set_list.includes(child))){
            for (var child_label of ontology_MS_full[child]){
                structure_label=id_dict[child_label]['segmentation name'].replace(/ /g, '_')

                try{
                    // structure_label=render_set_list[structure_label_idx]
                    document.getElementById("text_label_"+structure_label).remove()
                    console.log(structure_label+ ' removed!')
                }
                catch{
                    1+1
                    // console.log(structure_label+" plotted?")
                }
                document.getElementById(structure_label)
                // _svg_overlay.node().childNodes
                // _svg_overlay.node().childNodes
            }
        }
    }
    // viewer.currentOverlays=[]

    // _svg_overlay = viewer.svgOverlay();


    for (var id_ of render_set){
        add_a_render_to_the_viewer(id_)
        var segmentation_name_ = id_dict[id_]['segmentation name']
        var svegg = global_label_dict[segmentation_name_.replaceAll(' ','_')]

        push_color_to_inside([segmentation_name_,svegg])

    }
}


function menu_hover_enter(key){
    // event.stopPropagation();
    console.log(key)
    // console.log(event)

    // key=event.path[1].id.split('_')[1]
    // console.log(key)
    // var anatomical_id=key
    var anatomical_id=key
    var div_click = document.getElementById("checkbox_"+anatomical_id)
    //Don't even bother if it's not checked off!!
    if (div_click.checked){
        potential_children=children_id_on_slide_dict[key].slice()
        // console.log(potential_children)

        // for (var iddx in potential_children){
        // // var ana_label = id_dict[potential_children[iddx]]['segmentation name'].replace(" ","_")
        // var ana_label = id_dict[potential_children[iddx]]['segmentation name'].replace(/ /g, '_')
        // testit=global_label_dict[ana_label]

        // if (!(testit)){
        // var index = potential_children.indexOf(potential_children[iddx]);
        // if (index !== -1) {
        // potential_children.splice(index, 1);
        // }}
        // }
        var render_set_list_=Array.from(render_set);
        for (var child_idx in potential_children){
            child=potential_children[child_idx]
            //check to see if the svg exists
            if (render_set_list_.includes(child)){
                //already drawn
                // potential_children.splice(child_idx, 1);
                1+1

            }
            //WHY WAS THIS CODED IN????
            // else{
            // // add_a_render_to_the_viewer(child)
            // var segmentation_name_ = id_dict[child]['segmentation name']
            // var svegg = global_label_dict[segmentation_name_.replaceAll(' ','_')]
            // //if it exists draw it.
            // if (svegg){
            // push_color_to_inside([segmentation_name_,svegg])
            // }
            // }
        }
        // console.log(potential_children)
        // console.log("DIMMING ALL OF THESE:")
        for (var rendee of render_set){
            if (!(potential_children.includes(rendee))){
                // console.log(id_dict[rendee]['segmentation name'])
                // console.log(global_label_dict[id_dict[rendee]['segmentation name'].replaceAll(' ','_')])
                remove_color_all([id_dict[rendee]['segmentation name'],global_label_dict[id_dict[rendee]['segmentation name'].replaceAll(' ','_')]])
            }
        }

    }
}

function add_a_render_to_the_viewer(anatomical_id){

    structure_label=id_dict[anatomical_id]['segmentation name'].replace(/ /g, '_')

    current_svg = global_label_dict[structure_label]
    if (!(current_svg)){return}

    // current_svg=global_label_dict['Antennal_muscles']
    var path=current_svg.getElementsByTagName("path")[0]


    var path_length=path.getTotalLength()
    var sampling=50
    var increment=path_length/sampling
    var polygon={'type':'polygon','coordinates':[]}
    var points_list=[]
    for (var step=0; step<path_length;step+=increment){
        points_list.push([path.getPointAtLength(step).x,path.getPointAtLength(step).y])
        // console.log(path.getPointAtLength(step))
    }
    polygon['coordinates']=[points_list]
    var label_point = polylabel(polygon['coordinates'], 1.0);


    var xy = new OpenSeadragon.Point(label_point[1],label_point[0])
    xy = viewer.viewport.imageToViewportCoordinates(xy)
    // console.log(xy)
    var rect=new OpenSeadragon.Rect(xy.y,xy.x,0,0)
    // var rect = viewer.viewport.imageToViewportRectangle(xy.x, xy.y, 1, 1)
    // console.log(rect)
    var elt = document.createElement("div");
    elt.title = 'test title';
    // console.log(elt.title.length)
    // for (var n_add_space=0; n_add_space<parseInt(elt.title.length/2);n_add_space++){
    // elt.title="&nbsp"+elt.title
    // // console.log("is this running")
    // }
    elt.id = 'text_label_'+structure_label
    elt.className = "highlight";
    elt.innerHTML = 'innerhtml'
    elt.style.whiteSpace = "nowrap";
    elt.className='unselectable'
    // elt.innerHTML = ontology_dict[structure_label.replaceAll('_', ' ')]['display name']
    // elt.innerHTML = structure_label.replaceAll('_', ' ')
    abbrev=id_dict[anatomical_id]['abv']
    elt.innerHTML = abbrev
    // elt.style.fontSize = "smallest"
    // elt.style.fontSize = "10px"
    elt.style.color = label_overlay_color
    elt.style.zIndex = "100";
    elt.style.fontWeight  = "normal"
    // elt.innerHTML = info_string[1]
    font_size=1
    viewer.addOverlay({
        element: elt,
        location: rect,
    })

    _svg_overlay.node().appendChild(current_svg)

}

function label_it_soft(key){
    event.stopPropagation()
    console.log(render_set_list)
    console.log(render_set)
    console.log(key)

    // console.log(global_label_dict[key])
    // var anatomical_id=ontology_dict[key.replaceAll('_', ' ')]['anatomical id']
    var anatomical_id=key
    var div_click = document.getElementById("checkbox_"+anatomical_id)
    console.log(div_click)
    if (div_click.checked){
        // render_set_list.indexOf(key) === -1 ? render_set_list.push(key) : console.log("This item already exists");
        // render_set_list.indexOf(key) === -1 ? render_set_list.push(key) : console.log("This item already exists");
        // populate render list with all children of parent label
        // addAll(render_set_list,ontology_MS_full[key])
        var potential_children=children_id_on_slide_dict[key].slice()
        for (var iddx in potential_children){
            // var ana_label = id_dict[potential_children[iddx]]['segmentation name'].replace(" ","_")
            var ana_label = id_dict[potential_children[iddx]]['segmentation name'].replace(/ /g, '_')
            console.log(ana_label)
            testit=global_label_dict[ana_label]

            if (!(testit)){
                var index = potential_children.indexOf(potential_children[iddx]);
                if (index !== -1) {
                    potential_children.splice(index, 1);
                }}
        }
        // addAll(render_set,children_id_on_slide_dict[key])
        addAll(render_set,potential_children)
        render_set_list=Array.from(render_set);
        var all_of_the_potential_checkbox_children = ontology_MS_full[key]
        //fix this
        for (var label_idx in all_of_the_potential_checkbox_children){
            //lazy parsing:
            try{
                var div_click_child=document.getElementById("checkbox_"+all_of_the_potential_checkbox_children[label_idx])
                div_click_child.checked=true
                console.log('this is label '+all_of_the_potential_checkbox_children[label_idx])
                console.log('this is from label '+key)


                push_color_to_inside([id_dict[all_of_the_potential_checkbox_children[label_idx]]['segmentation name'],global_label_dict[id_dict[all_of_the_potential_checkbox_children[label_idx]]['segmentation name'].replaceAll(' ','_')]])
            }
            catch{1+1}
            //indeterminate checkbox [-]
            // div_click_child.indeterminate=true
        }
    }


    else{
        removeAll(render_set,children_id_on_slide_dict[key])
        render_set_list=Array.from(render_set);
        //try to remove all labels NOT in the current render set

        var all_of_the_potential_checkbox_children = ontology_MS_full[key]
        //fix this
        for (var label_idx in all_of_the_potential_checkbox_children){
            //lazy parsing:
            try{
                var div_click_child=document.getElementById("checkbox_"+all_of_the_potential_checkbox_children[label_idx])
                div_click_child.checked=false
                console.log('this is label '+all_of_the_potential_checkbox_children[label_idx])
                console.log('this is from label '+key)
                // all_of_the_potential_checkbox_children[label_idx]
                remove_color_all([id_dict[all_of_the_potential_checkbox_children[label_idx]]['segmentation name'],global_label_dict[id_dict[all_of_the_potential_checkbox_children[label_idx]]['segmentation name'].replaceAll(' ','_')]])
            }
            catch{1+1}
            //indeterminate checkbox [-]
            // div_click_child.indeterminate=true
        }







        // const index = render_set_list.indexOf(key);
        // render_set_list.splice(index, 1);

        // removeAllChildNodes(_svg_overlay.node())


        // anatomical_id=render_set_list[structure_label_idx]
        // structure_label=id_dict[anatomical_id]['segmentation name'].replace(" ","_")
        // document.getElementById("text_label_"+key).remove()


    }

    // // // render_set_list=Array.from(render_set);
    // // // for (var structure_label_idx in label_ids_on_this_slide) {
    // // // anatomical_id=label_ids_on_this_slide[structure_label_idx]
    // // // if (!(render_set_list.includes(anatomical_id))){
    // // // for (var child_label_idx in ontology_MS_full[anatomical_id]){
    // // // anatomical_id_child=ontology_MS_full[anatomical_id][child_label_idx]
    // // // structure_label=id_dict[anatomical_id_child]['segmentation name'].replace(/ /g, '_')

    // // // try{
    // // // // structure_label=render_set_list[structure_label_idx]
    // // // document.getElementById("text_label_"+structure_label).remove()
    // // // console.log(structure_label+ ' removed!')
    // // // }
    // // // catch{
    // // // 1+1
    // // // // console.log(structure_label+" plotted?")
    // // // }
    // // // }
    // // // }
    // // // }
    // // // viewer.currentOverlays=[]

    // // // //WORK ON REMOVING STUFF NOW 7/12/2021

    // // // // addAll(render_set_list,global_label_dict[key])
    // // // // var div_click = document.getElementById("checkbox_"+key)
    // // // // if (div_click.checked){
    // // // _svg_overlay = viewer.svgOverlay();
    // // // // removeAllChildNodes(_svg_overlay.node())
    // // // // document.getElementById('current_svg_'+available_samples[sample_idx]).remove()
    // // // // removeAllChildNodes(document.getElementById('current_svg_'+available_samples[sample_idx]))
    // // // // removeAllChildNodes(svg_embed_element)
    // // // // svg_embed_element.remove()
    // // // // const labels_set = render_set_list
    // // // for (var structure_label_idx in render_set_list) {
    // // // anatomical_id=render_set_list[structure_label_idx]
    // // // structure_label=id_dict[anatomical_id]['segmentation name'].replace(/ /g, '_')
    // // // // console.log(structure_label)
    // // // // if (global_label_dict.hasOwnProperty(structure_label)) {
    // // // // console.log(structure_label + " -> " + global_label_dict[structure_label]);

    // // // current_svg = global_label_dict[structure_label]
    // // // if (!(current_svg)){continue}

    // // // // current_svg=global_label_dict['Antennal_muscles']
    // // // var path=current_svg.getElementsByTagName("path")[0]




    // // // var path_length=path.getTotalLength()
    // // // var sampling=50
    // // // var increment=path_length/sampling
    // // // var polygon={'type':'polygon','coordinates':[]}
    // // // var points_list=[]
    // // // for (var step=0; step<path_length;step+=increment){
    // // // points_list.push([path.getPointAtLength(step).x,path.getPointAtLength(step).y])
    // // // // console.log(path.getPointAtLength(step))
    // // // }
    // // // polygon['coordinates']=[points_list]
    // // // var label_point = polylabel(polygon['coordinates'], 1.0);


// // // //place a text label

    // // // var xy = new OpenSeadragon.Point(label_point[1],label_point[0])
    // // // xy = viewer.viewport.imageToViewportCoordinates(xy)
    // // // // console.log(xy)
    // // // var rect=new OpenSeadragon.Rect(xy.y,xy.x,0,0)
    // // // // var rect = viewer.viewport.imageToViewportRectangle(xy.x, xy.y, 1, 1)
    // // // // console.log(rect)
    // // // var elt = document.createElement("div");
    // // // elt.title = 'test title';
    // // // // console.log(elt.title.length)
    // // // // for (var n_add_space=0; n_add_space<parseInt(elt.title.length/2);n_add_space++){
    // // // // elt.title="&nbsp"+elt.title
    // // // // // console.log("is this running")
    // // // // }
    // // // elt.id = 'text_label_'+structure_label
    // // // elt.className = "highlight";
    // // // elt.innerHTML = 'innerhtml'
    // // // elt.style.whiteSpace = "nowrap";
    // // // elt.className='unselectable'
    // // // // elt.innerHTML = ontology_dict[structure_label.replaceAll('_', ' ')]['display name']
    // // // // elt.innerHTML = structure_label.replaceAll('_', ' ')
    // // // abbrev=id_dict[anatomical_id]['abv']
    // // // elt.innerHTML = abbrev
    // // // // elt.style.fontSize = "smallest"
    // // // // elt.style.fontSize = "10px"
    // // // elt.style.color = "black"
    // // // elt.style.zIndex = "100";
    // // // elt.style.fontWeight  = "normal"
    // // // // elt.innerHTML = info_string[1]
    // // // font_size=1
    // // // viewer.addOverlay({
    // // // element: elt,
    // // // location: rect,
    // // // })


    // // // //actually do this loop
    // // // // paths=current_svg.getElementsByTagName("path")

    // // // // for (var path_idx in paths){
    // // // // var path=paths[path_idx]

    // // // // }
    // // // // current_svg.title=
    // // // // console.log(current_svg)

    // // // _svg_overlay.node().appendChild(current_svg)



    // // // }

}



//cecum=1102
function label_it(key){
    event.stopPropagation()
    console.log(render_set_list)
    console.log(render_set)
    console.log(key)
    if (this_is_the_first_click){
        this_is_the_first_click=0
    }
    else{
        label_it_soft(key)
        return
    }
    // console.log(global_label_dict[key])
    // var anatomical_id=ontology_dict[key.replaceAll('_', ' ')]['anatomical id']
    var anatomical_id=key
    var div_click = document.getElementById("checkbox_"+anatomical_id)
    console.log(div_click)
    if (div_click.checked){
        // render_set_list.indexOf(key) === -1 ? render_set_list.push(key) : console.log("This item already exists");
        // render_set_list.indexOf(key) === -1 ? render_set_list.push(key) : console.log("This item already exists");
        // populate render list with all children of parent label
        // addAll(render_set_list,ontology_MS_full[key])
        var potential_children=children_id_on_slide_dict[key].slice()
        for (var iddx in potential_children){
            // var ana_label = id_dict[potential_children[iddx]]['segmentation name'].replace(" ","_")
            var ana_label = id_dict[potential_children[iddx]]['segmentation name'].replace(/ /g, '_')
            console.log(ana_label)
            testit=global_label_dict[ana_label]

            if (!(testit)){
                var index = potential_children.indexOf(potential_children[iddx]);
                if (index !== -1) {
                    potential_children.splice(index, 1);
                }}
        }
        // addAll(render_set,children_id_on_slide_dict[key])
        addAll(render_set,potential_children)
        render_set_list=Array.from(render_set);
        var all_of_the_potential_checkbox_children = ontology_MS_full[key]
        //fix this
        for (var label_idx in all_of_the_potential_checkbox_children){
            //lazy parsing:
            try{
                var div_click_child=document.getElementById("checkbox_"+all_of_the_potential_checkbox_children[label_idx])
                div_click_child.checked=true
                console.log('this is label '+all_of_the_potential_checkbox_children[label_idx])
                console.log('this is from label '+key)
            }
            catch{1+1}
            //indeterminate checkbox [-]
            // div_click_child.indeterminate=true
        }
    }


    else{
        removeAll(render_set,children_id_on_slide_dict[key])
        render_set_list=Array.from(render_set);
        //try to remove all labels NOT in the current render set

        var all_of_the_potential_checkbox_children = ontology_MS_full[key]
        //fix this
        for (var label_idx in all_of_the_potential_checkbox_children){
            //lazy parsing:
            try{
                var div_click_child=document.getElementById("checkbox_"+all_of_the_potential_checkbox_children[label_idx])
                div_click_child.checked=false
                console.log('this is label '+all_of_the_potential_checkbox_children[label_idx])
                console.log('this is from label '+key)
            }
            catch{1+1}
            //indeterminate checkbox [-]
            // div_click_child.indeterminate=true
        }







        // const index = render_set_list.indexOf(key);
        // render_set_list.splice(index, 1);
        removeAllChildNodes(_svg_overlay.node())
        // anatomical_id=render_set_list[structure_label_idx]
        // structure_label=id_dict[anatomical_id]['segmentation name'].replace(" ","_")
        // document.getElementById("text_label_"+key).remove()


    }

    render_set_list=Array.from(render_set);
    for (var structure_label_idx in label_ids_on_this_slide) {
        anatomical_id=label_ids_on_this_slide[structure_label_idx]
        if (!(render_set_list.includes(anatomical_id))){
            for (var child_label_idx in ontology_MS_full[anatomical_id]){
                anatomical_id_child=ontology_MS_full[anatomical_id][child_label_idx]
                structure_label=id_dict[anatomical_id_child]['segmentation name'].replace(/ /g, '_')

                try{
                    // structure_label=render_set_list[structure_label_idx]
                    document.getElementById("text_label_"+structure_label).remove()
                    console.log(structure_label+ ' removed!')
                }
                catch{
                    1+1
                    // console.log(structure_label+" plotted?")
                }
            }
        }
    }
    viewer.currentOverlays=[]

    //WORK ON REMOVING STUFF NOW 7/12/2021

    // addAll(render_set_list,global_label_dict[key])
    // var div_click = document.getElementById("checkbox_"+key)
    // if (div_click.checked){
    _svg_overlay = viewer.svgOverlay();
    // removeAllChildNodes(_svg_overlay.node())
    // document.getElementById('current_svg_'+available_samples[sample_idx]).remove()
    // removeAllChildNodes(document.getElementById('current_svg_'+available_samples[sample_idx]))
    // removeAllChildNodes(svg_embed_element)
    // svg_embed_element.remove()
    // const labels_set = render_set_list
    for (var structure_label_idx in render_set_list) {
        anatomical_id=render_set_list[structure_label_idx]
        structure_label=id_dict[anatomical_id]['segmentation name'].replace(/ /g, '_')
        // console.log(structure_label)
        // if (global_label_dict.hasOwnProperty(structure_label)) {
        // console.log(structure_label + " -> " + global_label_dict[structure_label]);

        current_svg = global_label_dict[structure_label]
        if (!(current_svg)){continue}

        // current_svg=global_label_dict['Antennal_muscles']
        var path=current_svg.getElementsByTagName("path")[0]




        var path_length=path.getTotalLength()
        var sampling=50
        var increment=path_length/sampling
        var polygon={'type':'polygon','coordinates':[]}
        var points_list=[]
        for (var step=0; step<path_length;step+=increment){
            points_list.push([path.getPointAtLength(step).x,path.getPointAtLength(step).y])
            // console.log(path.getPointAtLength(step))
        }
        polygon['coordinates']=[points_list]
        var label_point = polylabel(polygon['coordinates'], 1.0);


//place a text label

        var xy = new OpenSeadragon.Point(label_point[1],label_point[0])
        xy = viewer.viewport.imageToViewportCoordinates(xy)
        // console.log(xy)
        var rect=new OpenSeadragon.Rect(xy.y,xy.x,0,0)
        // var rect = viewer.viewport.imageToViewportRectangle(xy.x, xy.y, 1, 1)
        // console.log(rect)
        var elt = document.createElement("div");
        elt.title = 'test title';
        // console.log(elt.title.length)
        // for (var n_add_space=0; n_add_space<parseInt(elt.title.length/2);n_add_space++){
        // elt.title="&nbsp"+elt.title
        // // console.log("is this running")
        // }
        elt.id = 'text_label_'+structure_label
        elt.className = "highlight";
        elt.innerHTML = 'innerhtml'
        elt.style.whiteSpace = "nowrap";
        elt.className='unselectable'
        // elt.innerHTML = ontology_dict[structure_label.replaceAll('_', ' ')]['display name']
        // elt.innerHTML = structure_label.replaceAll('_', ' ')
        abbrev=id_dict[anatomical_id]['abv']
        elt.innerHTML = abbrev
        // elt.style.fontSize = "smallest"
        // elt.style.fontSize = "10px"
        elt.style.color = label_overlay_color
        elt.style.zIndex = "100";
        elt.style.fontWeight  = "normal"
        // elt.innerHTML = info_string[1]
        font_size=1
        viewer.addOverlay({
            element: elt,
            location: rect,
        })


        //actually do this loop
        // paths=current_svg.getElementsByTagName("path")

        // for (var path_idx in paths){
        // var path=paths[path_idx]

        // }
        // current_svg.title=
        // console.log(current_svg)

        _svg_overlay.node().appendChild(current_svg)



    }

}



var coll = document.getElementsByClassName("trunklapse");
var i;
// console.log(coll.length)
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function(e) {
        // if (e.target !== e.currentTarget){
        // // console.log("did this work?")
        // // console.log(e.currentTarget)
        // // console.log(e.target)
        // return
        // }
        this.classList.toggle("active");
        // for (n in )
        // var content = this.nextElementSibling; //This is the next TRUNK in the chain.
        // console.log(content)
        var childs = this.children;
        for (j=0;j< childs.length; j++){
            // console.log(childs[j])
            // if (childs[j].classList.contains("collapsible")){
            // if (childs[j].classList.contains("collapsible")){

            // console.log(childs[j])
            // collapse_big=1
            // console.log(childs[j].style.maxHeight)
            childs[j].classList.toggle("show");
            // if (childs[j].style.maxHeight){
            // // if (collapse_big){
            // // console.log("NULLING big")
            // // childs[j].style.maxHeight = null;
            // // }
            // } else {
            // childs[j].style.maxHeight = childs[j].scrollHeight + "px";
            // // childs[j].style.maxHeight = 20 + "px";
            // console.log("SHOULD BE SHOWING big")
            // console.log(childs[j].style.maxHeight)

            // }
        }
        var acc = document.getElementsByClassName("panel2");
        for (i = 0; i < acc.length; i++) {
            acc[i].style.maxHeight = acc[i].scrollHeight + "px";
        }
    })
};


var coll = document.getElementsByClassName("collapsible");
var i;
// console.log(coll.length)
for (i = 0; i < coll.length; i++) {
    // console.log(coll[i])
    coll[i].addEventListener("click", function(e) {
        // if (e.target !== e.currentTarget){
        // console.log("did this work?")
        // console.log(e.currentTarget)
        // console.log(e.target)
        current_id_div=document.getElementById(e.currentTarget.id)
        // console.log(current_id)
        // return
        // // }
        if (current_id_div.classList.contains("found")){

            // current_id_div.classList.remove("found")
            // current_id_div.classList.remove("show")
            // current_id_div.classList.remove("active")
            // current_id_div.classList.toggle("active");
            // console.log("ACTIVE!")

        }
        else{
            current_id_div.classList.toggle("active");
        }
        // if (e.target !== e.currentTarget){
        // console.log("did this work?")
        // console.log(e.currentTarget)
        // console.log(e.target)
        // return
        // }

        // for (n in )
        // var content = this.nextElementSibling; //This is the next TRUNK in the chain.
        // console.log(content)
        var childs = current_id_div.children;
        // console.log(childs)
        for (j=0;j< childs.length; j++){
            if (current_id_div.classList.contains("found")){
                if (childs[j].classList.contains("found")){
                    childs[j].classList.remove("found")
                    childs[j].classList.remove("show")
                }
                else{
                    console.log(childs[j])
                    childs[j].classList.remove("show")
                }
            }
            else{

                // this.classList.toggle("show");
                // console.log(childs[j])
                childs[j].classList.toggle("show");
            }
            // childs[j].classList.toggle("active");
            // if (childs[j].classList.contains("collapsible")){
            // if (childs[j].classList.contains("collapsible")){

            // console.log(childs[j])
            // collapse_big=1
            // console.log(childs[j].style.maxHeight)
            // if (childs[j].style.maxHeight){
            // // if (collapse_big){
            // console.log("NULLING big")
            // childs[j].style.maxHeight = null;
            // // }
            // } else {
            // childs[j].style.maxHeight = childs[j].scrollHeight + "px";
            // childs[j].style.maxHeight = 20 + "px";
            // console.log("SHOULD BE SHOWING inside thing")
            // console.log(childs[j].style.maxHeight)
            // }

        }
        current_id_div.classList.remove("found")
        var acc = document.getElementsByClassName("panel2");
        for (i = 0; i < acc.length; i++) {
            acc[i].style.maxHeight = acc[i].scrollHeight + "px";
        }
        e.stopPropagation()
    })

};

// prompt("Link to your current view", base_link+"?s="+encodeURI(current_sample)+"&c="+box_img1['x']+","+box_img1['y']+","+box_img1['width']+","+box_img1['height']+',0';

// for(entry in test_link_suffix){
// var Tentry=test_link_suffix[entry].split("=");
// load_vars[Tentry[0]]=Tentry[1];
// }
// treatment_loadin=load_vars["t"]
// sample_loadin=load_vars["s"]
// z_loadin=load_vars["z"]

// var base_link = window.location.origin+window.location.pathname
// push_link=base_link+"?t="+encodeURI(treatment_loadin)+"z="+sample_idx+"&c="+box_img1['x']+","+box_img1['y']+","+box_img1['width']+","+box_img1['height']


// var base_link = window.location.origin+window.location.pathname
// push_link=base_link+"?t="+encodeURI(treatment_loadin)+"z="+sample_idx+"&c="+box_img1['x']+","+box_img1['y']+","+box_img1['width']+","+box_img1['height']
// console.log(push_link)