gdjs.Scene15Code = {};
gdjs.Scene15Code.GDforwardButtonObjects1= [];
gdjs.Scene15Code.GDforwardButtonObjects2= [];
gdjs.Scene15Code.GDbackButtonObjects1= [];
gdjs.Scene15Code.GDbackButtonObjects2= [];
gdjs.Scene15Code.GDperaVereiraObjects1= [];
gdjs.Scene15Code.GDperaVereiraObjects2= [];
gdjs.Scene15Code.GDtextoObjects1= [];
gdjs.Scene15Code.GDtextoObjects2= [];
gdjs.Scene15Code.GDgoBackToAtivObjects1= [];
gdjs.Scene15Code.GDgoBackToAtivObjects2= [];
gdjs.Scene15Code.GDgoBackToTxtObjects1= [];
gdjs.Scene15Code.GDgoBackToTxtObjects2= [];
gdjs.Scene15Code.GDtelaObjects1= [];
gdjs.Scene15Code.GDtelaObjects2= [];
gdjs.Scene15Code.GDtextEntryObjects1= [];
gdjs.Scene15Code.GDtextEntryObjects2= [];

gdjs.Scene15Code.conditionTrue_0 = {val:false};
gdjs.Scene15Code.condition0IsTrue_0 = {val:false};
gdjs.Scene15Code.condition1IsTrue_0 = {val:false};


gdjs.Scene15Code.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.Scene15Code.condition0IsTrue_0.val = false;
{
gdjs.Scene15Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "timer");
}if (gdjs.Scene15Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene16", false);
}}

}


}; //End of gdjs.Scene15Code.eventsList0xb25a8


gdjs.Scene15Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Scene15Code.GDforwardButtonObjects1.length = 0;
gdjs.Scene15Code.GDforwardButtonObjects2.length = 0;
gdjs.Scene15Code.GDbackButtonObjects1.length = 0;
gdjs.Scene15Code.GDbackButtonObjects2.length = 0;
gdjs.Scene15Code.GDperaVereiraObjects1.length = 0;
gdjs.Scene15Code.GDperaVereiraObjects2.length = 0;
gdjs.Scene15Code.GDtextoObjects1.length = 0;
gdjs.Scene15Code.GDtextoObjects2.length = 0;
gdjs.Scene15Code.GDgoBackToAtivObjects1.length = 0;
gdjs.Scene15Code.GDgoBackToAtivObjects2.length = 0;
gdjs.Scene15Code.GDgoBackToTxtObjects1.length = 0;
gdjs.Scene15Code.GDgoBackToTxtObjects2.length = 0;
gdjs.Scene15Code.GDtelaObjects1.length = 0;
gdjs.Scene15Code.GDtelaObjects2.length = 0;
gdjs.Scene15Code.GDtextEntryObjects1.length = 0;
gdjs.Scene15Code.GDtextEntryObjects2.length = 0;

gdjs.Scene15Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['Scene15Code'] = gdjs.Scene15Code;
