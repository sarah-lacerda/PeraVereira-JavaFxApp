gdjs.adminCode = {};
gdjs.adminCode.GDforwardButtonObjects1= [];
gdjs.adminCode.GDforwardButtonObjects2= [];
gdjs.adminCode.GDbackButtonObjects1= [];
gdjs.adminCode.GDbackButtonObjects2= [];
gdjs.adminCode.GDperaVereiraObjects1= [];
gdjs.adminCode.GDperaVereiraObjects2= [];
gdjs.adminCode.GDtextoObjects1= [];
gdjs.adminCode.GDtextoObjects2= [];
gdjs.adminCode.GDgoBackToAtivObjects1= [];
gdjs.adminCode.GDgoBackToAtivObjects2= [];
gdjs.adminCode.GDgoBackToTxtObjects1= [];
gdjs.adminCode.GDgoBackToTxtObjects2= [];
gdjs.adminCode.GDatv1Objects1= [];
gdjs.adminCode.GDatv1Objects2= [];
gdjs.adminCode.GDatv2Objects1= [];
gdjs.adminCode.GDatv2Objects2= [];
gdjs.adminCode.GDatv3Objects1= [];
gdjs.adminCode.GDatv3Objects2= [];
gdjs.adminCode.GDatv4Objects1= [];
gdjs.adminCode.GDatv4Objects2= [];

gdjs.adminCode.conditionTrue_0 = {val:false};
gdjs.adminCode.condition0IsTrue_0 = {val:false};
gdjs.adminCode.condition1IsTrue_0 = {val:false};
gdjs.adminCode.condition2IsTrue_0 = {val:false};


gdjs.adminCode.mapOfGDgdjs_46adminCode_46GDatv1Objects1Objects = Hashtable.newFrom({"atv1": gdjs.adminCode.GDatv1Objects1});gdjs.adminCode.mapOfGDgdjs_46adminCode_46GDatv2Objects1Objects = Hashtable.newFrom({"atv2": gdjs.adminCode.GDatv2Objects1});gdjs.adminCode.mapOfGDgdjs_46adminCode_46GDatv3Objects1Objects = Hashtable.newFrom({"atv3": gdjs.adminCode.GDatv3Objects1});gdjs.adminCode.mapOfGDgdjs_46adminCode_46GDatv4Objects1Objects = Hashtable.newFrom({"atv4": gdjs.adminCode.GDatv4Objects1});gdjs.adminCode.mapOfGDgdjs_46adminCode_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.adminCode.GDbackButtonObjects1});gdjs.adminCode.eventsList0xb25a8 = function(runtimeScene) {

{

gdjs.adminCode.GDatv1Objects1.createFrom(runtimeScene.getObjects("atv1"));

gdjs.adminCode.condition0IsTrue_0.val = false;
gdjs.adminCode.condition1IsTrue_0.val = false;
{
gdjs.adminCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.adminCode.mapOfGDgdjs_46adminCode_46GDatv1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.adminCode.condition0IsTrue_0.val ) {
{
gdjs.adminCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.adminCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene8", false);
}}

}


{

gdjs.adminCode.GDatv2Objects1.createFrom(runtimeScene.getObjects("atv2"));

gdjs.adminCode.condition0IsTrue_0.val = false;
gdjs.adminCode.condition1IsTrue_0.val = false;
{
gdjs.adminCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.adminCode.mapOfGDgdjs_46adminCode_46GDatv2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.adminCode.condition0IsTrue_0.val ) {
{
gdjs.adminCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.adminCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene10", false);
}}

}


{

gdjs.adminCode.GDatv3Objects1.createFrom(runtimeScene.getObjects("atv3"));

gdjs.adminCode.condition0IsTrue_0.val = false;
gdjs.adminCode.condition1IsTrue_0.val = false;
{
gdjs.adminCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.adminCode.mapOfGDgdjs_46adminCode_46GDatv3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.adminCode.condition0IsTrue_0.val ) {
{
gdjs.adminCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.adminCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene12", false);
}}

}


{

gdjs.adminCode.GDatv4Objects1.createFrom(runtimeScene.getObjects("atv4"));

gdjs.adminCode.condition0IsTrue_0.val = false;
gdjs.adminCode.condition1IsTrue_0.val = false;
{
gdjs.adminCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.adminCode.mapOfGDgdjs_46adminCode_46GDatv4Objects1Objects, runtimeScene, true, false);
}if ( gdjs.adminCode.condition0IsTrue_0.val ) {
{
gdjs.adminCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.adminCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene14", false);
}}

}


{

gdjs.adminCode.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));

gdjs.adminCode.condition0IsTrue_0.val = false;
gdjs.adminCode.condition1IsTrue_0.val = false;
{
gdjs.adminCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.adminCode.mapOfGDgdjs_46adminCode_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.adminCode.condition0IsTrue_0.val ) {
{
gdjs.adminCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.adminCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene2", false);
}}

}


}; //End of gdjs.adminCode.eventsList0xb25a8


gdjs.adminCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.adminCode.GDforwardButtonObjects1.length = 0;
gdjs.adminCode.GDforwardButtonObjects2.length = 0;
gdjs.adminCode.GDbackButtonObjects1.length = 0;
gdjs.adminCode.GDbackButtonObjects2.length = 0;
gdjs.adminCode.GDperaVereiraObjects1.length = 0;
gdjs.adminCode.GDperaVereiraObjects2.length = 0;
gdjs.adminCode.GDtextoObjects1.length = 0;
gdjs.adminCode.GDtextoObjects2.length = 0;
gdjs.adminCode.GDgoBackToAtivObjects1.length = 0;
gdjs.adminCode.GDgoBackToAtivObjects2.length = 0;
gdjs.adminCode.GDgoBackToTxtObjects1.length = 0;
gdjs.adminCode.GDgoBackToTxtObjects2.length = 0;
gdjs.adminCode.GDatv1Objects1.length = 0;
gdjs.adminCode.GDatv1Objects2.length = 0;
gdjs.adminCode.GDatv2Objects1.length = 0;
gdjs.adminCode.GDatv2Objects2.length = 0;
gdjs.adminCode.GDatv3Objects1.length = 0;
gdjs.adminCode.GDatv3Objects2.length = 0;
gdjs.adminCode.GDatv4Objects1.length = 0;
gdjs.adminCode.GDatv4Objects2.length = 0;

gdjs.adminCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['adminCode'] = gdjs.adminCode;
