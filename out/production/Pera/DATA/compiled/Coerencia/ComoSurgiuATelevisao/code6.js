gdjs.FimCode = {};
gdjs.FimCode.GDbuttonNextObjects1= [];
gdjs.FimCode.GDbuttonNextObjects2= [];
gdjs.FimCode.GDbuttonBackObjects1= [];
gdjs.FimCode.GDbuttonBackObjects2= [];
gdjs.FimCode.GDtextObjects1= [];
gdjs.FimCode.GDtextObjects2= [];
gdjs.FimCode.GDperaObjects1= [];
gdjs.FimCode.GDperaObjects2= [];
gdjs.FimCode.GDperaSaysObjects1= [];
gdjs.FimCode.GDperaSaysObjects2= [];
gdjs.FimCode.GDTelaObjects1= [];
gdjs.FimCode.GDTelaObjects2= [];
gdjs.FimCode.GDVoltarAoMenuObjects1= [];
gdjs.FimCode.GDVoltarAoMenuObjects2= [];

gdjs.FimCode.conditionTrue_0 = {val:false};
gdjs.FimCode.condition0IsTrue_0 = {val:false};
gdjs.FimCode.condition1IsTrue_0 = {val:false};
gdjs.FimCode.condition2IsTrue_0 = {val:false};


gdjs.FimCode.mapOfGDgdjs_46FimCode_46GDVoltarAoMenuObjects1Objects = Hashtable.newFrom({"VoltarAoMenu": gdjs.FimCode.GDVoltarAoMenuObjects1});gdjs.FimCode.eventsList0xb25a8 = function(runtimeScene) {

{

gdjs.FimCode.GDVoltarAoMenuObjects1.createFrom(runtimeScene.getObjects("VoltarAoMenu"));

gdjs.FimCode.condition0IsTrue_0.val = false;
gdjs.FimCode.condition1IsTrue_0.val = false;
{
gdjs.FimCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.FimCode.condition0IsTrue_0.val ) {
{
gdjs.FimCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FimCode.mapOfGDgdjs_46FimCode_46GDVoltarAoMenuObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.FimCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("/gotoMenu", runtimeScene);
}}

}


}; //End of gdjs.FimCode.eventsList0xb25a8


gdjs.FimCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.FimCode.GDbuttonNextObjects1.length = 0;
gdjs.FimCode.GDbuttonNextObjects2.length = 0;
gdjs.FimCode.GDbuttonBackObjects1.length = 0;
gdjs.FimCode.GDbuttonBackObjects2.length = 0;
gdjs.FimCode.GDtextObjects1.length = 0;
gdjs.FimCode.GDtextObjects2.length = 0;
gdjs.FimCode.GDperaObjects1.length = 0;
gdjs.FimCode.GDperaObjects2.length = 0;
gdjs.FimCode.GDperaSaysObjects1.length = 0;
gdjs.FimCode.GDperaSaysObjects2.length = 0;
gdjs.FimCode.GDTelaObjects1.length = 0;
gdjs.FimCode.GDTelaObjects2.length = 0;
gdjs.FimCode.GDVoltarAoMenuObjects1.length = 0;
gdjs.FimCode.GDVoltarAoMenuObjects2.length = 0;

gdjs.FimCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['FimCode'] = gdjs.FimCode;
