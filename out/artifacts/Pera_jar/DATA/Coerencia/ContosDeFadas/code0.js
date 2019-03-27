gdjs.Scene1Code = {};
gdjs.Scene1Code.GDforwardButtonObjects1= [];
gdjs.Scene1Code.GDforwardButtonObjects2= [];
gdjs.Scene1Code.GDbackButtonObjects1= [];
gdjs.Scene1Code.GDbackButtonObjects2= [];
gdjs.Scene1Code.GDperaVereiraObjects1= [];
gdjs.Scene1Code.GDperaVereiraObjects2= [];
gdjs.Scene1Code.GDtextoObjects1= [];
gdjs.Scene1Code.GDtextoObjects2= [];
gdjs.Scene1Code.GDgoBackToAtivObjects1= [];
gdjs.Scene1Code.GDgoBackToAtivObjects2= [];
gdjs.Scene1Code.GDgoBackToTxtObjects1= [];
gdjs.Scene1Code.GDgoBackToTxtObjects2= [];
gdjs.Scene1Code.GDbackgroundObjects1= [];
gdjs.Scene1Code.GDbackgroundObjects2= [];
gdjs.Scene1Code.GDarrowObjects1= [];
gdjs.Scene1Code.GDarrowObjects2= [];
gdjs.Scene1Code.GDadminObjects1= [];
gdjs.Scene1Code.GDadminObjects2= [];

gdjs.Scene1Code.conditionTrue_0 = {val:false};
gdjs.Scene1Code.condition0IsTrue_0 = {val:false};
gdjs.Scene1Code.condition1IsTrue_0 = {val:false};
gdjs.Scene1Code.condition2IsTrue_0 = {val:false};
gdjs.Scene1Code.conditionTrue_1 = {val:false};
gdjs.Scene1Code.condition0IsTrue_1 = {val:false};
gdjs.Scene1Code.condition1IsTrue_1 = {val:false};
gdjs.Scene1Code.condition2IsTrue_1 = {val:false};


gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.Scene1Code.GDforwardButtonObjects1});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDadminObjects1Objects = Hashtable.newFrom({"admin": gdjs.Scene1Code.GDadminObjects1});gdjs.Scene1Code.eventsList0xb25a8 = function(runtimeScene) {

{

gdjs.Scene1Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
gdjs.Scene1Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDforwardButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDforwardButtonObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene2", false);
}{for(var i = 0, len = gdjs.Scene1Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDforwardButtonObjects1[i].setAnimation(1);
}
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "animateArrow1");
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
gdjs.Scene1Code.GDarrowObjects1.createFrom(runtimeScene.getObjects("arrow"));
{for(var i = 0, len = gdjs.Scene1Code.GDarrowObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDarrowObjects1[i].setOpacity(gdjs.Scene1Code.GDarrowObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 6, "animateArrow1");
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
{gdjs.Scene1Code.conditionTrue_1 = gdjs.Scene1Code.condition1IsTrue_0;
gdjs.Scene1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7319604);
}
}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
gdjs.Scene1Code.GDarrowObjects1.createFrom(runtimeScene.getObjects("arrow"));
{for(var i = 0, len = gdjs.Scene1Code.GDarrowObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDarrowObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDarrowObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDarrowObjects1[i].setOpacity(gdjs.Scene1Code.GDarrowObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 8, "animateArrow1");
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
{gdjs.Scene1Code.conditionTrue_1 = gdjs.Scene1Code.condition1IsTrue_0;
gdjs.Scene1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8105860);
}
}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
gdjs.Scene1Code.GDarrowObjects1.createFrom(runtimeScene.getObjects("arrow"));
{for(var i = 0, len = gdjs.Scene1Code.GDarrowObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDarrowObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDarrowObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDarrowObjects1[i].setOpacity(gdjs.Scene1Code.GDarrowObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 14, "animateArrow1");
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
gdjs.Scene1Code.GDarrowObjects1.createFrom(runtimeScene.getObjects("arrow"));
{for(var i = 0, len = gdjs.Scene1Code.GDarrowObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDarrowObjects1[i].setOpacity(80);
}
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
gdjs.Scene1Code.GDarrowObjects1.createFrom(runtimeScene.getObjects("arrow"));
{for(var i = 0, len = gdjs.Scene1Code.GDarrowObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDarrowObjects1[i].setOpacity(0);
}
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 10, "animateArrow1");
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
{gdjs.Scene1Code.conditionTrue_1 = gdjs.Scene1Code.condition1IsTrue_0;
gdjs.Scene1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6682308);
}
}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
gdjs.Scene1Code.GDarrowObjects1.createFrom(runtimeScene.getObjects("arrow"));
{for(var i = 0, len = gdjs.Scene1Code.GDarrowObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDarrowObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDarrowObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDarrowObjects1[i].setOpacity(gdjs.Scene1Code.GDarrowObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.Scene1Code.GDadminObjects1.createFrom(runtimeScene.getObjects("admin"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDadminObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
gdjs.Scene1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "admin", false);
}}

}


}; //End of gdjs.Scene1Code.eventsList0xb25a8


gdjs.Scene1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Scene1Code.GDforwardButtonObjects1.length = 0;
gdjs.Scene1Code.GDforwardButtonObjects2.length = 0;
gdjs.Scene1Code.GDbackButtonObjects1.length = 0;
gdjs.Scene1Code.GDbackButtonObjects2.length = 0;
gdjs.Scene1Code.GDperaVereiraObjects1.length = 0;
gdjs.Scene1Code.GDperaVereiraObjects2.length = 0;
gdjs.Scene1Code.GDtextoObjects1.length = 0;
gdjs.Scene1Code.GDtextoObjects2.length = 0;
gdjs.Scene1Code.GDgoBackToAtivObjects1.length = 0;
gdjs.Scene1Code.GDgoBackToAtivObjects2.length = 0;
gdjs.Scene1Code.GDgoBackToTxtObjects1.length = 0;
gdjs.Scene1Code.GDgoBackToTxtObjects2.length = 0;
gdjs.Scene1Code.GDbackgroundObjects1.length = 0;
gdjs.Scene1Code.GDbackgroundObjects2.length = 0;
gdjs.Scene1Code.GDarrowObjects1.length = 0;
gdjs.Scene1Code.GDarrowObjects2.length = 0;
gdjs.Scene1Code.GDadminObjects1.length = 0;
gdjs.Scene1Code.GDadminObjects2.length = 0;

gdjs.Scene1Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['Scene1Code'] = gdjs.Scene1Code;
