gdjs.Scene14Code = {};
gdjs.Scene14Code.GDforwardButtonObjects1= [];
gdjs.Scene14Code.GDforwardButtonObjects2= [];
gdjs.Scene14Code.GDbackButtonObjects1= [];
gdjs.Scene14Code.GDbackButtonObjects2= [];
gdjs.Scene14Code.GDperaVereiraObjects1= [];
gdjs.Scene14Code.GDperaVereiraObjects2= [];
gdjs.Scene14Code.GDtextoObjects1= [];
gdjs.Scene14Code.GDtextoObjects2= [];
gdjs.Scene14Code.GDgoBackToAtivObjects1= [];
gdjs.Scene14Code.GDgoBackToAtivObjects2= [];
gdjs.Scene14Code.GDgoBackToTxtObjects1= [];
gdjs.Scene14Code.GDgoBackToTxtObjects2= [];
gdjs.Scene14Code.GDtelaObjects1= [];
gdjs.Scene14Code.GDtelaObjects2= [];
gdjs.Scene14Code.GDalt1Objects1= [];
gdjs.Scene14Code.GDalt1Objects2= [];
gdjs.Scene14Code.GDalt2Objects1= [];
gdjs.Scene14Code.GDalt2Objects2= [];
gdjs.Scene14Code.GDalt3Objects1= [];
gdjs.Scene14Code.GDalt3Objects2= [];
gdjs.Scene14Code.GDalt4Objects1= [];
gdjs.Scene14Code.GDalt4Objects2= [];
gdjs.Scene14Code.GDfieldObjects1= [];
gdjs.Scene14Code.GDfieldObjects2= [];

gdjs.Scene14Code.conditionTrue_0 = {val:false};
gdjs.Scene14Code.condition0IsTrue_0 = {val:false};
gdjs.Scene14Code.condition1IsTrue_0 = {val:false};
gdjs.Scene14Code.condition2IsTrue_0 = {val:false};
gdjs.Scene14Code.condition3IsTrue_0 = {val:false};
gdjs.Scene14Code.condition4IsTrue_0 = {val:false};
gdjs.Scene14Code.conditionTrue_1 = {val:false};
gdjs.Scene14Code.condition0IsTrue_1 = {val:false};
gdjs.Scene14Code.condition1IsTrue_1 = {val:false};
gdjs.Scene14Code.condition2IsTrue_1 = {val:false};
gdjs.Scene14Code.condition3IsTrue_1 = {val:false};
gdjs.Scene14Code.condition4IsTrue_1 = {val:false};


gdjs.Scene14Code.mapOfGDgdjs_46Scene14Code_46GDalt1Objects1Objects = Hashtable.newFrom({"alt1": gdjs.Scene14Code.GDalt1Objects1});gdjs.Scene14Code.mapOfGDgdjs_46Scene14Code_46GDfieldObjects1Objects = Hashtable.newFrom({"field": gdjs.Scene14Code.GDfieldObjects1});gdjs.Scene14Code.mapOfGDgdjs_46Scene14Code_46GDalt2Objects1Objects = Hashtable.newFrom({"alt2": gdjs.Scene14Code.GDalt2Objects1});gdjs.Scene14Code.mapOfGDgdjs_46Scene14Code_46GDfieldObjects1Objects = Hashtable.newFrom({"field": gdjs.Scene14Code.GDfieldObjects1});gdjs.Scene14Code.mapOfGDgdjs_46Scene14Code_46GDalt3Objects1Objects = Hashtable.newFrom({"alt3": gdjs.Scene14Code.GDalt3Objects1});gdjs.Scene14Code.mapOfGDgdjs_46Scene14Code_46GDfieldObjects1Objects = Hashtable.newFrom({"field": gdjs.Scene14Code.GDfieldObjects1});gdjs.Scene14Code.mapOfGDgdjs_46Scene14Code_46GDalt4Objects1Objects = Hashtable.newFrom({"alt4": gdjs.Scene14Code.GDalt4Objects1});gdjs.Scene14Code.mapOfGDgdjs_46Scene14Code_46GDfieldObjects1Objects = Hashtable.newFrom({"field": gdjs.Scene14Code.GDfieldObjects1});gdjs.Scene14Code.mapOfGDgdjs_46Scene14Code_46GDfieldObjects1Objects = Hashtable.newFrom({"field": gdjs.Scene14Code.GDfieldObjects1});gdjs.Scene14Code.mapOfGDgdjs_46Scene14Code_46GDgoBackToAtivObjects1Objects = Hashtable.newFrom({"goBackToAtiv": gdjs.Scene14Code.GDgoBackToAtivObjects1});gdjs.Scene14Code.mapOfGDgdjs_46Scene14Code_46GDgoBackToTxtObjects1Objects = Hashtable.newFrom({"goBackToTxt": gdjs.Scene14Code.GDgoBackToTxtObjects1});gdjs.Scene14Code.mapOfGDgdjs_46Scene14Code_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.Scene14Code.GDforwardButtonObjects1});gdjs.Scene14Code.mapOfGDgdjs_46Scene14Code_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.Scene14Code.GDbackButtonObjects1});gdjs.Scene14Code.mapOfGDgdjs_46Scene14Code_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.Scene14Code.GDforwardButtonObjects1});gdjs.Scene14Code.mapOfGDgdjs_46Scene14Code_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.Scene14Code.GDbackButtonObjects1});gdjs.Scene14Code.eventsList0xb25a8 = function(runtimeScene) {

{

gdjs.Scene14Code.GDalt1Objects1.createFrom(runtimeScene.getObjects("alt1"));
gdjs.Scene14Code.GDfieldObjects1.createFrom(runtimeScene.getObjects("field"));

gdjs.Scene14Code.condition0IsTrue_0.val = false;
gdjs.Scene14Code.condition1IsTrue_0.val = false;
{
gdjs.Scene14Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene14Code.mapOfGDgdjs_46Scene14Code_46GDalt1Objects1Objects, gdjs.Scene14Code.mapOfGDgdjs_46Scene14Code_46GDfieldObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Scene14Code.condition0IsTrue_0.val ) {
{
gdjs.Scene14Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Scene14Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene14Code.GDalt1Objects1 */
gdjs.Scene14Code.GDperaVereiraObjects1.createFrom(runtimeScene.getObjects("peraVereira"));
{for(var i = 0, len = gdjs.Scene14Code.GDperaVereiraObjects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDperaVereiraObjects1[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.Scene14Code.GDalt1Objects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDalt1Objects1[i].setPosition(160,352);
}
}}

}


{

gdjs.Scene14Code.GDalt2Objects1.createFrom(runtimeScene.getObjects("alt2"));
gdjs.Scene14Code.GDfieldObjects1.createFrom(runtimeScene.getObjects("field"));

gdjs.Scene14Code.condition0IsTrue_0.val = false;
gdjs.Scene14Code.condition1IsTrue_0.val = false;
{
gdjs.Scene14Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene14Code.mapOfGDgdjs_46Scene14Code_46GDalt2Objects1Objects, gdjs.Scene14Code.mapOfGDgdjs_46Scene14Code_46GDfieldObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Scene14Code.condition0IsTrue_0.val ) {
{
gdjs.Scene14Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Scene14Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene14Code.GDalt2Objects1 */
gdjs.Scene14Code.GDperaVereiraObjects1.createFrom(runtimeScene.getObjects("peraVereira"));
{for(var i = 0, len = gdjs.Scene14Code.GDperaVereiraObjects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDperaVereiraObjects1[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.Scene14Code.GDalt2Objects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDalt2Objects1[i].setPosition(160,448);
}
}}

}


{

gdjs.Scene14Code.GDalt3Objects1.createFrom(runtimeScene.getObjects("alt3"));
gdjs.Scene14Code.GDfieldObjects1.createFrom(runtimeScene.getObjects("field"));

gdjs.Scene14Code.condition0IsTrue_0.val = false;
gdjs.Scene14Code.condition1IsTrue_0.val = false;
{
gdjs.Scene14Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene14Code.mapOfGDgdjs_46Scene14Code_46GDalt3Objects1Objects, gdjs.Scene14Code.mapOfGDgdjs_46Scene14Code_46GDfieldObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Scene14Code.condition0IsTrue_0.val ) {
{
gdjs.Scene14Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Scene14Code.condition1IsTrue_0.val) {
gdjs.Scene14Code.GDperaVereiraObjects1.createFrom(runtimeScene.getObjects("peraVereira"));
{for(var i = 0, len = gdjs.Scene14Code.GDperaVereiraObjects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDperaVereiraObjects1[i].setAnimation(5);
}
}}

}


{

gdjs.Scene14Code.GDalt4Objects1.createFrom(runtimeScene.getObjects("alt4"));
gdjs.Scene14Code.GDfieldObjects1.createFrom(runtimeScene.getObjects("field"));

gdjs.Scene14Code.condition0IsTrue_0.val = false;
gdjs.Scene14Code.condition1IsTrue_0.val = false;
{
gdjs.Scene14Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene14Code.mapOfGDgdjs_46Scene14Code_46GDalt4Objects1Objects, gdjs.Scene14Code.mapOfGDgdjs_46Scene14Code_46GDfieldObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Scene14Code.condition0IsTrue_0.val ) {
{
gdjs.Scene14Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Scene14Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene14Code.GDalt4Objects1 */
gdjs.Scene14Code.GDperaVereiraObjects1.createFrom(runtimeScene.getObjects("peraVereira"));
{for(var i = 0, len = gdjs.Scene14Code.GDperaVereiraObjects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDperaVereiraObjects1[i].setAnimation(3);
}
}{for(var i = 0, len = gdjs.Scene14Code.GDalt4Objects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDalt4Objects1[i].setPosition(160,640);
}
}}

}


{

gdjs.Scene14Code.GDperaVereiraObjects1.createFrom(runtimeScene.getObjects("peraVereira"));

gdjs.Scene14Code.condition0IsTrue_0.val = false;
gdjs.Scene14Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene14Code.GDperaVereiraObjects1.length;i<l;++i) {
    if ( gdjs.Scene14Code.GDperaVereiraObjects1[i].getAnimation() == 5 ) {
        gdjs.Scene14Code.condition0IsTrue_0.val = true;
        gdjs.Scene14Code.GDperaVereiraObjects1[k] = gdjs.Scene14Code.GDperaVereiraObjects1[i];
        ++k;
    }
}
gdjs.Scene14Code.GDperaVereiraObjects1.length = k;}if ( gdjs.Scene14Code.condition0IsTrue_0.val ) {
{
gdjs.Scene14Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "delay");
}}
if (gdjs.Scene14Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene15", false);
}}

}


{

gdjs.Scene14Code.GDfieldObjects1.createFrom(runtimeScene.getObjects("field"));

gdjs.Scene14Code.condition0IsTrue_0.val = false;
gdjs.Scene14Code.condition1IsTrue_0.val = false;
{
gdjs.Scene14Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Scene14Code.condition0IsTrue_0.val ) {
{
gdjs.Scene14Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene14Code.mapOfGDgdjs_46Scene14Code_46GDfieldObjects1Objects, runtimeScene, true, true);
}}
if (gdjs.Scene14Code.condition1IsTrue_0.val) {
gdjs.Scene14Code.GDalt1Objects1.createFrom(runtimeScene.getObjects("alt1"));
gdjs.Scene14Code.GDalt2Objects1.createFrom(runtimeScene.getObjects("alt2"));
gdjs.Scene14Code.GDalt3Objects1.createFrom(runtimeScene.getObjects("alt3"));
gdjs.Scene14Code.GDalt4Objects1.createFrom(runtimeScene.getObjects("alt4"));
{for(var i = 0, len = gdjs.Scene14Code.GDalt1Objects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDalt1Objects1[i].setPosition(160,352);
}
}{for(var i = 0, len = gdjs.Scene14Code.GDalt2Objects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDalt2Objects1[i].setPosition(160,448);
}
}{for(var i = 0, len = gdjs.Scene14Code.GDalt3Objects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDalt3Objects1[i].setPosition(160,544);
}
}{for(var i = 0, len = gdjs.Scene14Code.GDalt4Objects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDalt4Objects1[i].setPosition(160,640);
}
}}

}


{


gdjs.Scene14Code.condition0IsTrue_0.val = false;
{
gdjs.Scene14Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Scene14Code.condition0IsTrue_0.val) {
gdjs.Scene14Code.GDperaVereiraObjects1.createFrom(runtimeScene.getObjects("peraVereira"));
gdjs.Scene14Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));
{for(var i = 0, len = gdjs.Scene14Code.GDperaVereiraObjects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDperaVereiraObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Scene14Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDtextoObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.Scene14Code.GDgoBackToAtivObjects1.createFrom(runtimeScene.getObjects("goBackToAtiv"));

gdjs.Scene14Code.condition0IsTrue_0.val = false;
gdjs.Scene14Code.condition1IsTrue_0.val = false;
{
gdjs.Scene14Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Scene14Code.condition0IsTrue_0.val ) {
{
gdjs.Scene14Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene14Code.mapOfGDgdjs_46Scene14Code_46GDgoBackToAtivObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.Scene14Code.condition1IsTrue_0.val) {
gdjs.Scene14Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.Scene14Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
/* Reuse gdjs.Scene14Code.GDgoBackToAtivObjects1 */
gdjs.Scene14Code.GDgoBackToTxtObjects1.createFrom(runtimeScene.getObjects("goBackToTxt"));
gdjs.Scene14Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));
{for(var i = 0, len = gdjs.Scene14Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDtextoObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Scene14Code.GDgoBackToAtivObjects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDgoBackToAtivObjects1[i].setPosition(-(1000),-(1000));
}
}{for(var i = 0, len = gdjs.Scene14Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDforwardButtonObjects1[i].setPosition(-(2015),598);
}
}{for(var i = 0, len = gdjs.Scene14Code.GDgoBackToAtivObjects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDgoBackToAtivObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Scene14Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDbackButtonObjects1[i].setPosition(-(416),603);
}
}{for(var i = 0, len = gdjs.Scene14Code.GDgoBackToTxtObjects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDgoBackToTxtObjects1[i].setPosition(7,646);
}
}}

}


{

gdjs.Scene14Code.GDgoBackToTxtObjects1.createFrom(runtimeScene.getObjects("goBackToTxt"));

gdjs.Scene14Code.condition0IsTrue_0.val = false;
gdjs.Scene14Code.condition1IsTrue_0.val = false;
{
gdjs.Scene14Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene14Code.mapOfGDgdjs_46Scene14Code_46GDgoBackToTxtObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene14Code.condition0IsTrue_0.val ) {
{
gdjs.Scene14Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene14Code.condition1IsTrue_0.val) {
gdjs.Scene14Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.Scene14Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
gdjs.Scene14Code.GDgoBackToAtivObjects1.createFrom(runtimeScene.getObjects("goBackToAtiv"));
/* Reuse gdjs.Scene14Code.GDgoBackToTxtObjects1 */
gdjs.Scene14Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));
{for(var i = 0, len = gdjs.Scene14Code.GDgoBackToAtivObjects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDgoBackToAtivObjects1[i].setPosition(416,640);
}
}{for(var i = 0, len = gdjs.Scene14Code.GDgoBackToTxtObjects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDgoBackToTxtObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Scene14Code.GDgoBackToTxtObjects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDgoBackToTxtObjects1[i].setPosition(-(1000),-(1000));
}
}{for(var i = 0, len = gdjs.Scene14Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDforwardButtonObjects1[i].setPosition(843,603);
}
}{for(var i = 0, len = gdjs.Scene14Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDbackButtonObjects1[i].setPosition(32,603);
}
}{for(var i = 0, len = gdjs.Scene14Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDtextoObjects1[i].setOpacity(255);
}
}}

}


{

gdjs.Scene14Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
gdjs.Scene14Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.Scene14Code.condition0IsTrue_0.val = false;
gdjs.Scene14Code.condition1IsTrue_0.val = false;
gdjs.Scene14Code.condition2IsTrue_0.val = false;
gdjs.Scene14Code.condition3IsTrue_0.val = false;
{
gdjs.Scene14Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene14Code.mapOfGDgdjs_46Scene14Code_46GDforwardButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene14Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene14Code.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.Scene14Code.GDtextoObjects1[i].getAnimation() != 5 ) {
        gdjs.Scene14Code.condition1IsTrue_0.val = true;
        gdjs.Scene14Code.GDtextoObjects1[k] = gdjs.Scene14Code.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.Scene14Code.GDtextoObjects1.length = k;}if ( gdjs.Scene14Code.condition1IsTrue_0.val ) {
{
gdjs.Scene14Code.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Scene14Code.condition2IsTrue_0.val ) {
{
{gdjs.Scene14Code.conditionTrue_1 = gdjs.Scene14Code.condition3IsTrue_0;
gdjs.Scene14Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9212900);
}
}}
}
}
if (gdjs.Scene14Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Scene14Code.GDforwardButtonObjects1 */
/* Reuse gdjs.Scene14Code.GDtextoObjects1 */
{for(var i = 0, len = gdjs.Scene14Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDforwardButtonObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Scene14Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDtextoObjects1[i].setAnimation(gdjs.Scene14Code.GDtextoObjects1[i].getAnimation() + (1));
}
}}

}


{

gdjs.Scene14Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.Scene14Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.Scene14Code.condition0IsTrue_0.val = false;
gdjs.Scene14Code.condition1IsTrue_0.val = false;
gdjs.Scene14Code.condition2IsTrue_0.val = false;
gdjs.Scene14Code.condition3IsTrue_0.val = false;
{
gdjs.Scene14Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Scene14Code.condition0IsTrue_0.val ) {
{
gdjs.Scene14Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene14Code.mapOfGDgdjs_46Scene14Code_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene14Code.condition1IsTrue_0.val ) {
{
{gdjs.Scene14Code.conditionTrue_1 = gdjs.Scene14Code.condition2IsTrue_0;
gdjs.Scene14Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7408684);
}
}if ( gdjs.Scene14Code.condition2IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene14Code.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.Scene14Code.GDtextoObjects1[i].getAnimation() != 0 ) {
        gdjs.Scene14Code.condition3IsTrue_0.val = true;
        gdjs.Scene14Code.GDtextoObjects1[k] = gdjs.Scene14Code.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.Scene14Code.GDtextoObjects1.length = k;}}
}
}
if (gdjs.Scene14Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Scene14Code.GDbackButtonObjects1 */
/* Reuse gdjs.Scene14Code.GDtextoObjects1 */
{for(var i = 0, len = gdjs.Scene14Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDbackButtonObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Scene14Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDtextoObjects1[i].setAnimation(gdjs.Scene14Code.GDtextoObjects1[i].getAnimation() - (1));
}
}}

}


{

gdjs.Scene14Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));

gdjs.Scene14Code.condition0IsTrue_0.val = false;
gdjs.Scene14Code.condition1IsTrue_0.val = false;
{
gdjs.Scene14Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.Scene14Code.condition0IsTrue_0.val ) {
{
gdjs.Scene14Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene14Code.mapOfGDgdjs_46Scene14Code_46GDforwardButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.Scene14Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene14Code.GDforwardButtonObjects1 */
{for(var i = 0, len = gdjs.Scene14Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDforwardButtonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Scene14Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));

gdjs.Scene14Code.condition0IsTrue_0.val = false;
gdjs.Scene14Code.condition1IsTrue_0.val = false;
{
gdjs.Scene14Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.Scene14Code.condition0IsTrue_0.val ) {
{
gdjs.Scene14Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene14Code.mapOfGDgdjs_46Scene14Code_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.Scene14Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene14Code.GDbackButtonObjects1 */
{for(var i = 0, len = gdjs.Scene14Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.Scene14Code.GDbackButtonObjects1[i].setAnimation(0);
}
}}

}


}; //End of gdjs.Scene14Code.eventsList0xb25a8


gdjs.Scene14Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Scene14Code.GDforwardButtonObjects1.length = 0;
gdjs.Scene14Code.GDforwardButtonObjects2.length = 0;
gdjs.Scene14Code.GDbackButtonObjects1.length = 0;
gdjs.Scene14Code.GDbackButtonObjects2.length = 0;
gdjs.Scene14Code.GDperaVereiraObjects1.length = 0;
gdjs.Scene14Code.GDperaVereiraObjects2.length = 0;
gdjs.Scene14Code.GDtextoObjects1.length = 0;
gdjs.Scene14Code.GDtextoObjects2.length = 0;
gdjs.Scene14Code.GDgoBackToAtivObjects1.length = 0;
gdjs.Scene14Code.GDgoBackToAtivObjects2.length = 0;
gdjs.Scene14Code.GDgoBackToTxtObjects1.length = 0;
gdjs.Scene14Code.GDgoBackToTxtObjects2.length = 0;
gdjs.Scene14Code.GDtelaObjects1.length = 0;
gdjs.Scene14Code.GDtelaObjects2.length = 0;
gdjs.Scene14Code.GDalt1Objects1.length = 0;
gdjs.Scene14Code.GDalt1Objects2.length = 0;
gdjs.Scene14Code.GDalt2Objects1.length = 0;
gdjs.Scene14Code.GDalt2Objects2.length = 0;
gdjs.Scene14Code.GDalt3Objects1.length = 0;
gdjs.Scene14Code.GDalt3Objects2.length = 0;
gdjs.Scene14Code.GDalt4Objects1.length = 0;
gdjs.Scene14Code.GDalt4Objects2.length = 0;
gdjs.Scene14Code.GDfieldObjects1.length = 0;
gdjs.Scene14Code.GDfieldObjects2.length = 0;

gdjs.Scene14Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['Scene14Code'] = gdjs.Scene14Code;
