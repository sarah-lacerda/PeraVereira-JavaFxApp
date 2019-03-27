gdjs.Scene9Code = {};
gdjs.Scene9Code.GDforwardButtonObjects1= [];
gdjs.Scene9Code.GDforwardButtonObjects2= [];
gdjs.Scene9Code.GDbackButtonObjects1= [];
gdjs.Scene9Code.GDbackButtonObjects2= [];
gdjs.Scene9Code.GDperaVereiraObjects1= [];
gdjs.Scene9Code.GDperaVereiraObjects2= [];
gdjs.Scene9Code.GDtextoObjects1= [];
gdjs.Scene9Code.GDtextoObjects2= [];
gdjs.Scene9Code.GDgoBackToAtivObjects1= [];
gdjs.Scene9Code.GDgoBackToAtivObjects2= [];
gdjs.Scene9Code.GDgoBackToTxtObjects1= [];
gdjs.Scene9Code.GDgoBackToTxtObjects2= [];
gdjs.Scene9Code.GDtelaObjects1= [];
gdjs.Scene9Code.GDtelaObjects2= [];
gdjs.Scene9Code.GDtextEntryObjects1= [];
gdjs.Scene9Code.GDtextEntryObjects2= [];

gdjs.Scene9Code.conditionTrue_0 = {val:false};
gdjs.Scene9Code.condition0IsTrue_0 = {val:false};
gdjs.Scene9Code.condition1IsTrue_0 = {val:false};


gdjs.Scene9Code.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.Scene9Code.condition0IsTrue_0.val = false;
{
gdjs.Scene9Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "timer");
}if (gdjs.Scene9Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene10", false);
}}

}


}; //End of gdjs.Scene9Code.eventsList0xb25a8


gdjs.Scene9Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Scene9Code.GDforwardButtonObjects1.length = 0;
gdjs.Scene9Code.GDforwardButtonObjects2.length = 0;
gdjs.Scene9Code.GDbackButtonObjects1.length = 0;
gdjs.Scene9Code.GDbackButtonObjects2.length = 0;
gdjs.Scene9Code.GDperaVereiraObjects1.length = 0;
gdjs.Scene9Code.GDperaVereiraObjects2.length = 0;
gdjs.Scene9Code.GDtextoObjects1.length = 0;
gdjs.Scene9Code.GDtextoObjects2.length = 0;
gdjs.Scene9Code.GDgoBackToAtivObjects1.length = 0;
gdjs.Scene9Code.GDgoBackToAtivObjects2.length = 0;
gdjs.Scene9Code.GDgoBackToTxtObjects1.length = 0;
gdjs.Scene9Code.GDgoBackToTxtObjects2.length = 0;
gdjs.Scene9Code.GDtelaObjects1.length = 0;
gdjs.Scene9Code.GDtelaObjects2.length = 0;
gdjs.Scene9Code.GDtextEntryObjects1.length = 0;
gdjs.Scene9Code.GDtextEntryObjects2.length = 0;

gdjs.Scene9Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['Scene9Code'] = gdjs.Scene9Code;
