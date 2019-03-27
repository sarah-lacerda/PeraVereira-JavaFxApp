gdjs.gotoMenuCode = {};
gdjs.gotoMenuCode.GDperaObjects1= [];
gdjs.gotoMenuCode.GDperaObjects2= [];
gdjs.gotoMenuCode.GDbackButtonObjects1= [];
gdjs.gotoMenuCode.GDbackButtonObjects2= [];
gdjs.gotoMenuCode.GDforwardButtonObjects1= [];
gdjs.gotoMenuCode.GDforwardButtonObjects2= [];
gdjs.gotoMenuCode.GDtextoObjects1= [];
gdjs.gotoMenuCode.GDtextoObjects2= [];
gdjs.gotoMenuCode.GDvoltarAtivObjects1= [];
gdjs.gotoMenuCode.GDvoltarAtivObjects2= [];
gdjs.gotoMenuCode.GDvoltarAoTxtObjects1= [];
gdjs.gotoMenuCode.GDvoltarAoTxtObjects2= [];
gdjs.gotoMenuCode.GDperaSaysObjects1= [];
gdjs.gotoMenuCode.GDperaSaysObjects2= [];
gdjs.gotoMenuCode.GDvoltarAoMenuObjects1= [];
gdjs.gotoMenuCode.GDvoltarAoMenuObjects2= [];
gdjs.gotoMenuCode.GDNewObjectObjects1= [];
gdjs.gotoMenuCode.GDNewObjectObjects2= [];
gdjs.gotoMenuCode.GDTELAObjects1= [];
gdjs.gotoMenuCode.GDTELAObjects2= [];

gdjs.gotoMenuCode.conditionTrue_0 = {val:false};
gdjs.gotoMenuCode.condition0IsTrue_0 = {val:false};
gdjs.gotoMenuCode.condition1IsTrue_0 = {val:false};
gdjs.gotoMenuCode.condition2IsTrue_0 = {val:false};


gdjs.gotoMenuCode.mapOfGDgdjs_46gotoMenuCode_46GDvoltarAoMenuObjects1Objects = Hashtable.newFrom({"voltarAoMenu": gdjs.gotoMenuCode.GDvoltarAoMenuObjects1});gdjs.gotoMenuCode.eventsList0xb25a8 = function(runtimeScene) {

{

gdjs.gotoMenuCode.GDvoltarAoMenuObjects1.createFrom(runtimeScene.getObjects("voltarAoMenu"));

gdjs.gotoMenuCode.condition0IsTrue_0.val = false;
gdjs.gotoMenuCode.condition1IsTrue_0.val = false;
{
gdjs.gotoMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.gotoMenuCode.mapOfGDgdjs_46gotoMenuCode_46GDvoltarAoMenuObjects1Objects, runtimeScene, true, false);
}if ( gdjs.gotoMenuCode.condition0IsTrue_0.val ) {
{
gdjs.gotoMenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.gotoMenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("/gotoMenu", runtimeScene);
}}

}


}; //End of gdjs.gotoMenuCode.eventsList0xb25a8


gdjs.gotoMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.gotoMenuCode.GDperaObjects1.length = 0;
gdjs.gotoMenuCode.GDperaObjects2.length = 0;
gdjs.gotoMenuCode.GDbackButtonObjects1.length = 0;
gdjs.gotoMenuCode.GDbackButtonObjects2.length = 0;
gdjs.gotoMenuCode.GDforwardButtonObjects1.length = 0;
gdjs.gotoMenuCode.GDforwardButtonObjects2.length = 0;
gdjs.gotoMenuCode.GDtextoObjects1.length = 0;
gdjs.gotoMenuCode.GDtextoObjects2.length = 0;
gdjs.gotoMenuCode.GDvoltarAtivObjects1.length = 0;
gdjs.gotoMenuCode.GDvoltarAtivObjects2.length = 0;
gdjs.gotoMenuCode.GDvoltarAoTxtObjects1.length = 0;
gdjs.gotoMenuCode.GDvoltarAoTxtObjects2.length = 0;
gdjs.gotoMenuCode.GDperaSaysObjects1.length = 0;
gdjs.gotoMenuCode.GDperaSaysObjects2.length = 0;
gdjs.gotoMenuCode.GDvoltarAoMenuObjects1.length = 0;
gdjs.gotoMenuCode.GDvoltarAoMenuObjects2.length = 0;
gdjs.gotoMenuCode.GDNewObjectObjects1.length = 0;
gdjs.gotoMenuCode.GDNewObjectObjects2.length = 0;
gdjs.gotoMenuCode.GDTELAObjects1.length = 0;
gdjs.gotoMenuCode.GDTELAObjects2.length = 0;

gdjs.gotoMenuCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['gotoMenuCode'] = gdjs.gotoMenuCode;
