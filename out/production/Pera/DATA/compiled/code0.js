gdjs.CAPACode = {};
gdjs.CAPACode.GDforwardObjects1= [];
gdjs.CAPACode.GDforwardObjects2= [];
gdjs.CAPACode.GDbackObjects1= [];
gdjs.CAPACode.GDbackObjects2= [];
gdjs.CAPACode.GDCAPAObjects1= [];
gdjs.CAPACode.GDCAPAObjects2= [];
gdjs.CAPACode.GDarrowObjects1= [];
gdjs.CAPACode.GDarrowObjects2= [];

gdjs.CAPACode.conditionTrue_0 = {val:false};
gdjs.CAPACode.condition0IsTrue_0 = {val:false};
gdjs.CAPACode.condition1IsTrue_0 = {val:false};
gdjs.CAPACode.condition2IsTrue_0 = {val:false};
gdjs.CAPACode.condition3IsTrue_0 = {val:false};
gdjs.CAPACode.conditionTrue_1 = {val:false};
gdjs.CAPACode.condition0IsTrue_1 = {val:false};
gdjs.CAPACode.condition1IsTrue_1 = {val:false};
gdjs.CAPACode.condition2IsTrue_1 = {val:false};
gdjs.CAPACode.condition3IsTrue_1 = {val:false};


gdjs.CAPACode.mapOfGDgdjs_46CAPACode_46GDforwardObjects1Objects = Hashtable.newFrom({"forward": gdjs.CAPACode.GDforwardObjects1});gdjs.CAPACode.eventsList0xb25a8 = function(runtimeScene) {

{

gdjs.CAPACode.GDforwardObjects1.createFrom(runtimeScene.getObjects("forward"));

gdjs.CAPACode.condition0IsTrue_0.val = false;
gdjs.CAPACode.condition1IsTrue_0.val = false;
gdjs.CAPACode.condition2IsTrue_0.val = false;
{
gdjs.CAPACode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.CAPACode.condition0IsTrue_0.val ) {
{
gdjs.CAPACode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CAPACode.mapOfGDgdjs_46CAPACode_46GDforwardObjects1Objects, runtimeScene, true, false);
}if ( gdjs.CAPACode.condition1IsTrue_0.val ) {
{
{gdjs.CAPACode.conditionTrue_1 = gdjs.CAPACode.condition2IsTrue_0;
gdjs.CAPACode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6676756);
}
}}
}
if (gdjs.CAPACode.condition2IsTrue_0.val) {
{}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PARTICIPANTES", false);
}}

}


{


gdjs.CAPACode.condition0IsTrue_0.val = false;
{
gdjs.CAPACode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "animateArrow");
}if (gdjs.CAPACode.condition0IsTrue_0.val) {
gdjs.CAPACode.GDarrowObjects1.createFrom(runtimeScene.getObjects("arrow"));
{for(var i = 0, len = gdjs.CAPACode.GDarrowObjects1.length ;i < len;++i) {
    gdjs.CAPACode.GDarrowObjects1[i].setOpacity(gdjs.CAPACode.GDarrowObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.CAPACode.condition0IsTrue_0.val = false;
{
gdjs.CAPACode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "animateArrow");
}if (gdjs.CAPACode.condition0IsTrue_0.val) {
gdjs.CAPACode.GDCAPAObjects1.createFrom(runtimeScene.getObjects("CAPA"));
gdjs.CAPACode.GDforwardObjects1.createFrom(runtimeScene.getObjects("forward"));
{for(var i = 0, len = gdjs.CAPACode.GDCAPAObjects1.length ;i < len;++i) {
    gdjs.CAPACode.GDCAPAObjects1[i].setOpacity(gdjs.CAPACode.GDCAPAObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.CAPACode.GDforwardObjects1.length ;i < len;++i) {
    gdjs.CAPACode.GDforwardObjects1[i].setOpacity(gdjs.CAPACode.GDforwardObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.CAPACode.condition0IsTrue_0.val = false;
gdjs.CAPACode.condition1IsTrue_0.val = false;
{
gdjs.CAPACode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 6, "animateArrow");
}if ( gdjs.CAPACode.condition0IsTrue_0.val ) {
{
{gdjs.CAPACode.conditionTrue_1 = gdjs.CAPACode.condition1IsTrue_0;
gdjs.CAPACode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7138036);
}
}}
if (gdjs.CAPACode.condition1IsTrue_0.val) {
gdjs.CAPACode.GDarrowObjects1.createFrom(runtimeScene.getObjects("arrow"));
{for(var i = 0, len = gdjs.CAPACode.GDarrowObjects1.length ;i < len;++i) {
    gdjs.CAPACode.GDarrowObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.CAPACode.GDarrowObjects1.length ;i < len;++i) {
    gdjs.CAPACode.GDarrowObjects1[i].setOpacity(gdjs.CAPACode.GDarrowObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.CAPACode.condition0IsTrue_0.val = false;
gdjs.CAPACode.condition1IsTrue_0.val = false;
{
gdjs.CAPACode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 8, "animateArrow");
}if ( gdjs.CAPACode.condition0IsTrue_0.val ) {
{
{gdjs.CAPACode.conditionTrue_1 = gdjs.CAPACode.condition1IsTrue_0;
gdjs.CAPACode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7138844);
}
}}
if (gdjs.CAPACode.condition1IsTrue_0.val) {
gdjs.CAPACode.GDarrowObjects1.createFrom(runtimeScene.getObjects("arrow"));
{for(var i = 0, len = gdjs.CAPACode.GDarrowObjects1.length ;i < len;++i) {
    gdjs.CAPACode.GDarrowObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.CAPACode.GDarrowObjects1.length ;i < len;++i) {
    gdjs.CAPACode.GDarrowObjects1[i].setOpacity(gdjs.CAPACode.GDarrowObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.CAPACode.condition0IsTrue_0.val = false;
gdjs.CAPACode.condition1IsTrue_0.val = false;
{
gdjs.CAPACode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 10, "animateArrow");
}if ( gdjs.CAPACode.condition0IsTrue_0.val ) {
{
{gdjs.CAPACode.conditionTrue_1 = gdjs.CAPACode.condition1IsTrue_0;
gdjs.CAPACode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6770636);
}
}}
if (gdjs.CAPACode.condition1IsTrue_0.val) {
gdjs.CAPACode.GDarrowObjects1.createFrom(runtimeScene.getObjects("arrow"));
{for(var i = 0, len = gdjs.CAPACode.GDarrowObjects1.length ;i < len;++i) {
    gdjs.CAPACode.GDarrowObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.CAPACode.GDarrowObjects1.length ;i < len;++i) {
    gdjs.CAPACode.GDarrowObjects1[i].setOpacity(gdjs.CAPACode.GDarrowObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.CAPACode.condition0IsTrue_0.val = false;
gdjs.CAPACode.condition1IsTrue_0.val = false;
{
gdjs.CAPACode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 14, "animateArrow");
}if ( gdjs.CAPACode.condition0IsTrue_0.val ) {
{
{gdjs.CAPACode.conditionTrue_1 = gdjs.CAPACode.condition1IsTrue_0;
gdjs.CAPACode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6771404);
}
}}
if (gdjs.CAPACode.condition1IsTrue_0.val) {
gdjs.CAPACode.GDarrowObjects1.createFrom(runtimeScene.getObjects("arrow"));
{for(var i = 0, len = gdjs.CAPACode.GDarrowObjects1.length ;i < len;++i) {
    gdjs.CAPACode.GDarrowObjects1[i].setOpacity(80);
}
}}

}


{


gdjs.CAPACode.condition0IsTrue_0.val = false;
{
gdjs.CAPACode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.CAPACode.condition0IsTrue_0.val) {
gdjs.CAPACode.GDCAPAObjects1.createFrom(runtimeScene.getObjects("CAPA"));
gdjs.CAPACode.GDarrowObjects1.createFrom(runtimeScene.getObjects("arrow"));
gdjs.CAPACode.GDforwardObjects1.createFrom(runtimeScene.getObjects("forward"));
{for(var i = 0, len = gdjs.CAPACode.GDarrowObjects1.length ;i < len;++i) {
    gdjs.CAPACode.GDarrowObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.CAPACode.GDCAPAObjects1.length ;i < len;++i) {
    gdjs.CAPACode.GDCAPAObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.CAPACode.GDforwardObjects1.length ;i < len;++i) {
    gdjs.CAPACode.GDforwardObjects1[i].setOpacity(0);
}
}}

}


}; //End of gdjs.CAPACode.eventsList0xb25a8


gdjs.CAPACode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.CAPACode.GDforwardObjects1.length = 0;
gdjs.CAPACode.GDforwardObjects2.length = 0;
gdjs.CAPACode.GDbackObjects1.length = 0;
gdjs.CAPACode.GDbackObjects2.length = 0;
gdjs.CAPACode.GDCAPAObjects1.length = 0;
gdjs.CAPACode.GDCAPAObjects2.length = 0;
gdjs.CAPACode.GDarrowObjects1.length = 0;
gdjs.CAPACode.GDarrowObjects2.length = 0;

gdjs.CAPACode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['CAPACode'] = gdjs.CAPACode;
