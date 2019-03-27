gdjs.Scene10Code = {};
gdjs.Scene10Code.GDforwardButtonObjects1= [];
gdjs.Scene10Code.GDforwardButtonObjects2= [];
gdjs.Scene10Code.GDbackButtonObjects1= [];
gdjs.Scene10Code.GDbackButtonObjects2= [];
gdjs.Scene10Code.GDperaVereiraObjects1= [];
gdjs.Scene10Code.GDperaVereiraObjects2= [];
gdjs.Scene10Code.GDtextoObjects1= [];
gdjs.Scene10Code.GDtextoObjects2= [];
gdjs.Scene10Code.GDgoBackToAtivObjects1= [];
gdjs.Scene10Code.GDgoBackToAtivObjects2= [];
gdjs.Scene10Code.GDgoBackToTxtObjects1= [];
gdjs.Scene10Code.GDgoBackToTxtObjects2= [];
gdjs.Scene10Code.GDtelaObjects1= [];
gdjs.Scene10Code.GDtelaObjects2= [];
gdjs.Scene10Code.GDwrongAnswer1Objects1= [];
gdjs.Scene10Code.GDwrongAnswer1Objects2= [];
gdjs.Scene10Code.GDwrongAnswer2Objects1= [];
gdjs.Scene10Code.GDwrongAnswer2Objects2= [];
gdjs.Scene10Code.GDwrongAnswer3Objects1= [];
gdjs.Scene10Code.GDwrongAnswer3Objects2= [];
gdjs.Scene10Code.GDcorrectAnswerObjects1= [];
gdjs.Scene10Code.GDcorrectAnswerObjects2= [];

gdjs.Scene10Code.conditionTrue_0 = {val:false};
gdjs.Scene10Code.condition0IsTrue_0 = {val:false};
gdjs.Scene10Code.condition1IsTrue_0 = {val:false};
gdjs.Scene10Code.condition2IsTrue_0 = {val:false};
gdjs.Scene10Code.condition3IsTrue_0 = {val:false};
gdjs.Scene10Code.condition4IsTrue_0 = {val:false};
gdjs.Scene10Code.conditionTrue_1 = {val:false};
gdjs.Scene10Code.condition0IsTrue_1 = {val:false};
gdjs.Scene10Code.condition1IsTrue_1 = {val:false};
gdjs.Scene10Code.condition2IsTrue_1 = {val:false};
gdjs.Scene10Code.condition3IsTrue_1 = {val:false};
gdjs.Scene10Code.condition4IsTrue_1 = {val:false};


gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDwrongAnswer1Objects1Objects = Hashtable.newFrom({"wrongAnswer1": gdjs.Scene10Code.GDwrongAnswer1Objects1});gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDwrongAnswer2Objects1Objects = Hashtable.newFrom({"wrongAnswer2": gdjs.Scene10Code.GDwrongAnswer2Objects1});gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDgoBackToAtivObjects1Objects = Hashtable.newFrom({"goBackToAtiv": gdjs.Scene10Code.GDgoBackToAtivObjects1});gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDgoBackToTxtObjects1Objects = Hashtable.newFrom({"goBackToTxt": gdjs.Scene10Code.GDgoBackToTxtObjects1});gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.Scene10Code.GDforwardButtonObjects1});gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.Scene10Code.GDbackButtonObjects1});gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.Scene10Code.GDforwardButtonObjects1});gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.Scene10Code.GDbackButtonObjects1});gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDwrongAnswer3Objects1Objects = Hashtable.newFrom({"wrongAnswer3": gdjs.Scene10Code.GDwrongAnswer3Objects1});gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDcorrectAnswerObjects1Objects = Hashtable.newFrom({"correctAnswer": gdjs.Scene10Code.GDcorrectAnswerObjects1});gdjs.Scene10Code.eventsList0xb25a8 = function(runtimeScene) {

{

gdjs.Scene10Code.GDperaVereiraObjects1.createFrom(runtimeScene.getObjects("peraVereira"));

gdjs.Scene10Code.condition0IsTrue_0.val = false;
gdjs.Scene10Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene10Code.GDperaVereiraObjects1.length;i<l;++i) {
    if ( gdjs.Scene10Code.GDperaVereiraObjects1[i].getAnimation() == 3 ) {
        gdjs.Scene10Code.condition0IsTrue_0.val = true;
        gdjs.Scene10Code.GDperaVereiraObjects1[k] = gdjs.Scene10Code.GDperaVereiraObjects1[i];
        ++k;
    }
}
gdjs.Scene10Code.GDperaVereiraObjects1.length = k;}if ( gdjs.Scene10Code.condition0IsTrue_0.val ) {
{
gdjs.Scene10Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "timeSinceSadVereira");
}}
if (gdjs.Scene10Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene10Code.GDperaVereiraObjects1 */
{for(var i = 0, len = gdjs.Scene10Code.GDperaVereiraObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDperaVereiraObjects1[i].setAnimation(4);
}
}}

}


{


gdjs.Scene10Code.condition0IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if (gdjs.Scene10Code.condition0IsTrue_0.val) {
gdjs.Scene10Code.GDcorrectAnswerObjects1.createFrom(runtimeScene.getObjects("correctAnswer"));
gdjs.Scene10Code.GDwrongAnswer1Objects1.createFrom(runtimeScene.getObjects("wrongAnswer1"));
gdjs.Scene10Code.GDwrongAnswer2Objects1.createFrom(runtimeScene.getObjects("wrongAnswer2"));
gdjs.Scene10Code.GDwrongAnswer3Objects1.createFrom(runtimeScene.getObjects("wrongAnswer3"));
{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer1Objects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer2Objects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer3Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer3Objects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDcorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDcorrectAnswerObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Scene10Code.GDwrongAnswer1Objects1.createFrom(runtimeScene.getObjects("wrongAnswer1"));

gdjs.Scene10Code.condition0IsTrue_0.val = false;
gdjs.Scene10Code.condition1IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDwrongAnswer1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene10Code.condition0IsTrue_0.val ) {
{
gdjs.Scene10Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene10Code.condition1IsTrue_0.val) {
gdjs.Scene10Code.GDperaVereiraObjects1.createFrom(runtimeScene.getObjects("peraVereira"));
/* Reuse gdjs.Scene10Code.GDwrongAnswer1Objects1 */
{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer1Objects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDperaVereiraObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDperaVereiraObjects1[i].setAnimation(3);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timeSinceSadVereira");
}}

}


{

gdjs.Scene10Code.GDwrongAnswer2Objects1.createFrom(runtimeScene.getObjects("wrongAnswer2"));

gdjs.Scene10Code.condition0IsTrue_0.val = false;
gdjs.Scene10Code.condition1IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDwrongAnswer2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene10Code.condition0IsTrue_0.val ) {
{
gdjs.Scene10Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene10Code.condition1IsTrue_0.val) {
gdjs.Scene10Code.GDperaVereiraObjects1.createFrom(runtimeScene.getObjects("peraVereira"));
/* Reuse gdjs.Scene10Code.GDwrongAnswer2Objects1 */
{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer2Objects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDperaVereiraObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDperaVereiraObjects1[i].setAnimation(3);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timeSinceSadVereira");
}}

}


{

gdjs.Scene10Code.GDgoBackToAtivObjects1.createFrom(runtimeScene.getObjects("goBackToAtiv"));

gdjs.Scene10Code.condition0IsTrue_0.val = false;
gdjs.Scene10Code.condition1IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDgoBackToAtivObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene10Code.condition0IsTrue_0.val ) {
{
gdjs.Scene10Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene10Code.condition1IsTrue_0.val) {
gdjs.Scene10Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.Scene10Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
/* Reuse gdjs.Scene10Code.GDgoBackToAtivObjects1 */
gdjs.Scene10Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));
{for(var i = 0, len = gdjs.Scene10Code.GDgoBackToAtivObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDgoBackToAtivObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDtextoObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDforwardButtonObjects1[i].setPosition(-(2015),598);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDbackButtonObjects1[i].setPosition(-(416),603);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDgoBackToAtivObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDgoBackToAtivObjects1[i].setPosition(-(1000),-(1000));
}
}}

}


{

gdjs.Scene10Code.GDgoBackToTxtObjects1.createFrom(runtimeScene.getObjects("goBackToTxt"));

gdjs.Scene10Code.condition0IsTrue_0.val = false;
gdjs.Scene10Code.condition1IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDgoBackToTxtObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene10Code.condition0IsTrue_0.val ) {
{
gdjs.Scene10Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene10Code.condition1IsTrue_0.val) {
gdjs.Scene10Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.Scene10Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
gdjs.Scene10Code.GDgoBackToAtivObjects1.createFrom(runtimeScene.getObjects("goBackToAtiv"));
/* Reuse gdjs.Scene10Code.GDgoBackToTxtObjects1 */
gdjs.Scene10Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));
{for(var i = 0, len = gdjs.Scene10Code.GDgoBackToTxtObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDgoBackToTxtObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDtextoObjects1[i].setOpacity(255);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDbackButtonObjects1[i].setPosition(32,603);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDforwardButtonObjects1[i].setPosition(843,603);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDgoBackToAtivObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDgoBackToAtivObjects1[i].setPosition(416,640);
}
}}

}


{

gdjs.Scene10Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));

gdjs.Scene10Code.condition0IsTrue_0.val = false;
gdjs.Scene10Code.condition1IsTrue_0.val = false;
gdjs.Scene10Code.condition2IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDforwardButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene10Code.condition0IsTrue_0.val ) {
{
gdjs.Scene10Code.condition1IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.Scene10Code.condition1IsTrue_0.val ) {
{
{gdjs.Scene10Code.conditionTrue_1 = gdjs.Scene10Code.condition2IsTrue_0;
gdjs.Scene10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9212404);
}
}}
}
if (gdjs.Scene10Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Scene10Code.GDforwardButtonObjects1 */
{for(var i = 0, len = gdjs.Scene10Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDforwardButtonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Scene10Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));

gdjs.Scene10Code.condition0IsTrue_0.val = false;
gdjs.Scene10Code.condition1IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene10Code.condition0IsTrue_0.val ) {
{
gdjs.Scene10Code.condition1IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}}
if (gdjs.Scene10Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene10Code.GDbackButtonObjects1 */
{for(var i = 0, len = gdjs.Scene10Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDbackButtonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Scene10Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
gdjs.Scene10Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.Scene10Code.condition0IsTrue_0.val = false;
gdjs.Scene10Code.condition1IsTrue_0.val = false;
gdjs.Scene10Code.condition2IsTrue_0.val = false;
gdjs.Scene10Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene10Code.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.Scene10Code.GDtextoObjects1[i].getAnimation() != 5 ) {
        gdjs.Scene10Code.condition0IsTrue_0.val = true;
        gdjs.Scene10Code.GDtextoObjects1[k] = gdjs.Scene10Code.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.Scene10Code.GDtextoObjects1.length = k;}if ( gdjs.Scene10Code.condition0IsTrue_0.val ) {
{
gdjs.Scene10Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDforwardButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene10Code.condition1IsTrue_0.val ) {
{
gdjs.Scene10Code.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Scene10Code.condition2IsTrue_0.val ) {
{
{gdjs.Scene10Code.conditionTrue_1 = gdjs.Scene10Code.condition3IsTrue_0;
gdjs.Scene10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6705132);
}
}}
}
}
if (gdjs.Scene10Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Scene10Code.GDforwardButtonObjects1 */
/* Reuse gdjs.Scene10Code.GDtextoObjects1 */
{for(var i = 0, len = gdjs.Scene10Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDforwardButtonObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDtextoObjects1[i].setAnimation(gdjs.Scene10Code.GDtextoObjects1[i].getAnimation() + (1));
}
}}

}


{

gdjs.Scene10Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.Scene10Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.Scene10Code.condition0IsTrue_0.val = false;
gdjs.Scene10Code.condition1IsTrue_0.val = false;
gdjs.Scene10Code.condition2IsTrue_0.val = false;
gdjs.Scene10Code.condition3IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene10Code.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.Scene10Code.GDtextoObjects1[i].getAnimation() != 0 ) {
        gdjs.Scene10Code.condition0IsTrue_0.val = true;
        gdjs.Scene10Code.GDtextoObjects1[k] = gdjs.Scene10Code.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.Scene10Code.GDtextoObjects1.length = k;}if ( gdjs.Scene10Code.condition0IsTrue_0.val ) {
{
gdjs.Scene10Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene10Code.condition1IsTrue_0.val ) {
{
gdjs.Scene10Code.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Scene10Code.condition2IsTrue_0.val ) {
{
{gdjs.Scene10Code.conditionTrue_1 = gdjs.Scene10Code.condition3IsTrue_0;
gdjs.Scene10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6706244);
}
}}
}
}
if (gdjs.Scene10Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Scene10Code.GDbackButtonObjects1 */
/* Reuse gdjs.Scene10Code.GDtextoObjects1 */
{for(var i = 0, len = gdjs.Scene10Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDbackButtonObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDtextoObjects1[i].setAnimation(gdjs.Scene10Code.GDtextoObjects1[i].getAnimation() - (1));
}
}}

}


{

gdjs.Scene10Code.GDwrongAnswer3Objects1.createFrom(runtimeScene.getObjects("wrongAnswer3"));

gdjs.Scene10Code.condition0IsTrue_0.val = false;
gdjs.Scene10Code.condition1IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDwrongAnswer3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene10Code.condition0IsTrue_0.val ) {
{
gdjs.Scene10Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene10Code.condition1IsTrue_0.val) {
gdjs.Scene10Code.GDperaVereiraObjects1.createFrom(runtimeScene.getObjects("peraVereira"));
/* Reuse gdjs.Scene10Code.GDwrongAnswer3Objects1 */
{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer3Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer3Objects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDperaVereiraObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDperaVereiraObjects1[i].setAnimation(3);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timeSinceSadVereira");
}}

}


{

gdjs.Scene10Code.GDcorrectAnswerObjects1.createFrom(runtimeScene.getObjects("correctAnswer"));

gdjs.Scene10Code.condition0IsTrue_0.val = false;
gdjs.Scene10Code.condition1IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene10Code.mapOfGDgdjs_46Scene10Code_46GDcorrectAnswerObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene10Code.condition0IsTrue_0.val ) {
{
gdjs.Scene10Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene10Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene10Code.GDcorrectAnswerObjects1 */
gdjs.Scene10Code.GDperaVereiraObjects1.createFrom(runtimeScene.getObjects("peraVereira"));
{for(var i = 0, len = gdjs.Scene10Code.GDcorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDcorrectAnswerObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDperaVereiraObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDperaVereiraObjects1[i].setAnimation(5);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gotRightAns");
}}

}


{

gdjs.Scene10Code.GDperaVereiraObjects1.createFrom(runtimeScene.getObjects("peraVereira"));

gdjs.Scene10Code.condition0IsTrue_0.val = false;
gdjs.Scene10Code.condition1IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "gotRightAns");
}if ( gdjs.Scene10Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene10Code.GDperaVereiraObjects1.length;i<l;++i) {
    if ( gdjs.Scene10Code.GDperaVereiraObjects1[i].getAnimation() == 5 ) {
        gdjs.Scene10Code.condition1IsTrue_0.val = true;
        gdjs.Scene10Code.GDperaVereiraObjects1[k] = gdjs.Scene10Code.GDperaVereiraObjects1[i];
        ++k;
    }
}
gdjs.Scene10Code.GDperaVereiraObjects1.length = k;}}
if (gdjs.Scene10Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene11", false);
}}

}


{


gdjs.Scene10Code.condition0IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if (gdjs.Scene10Code.condition0IsTrue_0.val) {
gdjs.Scene10Code.GDcorrectAnswerObjects1.createFrom(runtimeScene.getObjects("correctAnswer"));
gdjs.Scene10Code.GDwrongAnswer1Objects1.createFrom(runtimeScene.getObjects("wrongAnswer1"));
gdjs.Scene10Code.GDwrongAnswer2Objects1.createFrom(runtimeScene.getObjects("wrongAnswer2"));
gdjs.Scene10Code.GDwrongAnswer3Objects1.createFrom(runtimeScene.getObjects("wrongAnswer3"));
{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer1Objects1[i].setPosition(256,192);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer2Objects1[i].setPosition(256,320);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer3Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer3Objects1[i].setPosition(256,448);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDcorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDcorrectAnswerObjects1[i].setPosition(256,576);
}
}}

}


{


gdjs.Scene10Code.condition0IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs.Scene10Code.condition0IsTrue_0.val) {
gdjs.Scene10Code.GDcorrectAnswerObjects1.createFrom(runtimeScene.getObjects("correctAnswer"));
gdjs.Scene10Code.GDwrongAnswer1Objects1.createFrom(runtimeScene.getObjects("wrongAnswer1"));
gdjs.Scene10Code.GDwrongAnswer2Objects1.createFrom(runtimeScene.getObjects("wrongAnswer2"));
gdjs.Scene10Code.GDwrongAnswer3Objects1.createFrom(runtimeScene.getObjects("wrongAnswer3"));
{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer2Objects1[i].setPosition(256,192);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer1Objects1[i].setPosition(256,320);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer3Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer3Objects1[i].setPosition(256,448);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDcorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDcorrectAnswerObjects1[i].setPosition(256,576);
}
}}

}


{


gdjs.Scene10Code.condition0IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if (gdjs.Scene10Code.condition0IsTrue_0.val) {
gdjs.Scene10Code.GDcorrectAnswerObjects1.createFrom(runtimeScene.getObjects("correctAnswer"));
gdjs.Scene10Code.GDwrongAnswer1Objects1.createFrom(runtimeScene.getObjects("wrongAnswer1"));
gdjs.Scene10Code.GDwrongAnswer2Objects1.createFrom(runtimeScene.getObjects("wrongAnswer2"));
gdjs.Scene10Code.GDwrongAnswer3Objects1.createFrom(runtimeScene.getObjects("wrongAnswer3"));
{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer1Objects1[i].setPosition(256,192);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer3Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer3Objects1[i].setPosition(256,320);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer2Objects1[i].setPosition(256,448);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDcorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDcorrectAnswerObjects1[i].setPosition(256,576);
}
}}

}


{


gdjs.Scene10Code.condition0IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if (gdjs.Scene10Code.condition0IsTrue_0.val) {
gdjs.Scene10Code.GDcorrectAnswerObjects1.createFrom(runtimeScene.getObjects("correctAnswer"));
gdjs.Scene10Code.GDwrongAnswer1Objects1.createFrom(runtimeScene.getObjects("wrongAnswer1"));
gdjs.Scene10Code.GDwrongAnswer2Objects1.createFrom(runtimeScene.getObjects("wrongAnswer2"));
gdjs.Scene10Code.GDwrongAnswer3Objects1.createFrom(runtimeScene.getObjects("wrongAnswer3"));
{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer3Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer3Objects1[i].setPosition(256,192);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer2Objects1[i].setPosition(256,320);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer1Objects1[i].setPosition(256,448);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDcorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDcorrectAnswerObjects1[i].setPosition(256,576);
}
}}

}


{


gdjs.Scene10Code.condition0IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}if (gdjs.Scene10Code.condition0IsTrue_0.val) {
gdjs.Scene10Code.GDcorrectAnswerObjects1.createFrom(runtimeScene.getObjects("correctAnswer"));
gdjs.Scene10Code.GDwrongAnswer1Objects1.createFrom(runtimeScene.getObjects("wrongAnswer1"));
gdjs.Scene10Code.GDwrongAnswer2Objects1.createFrom(runtimeScene.getObjects("wrongAnswer2"));
gdjs.Scene10Code.GDwrongAnswer3Objects1.createFrom(runtimeScene.getObjects("wrongAnswer3"));
{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer2Objects1[i].setPosition(256,192);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer3Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer3Objects1[i].setPosition(256,320);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer1Objects1[i].setPosition(256,448);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDcorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDcorrectAnswerObjects1[i].setPosition(256,576);
}
}}

}


{


gdjs.Scene10Code.condition0IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
}if (gdjs.Scene10Code.condition0IsTrue_0.val) {
gdjs.Scene10Code.GDcorrectAnswerObjects1.createFrom(runtimeScene.getObjects("correctAnswer"));
gdjs.Scene10Code.GDwrongAnswer1Objects1.createFrom(runtimeScene.getObjects("wrongAnswer1"));
gdjs.Scene10Code.GDwrongAnswer2Objects1.createFrom(runtimeScene.getObjects("wrongAnswer2"));
gdjs.Scene10Code.GDwrongAnswer3Objects1.createFrom(runtimeScene.getObjects("wrongAnswer3"));
{for(var i = 0, len = gdjs.Scene10Code.GDcorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDcorrectAnswerObjects1[i].setPosition(256,192);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer3Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer3Objects1[i].setPosition(256,320);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer2Objects1[i].setPosition(256,448);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer1Objects1[i].setPosition(256,576);
}
}}

}


{


gdjs.Scene10Code.condition0IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 6;
}if (gdjs.Scene10Code.condition0IsTrue_0.val) {
gdjs.Scene10Code.GDcorrectAnswerObjects1.createFrom(runtimeScene.getObjects("correctAnswer"));
gdjs.Scene10Code.GDwrongAnswer1Objects1.createFrom(runtimeScene.getObjects("wrongAnswer1"));
gdjs.Scene10Code.GDwrongAnswer2Objects1.createFrom(runtimeScene.getObjects("wrongAnswer2"));
gdjs.Scene10Code.GDwrongAnswer3Objects1.createFrom(runtimeScene.getObjects("wrongAnswer3"));
{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer3Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer3Objects1[i].setPosition(256,192);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDcorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDcorrectAnswerObjects1[i].setPosition(256,320);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer2Objects1[i].setPosition(256,448);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer1Objects1[i].setPosition(256,576);
}
}}

}


{


gdjs.Scene10Code.condition0IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 7;
}if (gdjs.Scene10Code.condition0IsTrue_0.val) {
gdjs.Scene10Code.GDcorrectAnswerObjects1.createFrom(runtimeScene.getObjects("correctAnswer"));
gdjs.Scene10Code.GDwrongAnswer1Objects1.createFrom(runtimeScene.getObjects("wrongAnswer1"));
gdjs.Scene10Code.GDwrongAnswer2Objects1.createFrom(runtimeScene.getObjects("wrongAnswer2"));
gdjs.Scene10Code.GDwrongAnswer3Objects1.createFrom(runtimeScene.getObjects("wrongAnswer3"));
{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer2Objects1[i].setPosition(256,192);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDcorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDcorrectAnswerObjects1[i].setPosition(256,320);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer3Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer3Objects1[i].setPosition(256,448);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer1Objects1[i].setPosition(256,576);
}
}}

}


{


gdjs.Scene10Code.condition0IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 8;
}if (gdjs.Scene10Code.condition0IsTrue_0.val) {
gdjs.Scene10Code.GDcorrectAnswerObjects1.createFrom(runtimeScene.getObjects("correctAnswer"));
gdjs.Scene10Code.GDwrongAnswer1Objects1.createFrom(runtimeScene.getObjects("wrongAnswer1"));
gdjs.Scene10Code.GDwrongAnswer2Objects1.createFrom(runtimeScene.getObjects("wrongAnswer2"));
gdjs.Scene10Code.GDwrongAnswer3Objects1.createFrom(runtimeScene.getObjects("wrongAnswer3"));
{for(var i = 0, len = gdjs.Scene10Code.GDcorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDcorrectAnswerObjects1[i].setPosition(256,192);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer1Objects1[i].setPosition(256,320);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer2Objects1[i].setPosition(256,448);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer3Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer3Objects1[i].setPosition(256,576);
}
}}

}


{


gdjs.Scene10Code.condition0IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 9;
}if (gdjs.Scene10Code.condition0IsTrue_0.val) {
gdjs.Scene10Code.GDcorrectAnswerObjects1.createFrom(runtimeScene.getObjects("correctAnswer"));
gdjs.Scene10Code.GDwrongAnswer1Objects1.createFrom(runtimeScene.getObjects("wrongAnswer1"));
gdjs.Scene10Code.GDwrongAnswer2Objects1.createFrom(runtimeScene.getObjects("wrongAnswer2"));
gdjs.Scene10Code.GDwrongAnswer3Objects1.createFrom(runtimeScene.getObjects("wrongAnswer3"));
{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer1Objects1[i].setPosition(256,192);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDcorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDcorrectAnswerObjects1[i].setPosition(256,320);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer2Objects1[i].setPosition(256,448);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer3Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer3Objects1[i].setPosition(256,576);
}
}}

}


{


gdjs.Scene10Code.condition0IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 10;
}if (gdjs.Scene10Code.condition0IsTrue_0.val) {
gdjs.Scene10Code.GDcorrectAnswerObjects1.createFrom(runtimeScene.getObjects("correctAnswer"));
gdjs.Scene10Code.GDwrongAnswer1Objects1.createFrom(runtimeScene.getObjects("wrongAnswer1"));
gdjs.Scene10Code.GDwrongAnswer2Objects1.createFrom(runtimeScene.getObjects("wrongAnswer2"));
gdjs.Scene10Code.GDwrongAnswer3Objects1.createFrom(runtimeScene.getObjects("wrongAnswer3"));
{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer2Objects1[i].setPosition(256,192);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDcorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDcorrectAnswerObjects1[i].setPosition(256,320);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer1Objects1[i].setPosition(256,448);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer3Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer3Objects1[i].setPosition(256,576);
}
}}

}


{


gdjs.Scene10Code.condition0IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 11;
}if (gdjs.Scene10Code.condition0IsTrue_0.val) {
gdjs.Scene10Code.GDcorrectAnswerObjects1.createFrom(runtimeScene.getObjects("correctAnswer"));
gdjs.Scene10Code.GDwrongAnswer1Objects1.createFrom(runtimeScene.getObjects("wrongAnswer1"));
gdjs.Scene10Code.GDwrongAnswer2Objects1.createFrom(runtimeScene.getObjects("wrongAnswer2"));
gdjs.Scene10Code.GDwrongAnswer3Objects1.createFrom(runtimeScene.getObjects("wrongAnswer3"));
{for(var i = 0, len = gdjs.Scene10Code.GDcorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDcorrectAnswerObjects1[i].setPosition(256,192);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer2Objects1[i].setPosition(256,320);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer1Objects1[i].setPosition(256,448);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer3Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer3Objects1[i].setPosition(256,576);
}
}}

}


{


gdjs.Scene10Code.condition0IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 12;
}if (gdjs.Scene10Code.condition0IsTrue_0.val) {
gdjs.Scene10Code.GDcorrectAnswerObjects1.createFrom(runtimeScene.getObjects("correctAnswer"));
gdjs.Scene10Code.GDwrongAnswer1Objects1.createFrom(runtimeScene.getObjects("wrongAnswer1"));
gdjs.Scene10Code.GDwrongAnswer2Objects1.createFrom(runtimeScene.getObjects("wrongAnswer2"));
gdjs.Scene10Code.GDwrongAnswer3Objects1.createFrom(runtimeScene.getObjects("wrongAnswer3"));
{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer1Objects1[i].setPosition(256,192);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer2Objects1[i].setPosition(256,320);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDcorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDcorrectAnswerObjects1[i].setPosition(256,448);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer3Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer3Objects1[i].setPosition(256,576);
}
}}

}


{


gdjs.Scene10Code.condition0IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 13;
}if (gdjs.Scene10Code.condition0IsTrue_0.val) {
gdjs.Scene10Code.GDcorrectAnswerObjects1.createFrom(runtimeScene.getObjects("correctAnswer"));
gdjs.Scene10Code.GDwrongAnswer1Objects1.createFrom(runtimeScene.getObjects("wrongAnswer1"));
gdjs.Scene10Code.GDwrongAnswer2Objects1.createFrom(runtimeScene.getObjects("wrongAnswer2"));
gdjs.Scene10Code.GDwrongAnswer3Objects1.createFrom(runtimeScene.getObjects("wrongAnswer3"));
{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer2Objects1[i].setPosition(256,192);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer1Objects1[i].setPosition(256,320);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDcorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDcorrectAnswerObjects1[i].setPosition(256,448);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer3Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer3Objects1[i].setPosition(256,576);
}
}}

}


{


gdjs.Scene10Code.condition0IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 14;
}if (gdjs.Scene10Code.condition0IsTrue_0.val) {
gdjs.Scene10Code.GDcorrectAnswerObjects1.createFrom(runtimeScene.getObjects("correctAnswer"));
gdjs.Scene10Code.GDwrongAnswer1Objects1.createFrom(runtimeScene.getObjects("wrongAnswer1"));
gdjs.Scene10Code.GDwrongAnswer2Objects1.createFrom(runtimeScene.getObjects("wrongAnswer2"));
gdjs.Scene10Code.GDwrongAnswer3Objects1.createFrom(runtimeScene.getObjects("wrongAnswer3"));
{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer3Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer3Objects1[i].setPosition(256,192);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer1Objects1[i].setPosition(256,320);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDcorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDcorrectAnswerObjects1[i].setPosition(256,448);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer2Objects1[i].setPosition(256,576);
}
}}

}


{


gdjs.Scene10Code.condition0IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 15;
}if (gdjs.Scene10Code.condition0IsTrue_0.val) {
gdjs.Scene10Code.GDcorrectAnswerObjects1.createFrom(runtimeScene.getObjects("correctAnswer"));
gdjs.Scene10Code.GDwrongAnswer1Objects1.createFrom(runtimeScene.getObjects("wrongAnswer1"));
gdjs.Scene10Code.GDwrongAnswer2Objects1.createFrom(runtimeScene.getObjects("wrongAnswer2"));
gdjs.Scene10Code.GDwrongAnswer3Objects1.createFrom(runtimeScene.getObjects("wrongAnswer3"));
{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer1Objects1[i].setPosition(256,192);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer3Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer3Objects1[i].setPosition(256,320);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDcorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDcorrectAnswerObjects1[i].setPosition(256,448);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer2Objects1[i].setPosition(256,576);
}
}}

}


{


gdjs.Scene10Code.condition0IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 16;
}if (gdjs.Scene10Code.condition0IsTrue_0.val) {
gdjs.Scene10Code.GDcorrectAnswerObjects1.createFrom(runtimeScene.getObjects("correctAnswer"));
gdjs.Scene10Code.GDwrongAnswer1Objects1.createFrom(runtimeScene.getObjects("wrongAnswer1"));
gdjs.Scene10Code.GDwrongAnswer2Objects1.createFrom(runtimeScene.getObjects("wrongAnswer2"));
gdjs.Scene10Code.GDwrongAnswer3Objects1.createFrom(runtimeScene.getObjects("wrongAnswer3"));
{for(var i = 0, len = gdjs.Scene10Code.GDcorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDcorrectAnswerObjects1[i].setPosition(256,192);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer3Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer3Objects1[i].setPosition(256,320);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer1Objects1[i].setPosition(256,448);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer2Objects1[i].setPosition(256,576);
}
}}

}


{


gdjs.Scene10Code.condition0IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 17;
}if (gdjs.Scene10Code.condition0IsTrue_0.val) {
gdjs.Scene10Code.GDcorrectAnswerObjects1.createFrom(runtimeScene.getObjects("correctAnswer"));
gdjs.Scene10Code.GDwrongAnswer1Objects1.createFrom(runtimeScene.getObjects("wrongAnswer1"));
gdjs.Scene10Code.GDwrongAnswer2Objects1.createFrom(runtimeScene.getObjects("wrongAnswer2"));
gdjs.Scene10Code.GDwrongAnswer3Objects1.createFrom(runtimeScene.getObjects("wrongAnswer3"));
{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer3Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer3Objects1[i].setPosition(256,192);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDcorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDcorrectAnswerObjects1[i].setPosition(256,320);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer1Objects1[i].setPosition(256,448);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer2Objects1[i].setPosition(256,576);
}
}}

}


{


gdjs.Scene10Code.condition0IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 18;
}if (gdjs.Scene10Code.condition0IsTrue_0.val) {
gdjs.Scene10Code.GDcorrectAnswerObjects1.createFrom(runtimeScene.getObjects("correctAnswer"));
gdjs.Scene10Code.GDwrongAnswer1Objects1.createFrom(runtimeScene.getObjects("wrongAnswer1"));
gdjs.Scene10Code.GDwrongAnswer2Objects1.createFrom(runtimeScene.getObjects("wrongAnswer2"));
gdjs.Scene10Code.GDwrongAnswer3Objects1.createFrom(runtimeScene.getObjects("wrongAnswer3"));
{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer1Objects1[i].setPosition(256,192);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDcorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDcorrectAnswerObjects1[i].setPosition(256,320);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer3Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer3Objects1[i].setPosition(256,448);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer2Objects1[i].setPosition(256,576);
}
}}

}


{


gdjs.Scene10Code.condition0IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 19;
}if (gdjs.Scene10Code.condition0IsTrue_0.val) {
gdjs.Scene10Code.GDcorrectAnswerObjects1.createFrom(runtimeScene.getObjects("correctAnswer"));
gdjs.Scene10Code.GDwrongAnswer1Objects1.createFrom(runtimeScene.getObjects("wrongAnswer1"));
gdjs.Scene10Code.GDwrongAnswer2Objects1.createFrom(runtimeScene.getObjects("wrongAnswer2"));
gdjs.Scene10Code.GDwrongAnswer3Objects1.createFrom(runtimeScene.getObjects("wrongAnswer3"));
{for(var i = 0, len = gdjs.Scene10Code.GDcorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDcorrectAnswerObjects1[i].setPosition(256,192);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer1Objects1[i].setPosition(256,320);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer3Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer3Objects1[i].setPosition(256,448);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer2Objects1[i].setPosition(256,576);
}
}}

}


{


gdjs.Scene10Code.condition0IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 20;
}if (gdjs.Scene10Code.condition0IsTrue_0.val) {
gdjs.Scene10Code.GDcorrectAnswerObjects1.createFrom(runtimeScene.getObjects("correctAnswer"));
gdjs.Scene10Code.GDwrongAnswer1Objects1.createFrom(runtimeScene.getObjects("wrongAnswer1"));
gdjs.Scene10Code.GDwrongAnswer2Objects1.createFrom(runtimeScene.getObjects("wrongAnswer2"));
gdjs.Scene10Code.GDwrongAnswer3Objects1.createFrom(runtimeScene.getObjects("wrongAnswer3"));
{for(var i = 0, len = gdjs.Scene10Code.GDcorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDcorrectAnswerObjects1[i].setPosition(256,192);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer2Objects1[i].setPosition(256,320);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer3Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer3Objects1[i].setPosition(256,448);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer1Objects1[i].setPosition(256,576);
}
}}

}


{


gdjs.Scene10Code.condition0IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 21;
}if (gdjs.Scene10Code.condition0IsTrue_0.val) {
gdjs.Scene10Code.GDcorrectAnswerObjects1.createFrom(runtimeScene.getObjects("correctAnswer"));
gdjs.Scene10Code.GDwrongAnswer1Objects1.createFrom(runtimeScene.getObjects("wrongAnswer1"));
gdjs.Scene10Code.GDwrongAnswer2Objects1.createFrom(runtimeScene.getObjects("wrongAnswer2"));
gdjs.Scene10Code.GDwrongAnswer3Objects1.createFrom(runtimeScene.getObjects("wrongAnswer3"));
{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer2Objects1[i].setPosition(256,192);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDcorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDcorrectAnswerObjects1[i].setPosition(256,320);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer3Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer3Objects1[i].setPosition(256,448);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer1Objects1[i].setPosition(256,576);
}
}}

}


{


gdjs.Scene10Code.condition0IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 22;
}if (gdjs.Scene10Code.condition0IsTrue_0.val) {
gdjs.Scene10Code.GDcorrectAnswerObjects1.createFrom(runtimeScene.getObjects("correctAnswer"));
gdjs.Scene10Code.GDwrongAnswer1Objects1.createFrom(runtimeScene.getObjects("wrongAnswer1"));
gdjs.Scene10Code.GDwrongAnswer2Objects1.createFrom(runtimeScene.getObjects("wrongAnswer2"));
gdjs.Scene10Code.GDwrongAnswer3Objects1.createFrom(runtimeScene.getObjects("wrongAnswer3"));
{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer2Objects1[i].setPosition(256,192);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer3Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer3Objects1[i].setPosition(256,320);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDcorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDcorrectAnswerObjects1[i].setPosition(256,448);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer1Objects1[i].setPosition(256,576);
}
}}

}


{


gdjs.Scene10Code.condition0IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 23;
}if (gdjs.Scene10Code.condition0IsTrue_0.val) {
gdjs.Scene10Code.GDcorrectAnswerObjects1.createFrom(runtimeScene.getObjects("correctAnswer"));
gdjs.Scene10Code.GDwrongAnswer1Objects1.createFrom(runtimeScene.getObjects("wrongAnswer1"));
gdjs.Scene10Code.GDwrongAnswer2Objects1.createFrom(runtimeScene.getObjects("wrongAnswer2"));
gdjs.Scene10Code.GDwrongAnswer3Objects1.createFrom(runtimeScene.getObjects("wrongAnswer3"));
{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer3Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer3Objects1[i].setPosition(256,192);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer2Objects1[i].setPosition(256,320);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDcorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDcorrectAnswerObjects1[i].setPosition(256,448);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer1Objects1[i].setPosition(256,576);
}
}}

}


{

gdjs.Scene10Code.GDcorrectAnswerObjects1.createFrom(runtimeScene.getObjects("correctAnswer"));

gdjs.Scene10Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene10Code.GDcorrectAnswerObjects1.length;i<l;++i) {
    if ( gdjs.Scene10Code.GDcorrectAnswerObjects1[i].getOpacity() < 255 ) {
        gdjs.Scene10Code.condition0IsTrue_0.val = true;
        gdjs.Scene10Code.GDcorrectAnswerObjects1[k] = gdjs.Scene10Code.GDcorrectAnswerObjects1[i];
        ++k;
    }
}
gdjs.Scene10Code.GDcorrectAnswerObjects1.length = k;}if (gdjs.Scene10Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene10Code.GDcorrectAnswerObjects1 */
gdjs.Scene10Code.GDperaVereiraObjects1.createFrom(runtimeScene.getObjects("peraVereira"));
gdjs.Scene10Code.GDwrongAnswer1Objects1.createFrom(runtimeScene.getObjects("wrongAnswer1"));
gdjs.Scene10Code.GDwrongAnswer2Objects1.createFrom(runtimeScene.getObjects("wrongAnswer2"));
gdjs.Scene10Code.GDwrongAnswer3Objects1.createFrom(runtimeScene.getObjects("wrongAnswer3"));
{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer1Objects1[i].setOpacity(gdjs.Scene10Code.GDwrongAnswer1Objects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer2Objects1[i].setOpacity(gdjs.Scene10Code.GDwrongAnswer2Objects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer3Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer3Objects1[i].setOpacity(gdjs.Scene10Code.GDwrongAnswer3Objects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Scene10Code.GDcorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDcorrectAnswerObjects1[i].setOpacity(gdjs.Scene10Code.GDcorrectAnswerObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Scene10Code.GDperaVereiraObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDperaVereiraObjects1[i].setOpacity(gdjs.Scene10Code.GDperaVereiraObjects1[i].getOpacity() + (999 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.Scene10Code.condition0IsTrue_0.val = false;
{
gdjs.Scene10Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Scene10Code.condition0IsTrue_0.val) {
gdjs.Scene10Code.GDcorrectAnswerObjects1.createFrom(runtimeScene.getObjects("correctAnswer"));
gdjs.Scene10Code.GDperaVereiraObjects1.createFrom(runtimeScene.getObjects("peraVereira"));
gdjs.Scene10Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));
gdjs.Scene10Code.GDwrongAnswer1Objects1.createFrom(runtimeScene.getObjects("wrongAnswer1"));
gdjs.Scene10Code.GDwrongAnswer2Objects1.createFrom(runtimeScene.getObjects("wrongAnswer2"));
gdjs.Scene10Code.GDwrongAnswer3Objects1.createFrom(runtimeScene.getObjects("wrongAnswer3"));
{}{for(var i = 0, len = gdjs.Scene10Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDtextoObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer1Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer1Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer2Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer2Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDwrongAnswer3Objects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDwrongAnswer3Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDcorrectAnswerObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDcorrectAnswerObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Scene10Code.GDperaVereiraObjects1.length ;i < len;++i) {
    gdjs.Scene10Code.GDperaVereiraObjects1[i].setOpacity(0);
}
}}

}


}; //End of gdjs.Scene10Code.eventsList0xb25a8


gdjs.Scene10Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Scene10Code.GDforwardButtonObjects1.length = 0;
gdjs.Scene10Code.GDforwardButtonObjects2.length = 0;
gdjs.Scene10Code.GDbackButtonObjects1.length = 0;
gdjs.Scene10Code.GDbackButtonObjects2.length = 0;
gdjs.Scene10Code.GDperaVereiraObjects1.length = 0;
gdjs.Scene10Code.GDperaVereiraObjects2.length = 0;
gdjs.Scene10Code.GDtextoObjects1.length = 0;
gdjs.Scene10Code.GDtextoObjects2.length = 0;
gdjs.Scene10Code.GDgoBackToAtivObjects1.length = 0;
gdjs.Scene10Code.GDgoBackToAtivObjects2.length = 0;
gdjs.Scene10Code.GDgoBackToTxtObjects1.length = 0;
gdjs.Scene10Code.GDgoBackToTxtObjects2.length = 0;
gdjs.Scene10Code.GDtelaObjects1.length = 0;
gdjs.Scene10Code.GDtelaObjects2.length = 0;
gdjs.Scene10Code.GDwrongAnswer1Objects1.length = 0;
gdjs.Scene10Code.GDwrongAnswer1Objects2.length = 0;
gdjs.Scene10Code.GDwrongAnswer2Objects1.length = 0;
gdjs.Scene10Code.GDwrongAnswer2Objects2.length = 0;
gdjs.Scene10Code.GDwrongAnswer3Objects1.length = 0;
gdjs.Scene10Code.GDwrongAnswer3Objects2.length = 0;
gdjs.Scene10Code.GDcorrectAnswerObjects1.length = 0;
gdjs.Scene10Code.GDcorrectAnswerObjects2.length = 0;

gdjs.Scene10Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['Scene10Code'] = gdjs.Scene10Code;
