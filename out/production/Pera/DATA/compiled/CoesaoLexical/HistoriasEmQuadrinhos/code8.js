gdjs.FimCode = {};
gdjs.FimCode.GDforwardButtonObjects1= [];
gdjs.FimCode.GDforwardButtonObjects2= [];
gdjs.FimCode.GDbackButtonObjects1= [];
gdjs.FimCode.GDbackButtonObjects2= [];
gdjs.FimCode.GDperaObjects1= [];
gdjs.FimCode.GDperaObjects2= [];
gdjs.FimCode.GDperaSaysObjects1= [];
gdjs.FimCode.GDperaSaysObjects2= [];
gdjs.FimCode.GDvoltarAoTxtObjects1= [];
gdjs.FimCode.GDvoltarAoTxtObjects2= [];
gdjs.FimCode.GDtextoObjects1= [];
gdjs.FimCode.GDtextoObjects2= [];
gdjs.FimCode.GDvoltarAtivObjects1= [];
gdjs.FimCode.GDvoltarAtivObjects2= [];
gdjs.FimCode.GDmessageObjects1= [];
gdjs.FimCode.GDmessageObjects2= [];
gdjs.FimCode.GDvoltarAoMenuObjects1= [];
gdjs.FimCode.GDvoltarAoMenuObjects2= [];

gdjs.FimCode.conditionTrue_0 = {val:false};
gdjs.FimCode.condition0IsTrue_0 = {val:false};
gdjs.FimCode.condition1IsTrue_0 = {val:false};
gdjs.FimCode.condition2IsTrue_0 = {val:false};


gdjs.FimCode.mapOfGDgdjs_46FimCode_46GDvoltarAoMenuObjects1Objects = Hashtable.newFrom({"voltarAoMenu": gdjs.FimCode.GDvoltarAoMenuObjects1});gdjs.FimCode.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.FimCode.condition0IsTrue_0.val = false;
{
gdjs.FimCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.FimCode.condition0IsTrue_0.val) {
gdjs.FimCode.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
{for(var i = 0, len = gdjs.FimCode.GDperaObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDperaObjects1[i].setAnimation(2);
}
}}

}


{

gdjs.FimCode.GDvoltarAoMenuObjects1.createFrom(runtimeScene.getObjects("voltarAoMenu"));

gdjs.FimCode.condition0IsTrue_0.val = false;
gdjs.FimCode.condition1IsTrue_0.val = false;
{
gdjs.FimCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.FimCode.condition0IsTrue_0.val ) {
{
gdjs.FimCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FimCode.mapOfGDgdjs_46FimCode_46GDvoltarAoMenuObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.FimCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL("/gotoMenu", runtimeScene);
}}

}


}; //End of gdjs.FimCode.eventsList0xb25a8


gdjs.FimCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.FimCode.GDforwardButtonObjects1.length = 0;
gdjs.FimCode.GDforwardButtonObjects2.length = 0;
gdjs.FimCode.GDbackButtonObjects1.length = 0;
gdjs.FimCode.GDbackButtonObjects2.length = 0;
gdjs.FimCode.GDperaObjects1.length = 0;
gdjs.FimCode.GDperaObjects2.length = 0;
gdjs.FimCode.GDperaSaysObjects1.length = 0;
gdjs.FimCode.GDperaSaysObjects2.length = 0;
gdjs.FimCode.GDvoltarAoTxtObjects1.length = 0;
gdjs.FimCode.GDvoltarAoTxtObjects2.length = 0;
gdjs.FimCode.GDtextoObjects1.length = 0;
gdjs.FimCode.GDtextoObjects2.length = 0;
gdjs.FimCode.GDvoltarAtivObjects1.length = 0;
gdjs.FimCode.GDvoltarAtivObjects2.length = 0;
gdjs.FimCode.GDmessageObjects1.length = 0;
gdjs.FimCode.GDmessageObjects2.length = 0;
gdjs.FimCode.GDvoltarAoMenuObjects1.length = 0;
gdjs.FimCode.GDvoltarAoMenuObjects2.length = 0;

gdjs.FimCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['FimCode'] = gdjs.FimCode;
