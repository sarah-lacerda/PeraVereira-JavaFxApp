gdjs.capaCode = {};
gdjs.capaCode.GDbuttonNextObjects1= [];
gdjs.capaCode.GDbuttonNextObjects2= [];
gdjs.capaCode.GDbuttonBackObjects1= [];
gdjs.capaCode.GDbuttonBackObjects2= [];
gdjs.capaCode.GDtextObjects1= [];
gdjs.capaCode.GDtextObjects2= [];
gdjs.capaCode.GDperaObjects1= [];
gdjs.capaCode.GDperaObjects2= [];
gdjs.capaCode.GDperaSaysObjects1= [];
gdjs.capaCode.GDperaSaysObjects2= [];
gdjs.capaCode.GDcapaObjects1= [];
gdjs.capaCode.GDcapaObjects2= [];
gdjs.capaCode.GDarrowObjects1= [];
gdjs.capaCode.GDarrowObjects2= [];

gdjs.capaCode.conditionTrue_0 = {val:false};
gdjs.capaCode.condition0IsTrue_0 = {val:false};
gdjs.capaCode.condition1IsTrue_0 = {val:false};
gdjs.capaCode.condition2IsTrue_0 = {val:false};
gdjs.capaCode.condition3IsTrue_0 = {val:false};
gdjs.capaCode.conditionTrue_1 = {val:false};
gdjs.capaCode.condition0IsTrue_1 = {val:false};
gdjs.capaCode.condition1IsTrue_1 = {val:false};
gdjs.capaCode.condition2IsTrue_1 = {val:false};
gdjs.capaCode.condition3IsTrue_1 = {val:false};


gdjs.capaCode.mapOfGDgdjs_46capaCode_46GDbuttonNextObjects1Objects = Hashtable.newFrom({"buttonNext": gdjs.capaCode.GDbuttonNextObjects1});gdjs.capaCode.eventsList0xb25a8 = function(runtimeScene) {

{

gdjs.capaCode.GDbuttonNextObjects1.createFrom(runtimeScene.getObjects("buttonNext"));

gdjs.capaCode.condition0IsTrue_0.val = false;
gdjs.capaCode.condition1IsTrue_0.val = false;
gdjs.capaCode.condition2IsTrue_0.val = false;
{
gdjs.capaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.capaCode.condition0IsTrue_0.val ) {
{
gdjs.capaCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.capaCode.mapOfGDgdjs_46capaCode_46GDbuttonNextObjects1Objects, runtimeScene, true, false);
}if ( gdjs.capaCode.condition1IsTrue_0.val ) {
{
{gdjs.capaCode.conditionTrue_1 = gdjs.capaCode.condition2IsTrue_0;
gdjs.capaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8477948);
}
}}
}
if (gdjs.capaCode.condition2IsTrue_0.val) {
/* Reuse gdjs.capaCode.GDbuttonNextObjects1 */
{for(var i = 0, len = gdjs.capaCode.GDbuttonNextObjects1.length ;i < len;++i) {
    gdjs.capaCode.GDbuttonNextObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "texto", false);
}}

}


{


gdjs.capaCode.condition0IsTrue_0.val = false;
{
gdjs.capaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "animateArrow");
}if (gdjs.capaCode.condition0IsTrue_0.val) {
gdjs.capaCode.GDarrowObjects1.createFrom(runtimeScene.getObjects("arrow"));
{for(var i = 0, len = gdjs.capaCode.GDarrowObjects1.length ;i < len;++i) {
    gdjs.capaCode.GDarrowObjects1[i].setOpacity(gdjs.capaCode.GDarrowObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.capaCode.condition0IsTrue_0.val = false;
gdjs.capaCode.condition1IsTrue_0.val = false;
{
gdjs.capaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 6, "animateArrow");
}if ( gdjs.capaCode.condition0IsTrue_0.val ) {
{
{gdjs.capaCode.conditionTrue_1 = gdjs.capaCode.condition1IsTrue_0;
gdjs.capaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8460892);
}
}}
if (gdjs.capaCode.condition1IsTrue_0.val) {
gdjs.capaCode.GDarrowObjects1.createFrom(runtimeScene.getObjects("arrow"));
{for(var i = 0, len = gdjs.capaCode.GDarrowObjects1.length ;i < len;++i) {
    gdjs.capaCode.GDarrowObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.capaCode.GDarrowObjects1.length ;i < len;++i) {
    gdjs.capaCode.GDarrowObjects1[i].setOpacity(gdjs.capaCode.GDarrowObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.capaCode.condition0IsTrue_0.val = false;
gdjs.capaCode.condition1IsTrue_0.val = false;
{
gdjs.capaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 8, "animateArrow");
}if ( gdjs.capaCode.condition0IsTrue_0.val ) {
{
{gdjs.capaCode.conditionTrue_1 = gdjs.capaCode.condition1IsTrue_0;
gdjs.capaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8461636);
}
}}
if (gdjs.capaCode.condition1IsTrue_0.val) {
gdjs.capaCode.GDarrowObjects1.createFrom(runtimeScene.getObjects("arrow"));
{for(var i = 0, len = gdjs.capaCode.GDarrowObjects1.length ;i < len;++i) {
    gdjs.capaCode.GDarrowObjects1[i].setOpacity(gdjs.capaCode.GDarrowObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.capaCode.GDarrowObjects1.length ;i < len;++i) {
    gdjs.capaCode.GDarrowObjects1[i].setOpacity(0);
}
}}

}


{


gdjs.capaCode.condition0IsTrue_0.val = false;
gdjs.capaCode.condition1IsTrue_0.val = false;
{
gdjs.capaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 10, "animateArrow");
}if ( gdjs.capaCode.condition0IsTrue_0.val ) {
{
{gdjs.capaCode.conditionTrue_1 = gdjs.capaCode.condition1IsTrue_0;
gdjs.capaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8470396);
}
}}
if (gdjs.capaCode.condition1IsTrue_0.val) {
gdjs.capaCode.GDarrowObjects1.createFrom(runtimeScene.getObjects("arrow"));
{for(var i = 0, len = gdjs.capaCode.GDarrowObjects1.length ;i < len;++i) {
    gdjs.capaCode.GDarrowObjects1[i].setOpacity(gdjs.capaCode.GDarrowObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.capaCode.GDarrowObjects1.length ;i < len;++i) {
    gdjs.capaCode.GDarrowObjects1[i].setOpacity(0);
}
}}

}


{


gdjs.capaCode.condition0IsTrue_0.val = false;
gdjs.capaCode.condition1IsTrue_0.val = false;
{
gdjs.capaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 14, "animateArrow");
}if ( gdjs.capaCode.condition0IsTrue_0.val ) {
{
{gdjs.capaCode.conditionTrue_1 = gdjs.capaCode.condition1IsTrue_0;
gdjs.capaCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7262564);
}
}}
if (gdjs.capaCode.condition1IsTrue_0.val) {
gdjs.capaCode.GDarrowObjects1.createFrom(runtimeScene.getObjects("arrow"));
{for(var i = 0, len = gdjs.capaCode.GDarrowObjects1.length ;i < len;++i) {
    gdjs.capaCode.GDarrowObjects1[i].setOpacity(80);
}
}}

}


{


gdjs.capaCode.condition0IsTrue_0.val = false;
{
gdjs.capaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.capaCode.condition0IsTrue_0.val) {
gdjs.capaCode.GDarrowObjects1.createFrom(runtimeScene.getObjects("arrow"));
{for(var i = 0, len = gdjs.capaCode.GDarrowObjects1.length ;i < len;++i) {
    gdjs.capaCode.GDarrowObjects1[i].setOpacity(0);
}
}}

}


}; //End of gdjs.capaCode.eventsList0xb25a8


gdjs.capaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.capaCode.GDbuttonNextObjects1.length = 0;
gdjs.capaCode.GDbuttonNextObjects2.length = 0;
gdjs.capaCode.GDbuttonBackObjects1.length = 0;
gdjs.capaCode.GDbuttonBackObjects2.length = 0;
gdjs.capaCode.GDtextObjects1.length = 0;
gdjs.capaCode.GDtextObjects2.length = 0;
gdjs.capaCode.GDperaObjects1.length = 0;
gdjs.capaCode.GDperaObjects2.length = 0;
gdjs.capaCode.GDperaSaysObjects1.length = 0;
gdjs.capaCode.GDperaSaysObjects2.length = 0;
gdjs.capaCode.GDcapaObjects1.length = 0;
gdjs.capaCode.GDcapaObjects2.length = 0;
gdjs.capaCode.GDarrowObjects1.length = 0;
gdjs.capaCode.GDarrowObjects2.length = 0;

gdjs.capaCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['capaCode'] = gdjs.capaCode;
