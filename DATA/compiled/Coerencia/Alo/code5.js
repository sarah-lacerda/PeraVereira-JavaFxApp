gdjs.ex4Code = {};
gdjs.ex4Code.GDperaObjects1= [];
gdjs.ex4Code.GDperaObjects2= [];
gdjs.ex4Code.GDbackButtonObjects1= [];
gdjs.ex4Code.GDbackButtonObjects2= [];
gdjs.ex4Code.GDforwardButtonObjects1= [];
gdjs.ex4Code.GDforwardButtonObjects2= [];
gdjs.ex4Code.GDtextoObjects1= [];
gdjs.ex4Code.GDtextoObjects2= [];
gdjs.ex4Code.GDvoltarAtivObjects1= [];
gdjs.ex4Code.GDvoltarAtivObjects2= [];
gdjs.ex4Code.GDvoltarAoTxtObjects1= [];
gdjs.ex4Code.GDvoltarAoTxtObjects2= [];
gdjs.ex4Code.GDperaSaysObjects1= [];
gdjs.ex4Code.GDperaSaysObjects2= [];
gdjs.ex4Code.GDchangeObjects1= [];
gdjs.ex4Code.GDchangeObjects2= [];
gdjs.ex4Code.GDtelaObjects1= [];
gdjs.ex4Code.GDtelaObjects2= [];

gdjs.ex4Code.conditionTrue_0 = {val:false};
gdjs.ex4Code.condition0IsTrue_0 = {val:false};
gdjs.ex4Code.condition1IsTrue_0 = {val:false};


gdjs.ex4Code.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.ex4Code.condition0IsTrue_0.val = false;
{
gdjs.ex4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ex4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}}

}


{


gdjs.ex4Code.condition0IsTrue_0.val = false;
{
gdjs.ex4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
}if (gdjs.ex4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ex5", false);
}}

}


{


gdjs.ex4Code.condition0IsTrue_0.val = false;
{
gdjs.ex4Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
}if (gdjs.ex4Code.condition0IsTrue_0.val) {
gdjs.ex4Code.GDchangeObjects1.createFrom(runtimeScene.getObjects("change"));
{}{for(var i = 0, len = gdjs.ex4Code.GDchangeObjects1.length ;i < len;++i) {
    gdjs.ex4Code.GDchangeObjects1[i].setString("PERGUNTA CONSCIENCIA: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{


{
gdjs.ex4Code.GDchangeObjects1.createFrom(runtimeScene.getObjects("change"));
{for(var i = 0, len = gdjs.ex4Code.GDchangeObjects1.length ;i < len;++i) {
    gdjs.ex4Code.GDchangeObjects1[i].setString("PERGUNTA CONSCIENCIA: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.ex4Code.condition0IsTrue_0.val = false;
{
gdjs.ex4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "timer");
}if (gdjs.ex4Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}}

}


}; //End of gdjs.ex4Code.eventsList0xb25a8


gdjs.ex4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.ex4Code.GDperaObjects1.length = 0;
gdjs.ex4Code.GDperaObjects2.length = 0;
gdjs.ex4Code.GDbackButtonObjects1.length = 0;
gdjs.ex4Code.GDbackButtonObjects2.length = 0;
gdjs.ex4Code.GDforwardButtonObjects1.length = 0;
gdjs.ex4Code.GDforwardButtonObjects2.length = 0;
gdjs.ex4Code.GDtextoObjects1.length = 0;
gdjs.ex4Code.GDtextoObjects2.length = 0;
gdjs.ex4Code.GDvoltarAtivObjects1.length = 0;
gdjs.ex4Code.GDvoltarAtivObjects2.length = 0;
gdjs.ex4Code.GDvoltarAoTxtObjects1.length = 0;
gdjs.ex4Code.GDvoltarAoTxtObjects2.length = 0;
gdjs.ex4Code.GDperaSaysObjects1.length = 0;
gdjs.ex4Code.GDperaSaysObjects2.length = 0;
gdjs.ex4Code.GDchangeObjects1.length = 0;
gdjs.ex4Code.GDchangeObjects2.length = 0;
gdjs.ex4Code.GDtelaObjects1.length = 0;
gdjs.ex4Code.GDtelaObjects2.length = 0;

gdjs.ex4Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['ex4Code'] = gdjs.ex4Code;
