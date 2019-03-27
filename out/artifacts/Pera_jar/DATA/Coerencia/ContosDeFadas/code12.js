gdjs.Scene13Code = {};
gdjs.Scene13Code.GDforwardButtonObjects1= [];
gdjs.Scene13Code.GDforwardButtonObjects2= [];
gdjs.Scene13Code.GDbackButtonObjects1= [];
gdjs.Scene13Code.GDbackButtonObjects2= [];
gdjs.Scene13Code.GDperaVereiraObjects1= [];
gdjs.Scene13Code.GDperaVereiraObjects2= [];
gdjs.Scene13Code.GDtextoObjects1= [];
gdjs.Scene13Code.GDtextoObjects2= [];
gdjs.Scene13Code.GDgoBackToAtivObjects1= [];
gdjs.Scene13Code.GDgoBackToAtivObjects2= [];
gdjs.Scene13Code.GDgoBackToTxtObjects1= [];
gdjs.Scene13Code.GDgoBackToTxtObjects2= [];
gdjs.Scene13Code.GDtelaObjects1= [];
gdjs.Scene13Code.GDtelaObjects2= [];
gdjs.Scene13Code.GDtextEntryObjects1= [];
gdjs.Scene13Code.GDtextEntryObjects2= [];

gdjs.Scene13Code.conditionTrue_0 = {val:false};
gdjs.Scene13Code.condition0IsTrue_0 = {val:false};
gdjs.Scene13Code.condition1IsTrue_0 = {val:false};


gdjs.Scene13Code.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.Scene13Code.condition0IsTrue_0.val = false;
{
gdjs.Scene13Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "timer");
}if (gdjs.Scene13Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene14", false);
}}

}


}; //End of gdjs.Scene13Code.eventsList0xb25a8


gdjs.Scene13Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Scene13Code.GDforwardButtonObjects1.length = 0;
gdjs.Scene13Code.GDforwardButtonObjects2.length = 0;
gdjs.Scene13Code.GDbackButtonObjects1.length = 0;
gdjs.Scene13Code.GDbackButtonObjects2.length = 0;
gdjs.Scene13Code.GDperaVereiraObjects1.length = 0;
gdjs.Scene13Code.GDperaVereiraObjects2.length = 0;
gdjs.Scene13Code.GDtextoObjects1.length = 0;
gdjs.Scene13Code.GDtextoObjects2.length = 0;
gdjs.Scene13Code.GDgoBackToAtivObjects1.length = 0;
gdjs.Scene13Code.GDgoBackToAtivObjects2.length = 0;
gdjs.Scene13Code.GDgoBackToTxtObjects1.length = 0;
gdjs.Scene13Code.GDgoBackToTxtObjects2.length = 0;
gdjs.Scene13Code.GDtelaObjects1.length = 0;
gdjs.Scene13Code.GDtelaObjects2.length = 0;
gdjs.Scene13Code.GDtextEntryObjects1.length = 0;
gdjs.Scene13Code.GDtextEntryObjects2.length = 0;

gdjs.Scene13Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['Scene13Code'] = gdjs.Scene13Code;
