gdjs.Scene16Code = {};
gdjs.Scene16Code.GDforwardButtonObjects1= [];
gdjs.Scene16Code.GDforwardButtonObjects2= [];
gdjs.Scene16Code.GDbackButtonObjects1= [];
gdjs.Scene16Code.GDbackButtonObjects2= [];
gdjs.Scene16Code.GDperaVereiraObjects1= [];
gdjs.Scene16Code.GDperaVereiraObjects2= [];
gdjs.Scene16Code.GDtextoObjects1= [];
gdjs.Scene16Code.GDtextoObjects2= [];
gdjs.Scene16Code.GDgoBackToAtivObjects1= [];
gdjs.Scene16Code.GDgoBackToAtivObjects2= [];
gdjs.Scene16Code.GDgoBackToTxtObjects1= [];
gdjs.Scene16Code.GDgoBackToTxtObjects2= [];
gdjs.Scene16Code.GDvoltarAoMenuObjects1= [];
gdjs.Scene16Code.GDvoltarAoMenuObjects2= [];
gdjs.Scene16Code.GDbackgroundObjects1= [];
gdjs.Scene16Code.GDbackgroundObjects2= [];

gdjs.Scene16Code.conditionTrue_0 = {val:false};
gdjs.Scene16Code.condition0IsTrue_0 = {val:false};
gdjs.Scene16Code.condition1IsTrue_0 = {val:false};
gdjs.Scene16Code.condition2IsTrue_0 = {val:false};


gdjs.Scene16Code.mapOfGDgdjs_46Scene16Code_46GDvoltarAoMenuObjects1Objects = Hashtable.newFrom({"voltarAoMenu": gdjs.Scene16Code.GDvoltarAoMenuObjects1});gdjs.Scene16Code.eventsList0xb25a8 = function(runtimeScene) {

{

gdjs.Scene16Code.GDvoltarAoMenuObjects1.createFrom(runtimeScene.getObjects("voltarAoMenu"));

gdjs.Scene16Code.condition0IsTrue_0.val = false;
gdjs.Scene16Code.condition1IsTrue_0.val = false;
{
gdjs.Scene16Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Scene16Code.condition0IsTrue_0.val ) {
{
gdjs.Scene16Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene16Code.mapOfGDgdjs_46Scene16Code_46GDvoltarAoMenuObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.Scene16Code.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("/gotoMenu", runtimeScene);
}}

}


}; //End of gdjs.Scene16Code.eventsList0xb25a8


gdjs.Scene16Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Scene16Code.GDforwardButtonObjects1.length = 0;
gdjs.Scene16Code.GDforwardButtonObjects2.length = 0;
gdjs.Scene16Code.GDbackButtonObjects1.length = 0;
gdjs.Scene16Code.GDbackButtonObjects2.length = 0;
gdjs.Scene16Code.GDperaVereiraObjects1.length = 0;
gdjs.Scene16Code.GDperaVereiraObjects2.length = 0;
gdjs.Scene16Code.GDtextoObjects1.length = 0;
gdjs.Scene16Code.GDtextoObjects2.length = 0;
gdjs.Scene16Code.GDgoBackToAtivObjects1.length = 0;
gdjs.Scene16Code.GDgoBackToAtivObjects2.length = 0;
gdjs.Scene16Code.GDgoBackToTxtObjects1.length = 0;
gdjs.Scene16Code.GDgoBackToTxtObjects2.length = 0;
gdjs.Scene16Code.GDvoltarAoMenuObjects1.length = 0;
gdjs.Scene16Code.GDvoltarAoMenuObjects2.length = 0;
gdjs.Scene16Code.GDbackgroundObjects1.length = 0;
gdjs.Scene16Code.GDbackgroundObjects2.length = 0;

gdjs.Scene16Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['Scene16Code'] = gdjs.Scene16Code;
