gdjs.ex6Code = {};
gdjs.ex6Code.GDperaObjects1= [];
gdjs.ex6Code.GDperaObjects2= [];
gdjs.ex6Code.GDbackButtonObjects1= [];
gdjs.ex6Code.GDbackButtonObjects2= [];
gdjs.ex6Code.GDforwardButtonObjects1= [];
gdjs.ex6Code.GDforwardButtonObjects2= [];
gdjs.ex6Code.GDtextoObjects1= [];
gdjs.ex6Code.GDtextoObjects2= [];
gdjs.ex6Code.GDvoltarAtivObjects1= [];
gdjs.ex6Code.GDvoltarAtivObjects2= [];
gdjs.ex6Code.GDvoltarAoTxtObjects1= [];
gdjs.ex6Code.GDvoltarAoTxtObjects2= [];
gdjs.ex6Code.GDperaSaysObjects1= [];
gdjs.ex6Code.GDperaSaysObjects2= [];
gdjs.ex6Code.GDtelaObjects1= [];
gdjs.ex6Code.GDtelaObjects2= [];

gdjs.ex6Code.conditionTrue_0 = {val:false};
gdjs.ex6Code.condition0IsTrue_0 = {val:false};
gdjs.ex6Code.condition1IsTrue_0 = {val:false};


gdjs.ex6Code.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.ex6Code.condition0IsTrue_0.val = false;
{
gdjs.ex6Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "timer");
}if (gdjs.ex6Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "gotoMenu", false);
}}

}


}; //End of gdjs.ex6Code.eventsList0xb25a8


gdjs.ex6Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.ex6Code.GDperaObjects1.length = 0;
gdjs.ex6Code.GDperaObjects2.length = 0;
gdjs.ex6Code.GDbackButtonObjects1.length = 0;
gdjs.ex6Code.GDbackButtonObjects2.length = 0;
gdjs.ex6Code.GDforwardButtonObjects1.length = 0;
gdjs.ex6Code.GDforwardButtonObjects2.length = 0;
gdjs.ex6Code.GDtextoObjects1.length = 0;
gdjs.ex6Code.GDtextoObjects2.length = 0;
gdjs.ex6Code.GDvoltarAtivObjects1.length = 0;
gdjs.ex6Code.GDvoltarAtivObjects2.length = 0;
gdjs.ex6Code.GDvoltarAoTxtObjects1.length = 0;
gdjs.ex6Code.GDvoltarAoTxtObjects2.length = 0;
gdjs.ex6Code.GDperaSaysObjects1.length = 0;
gdjs.ex6Code.GDperaSaysObjects2.length = 0;
gdjs.ex6Code.GDtelaObjects1.length = 0;
gdjs.ex6Code.GDtelaObjects2.length = 0;

gdjs.ex6Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['ex6Code'] = gdjs.ex6Code;
