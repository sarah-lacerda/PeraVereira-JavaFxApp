gdjs.Scene11Code = {};
gdjs.Scene11Code.GDforwardButtonObjects1= [];
gdjs.Scene11Code.GDforwardButtonObjects2= [];
gdjs.Scene11Code.GDbackButtonObjects1= [];
gdjs.Scene11Code.GDbackButtonObjects2= [];
gdjs.Scene11Code.GDperaVereiraObjects1= [];
gdjs.Scene11Code.GDperaVereiraObjects2= [];
gdjs.Scene11Code.GDtextoObjects1= [];
gdjs.Scene11Code.GDtextoObjects2= [];
gdjs.Scene11Code.GDgoBackToAtivObjects1= [];
gdjs.Scene11Code.GDgoBackToAtivObjects2= [];
gdjs.Scene11Code.GDgoBackToTxtObjects1= [];
gdjs.Scene11Code.GDgoBackToTxtObjects2= [];
gdjs.Scene11Code.GDtelaObjects1= [];
gdjs.Scene11Code.GDtelaObjects2= [];
gdjs.Scene11Code.GDtextEntryObjects1= [];
gdjs.Scene11Code.GDtextEntryObjects2= [];

gdjs.Scene11Code.conditionTrue_0 = {val:false};
gdjs.Scene11Code.condition0IsTrue_0 = {val:false};
gdjs.Scene11Code.condition1IsTrue_0 = {val:false};


gdjs.Scene11Code.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.Scene11Code.condition0IsTrue_0.val = false;
{
gdjs.Scene11Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "timer");
}if (gdjs.Scene11Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene12", false);
}}

}


}; //End of gdjs.Scene11Code.eventsList0xb25a8


gdjs.Scene11Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Scene11Code.GDforwardButtonObjects1.length = 0;
gdjs.Scene11Code.GDforwardButtonObjects2.length = 0;
gdjs.Scene11Code.GDbackButtonObjects1.length = 0;
gdjs.Scene11Code.GDbackButtonObjects2.length = 0;
gdjs.Scene11Code.GDperaVereiraObjects1.length = 0;
gdjs.Scene11Code.GDperaVereiraObjects2.length = 0;
gdjs.Scene11Code.GDtextoObjects1.length = 0;
gdjs.Scene11Code.GDtextoObjects2.length = 0;
gdjs.Scene11Code.GDgoBackToAtivObjects1.length = 0;
gdjs.Scene11Code.GDgoBackToAtivObjects2.length = 0;
gdjs.Scene11Code.GDgoBackToTxtObjects1.length = 0;
gdjs.Scene11Code.GDgoBackToTxtObjects2.length = 0;
gdjs.Scene11Code.GDtelaObjects1.length = 0;
gdjs.Scene11Code.GDtelaObjects2.length = 0;
gdjs.Scene11Code.GDtextEntryObjects1.length = 0;
gdjs.Scene11Code.GDtextEntryObjects2.length = 0;

gdjs.Scene11Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['Scene11Code'] = gdjs.Scene11Code;
