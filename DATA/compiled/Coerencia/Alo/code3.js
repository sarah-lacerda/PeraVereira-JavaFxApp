gdjs.ex2Code = {};
gdjs.ex2Code.GDperaObjects1= [];
gdjs.ex2Code.GDperaObjects2= [];
gdjs.ex2Code.GDbackButtonObjects1= [];
gdjs.ex2Code.GDbackButtonObjects2= [];
gdjs.ex2Code.GDforwardButtonObjects1= [];
gdjs.ex2Code.GDforwardButtonObjects2= [];
gdjs.ex2Code.GDtextoObjects1= [];
gdjs.ex2Code.GDtextoObjects2= [];
gdjs.ex2Code.GDvoltarAtivObjects1= [];
gdjs.ex2Code.GDvoltarAtivObjects2= [];
gdjs.ex2Code.GDvoltarAoTxtObjects1= [];
gdjs.ex2Code.GDvoltarAoTxtObjects2= [];
gdjs.ex2Code.GDperaSaysObjects1= [];
gdjs.ex2Code.GDperaSaysObjects2= [];
gdjs.ex2Code.GDchangeObjects1= [];
gdjs.ex2Code.GDchangeObjects2= [];
gdjs.ex2Code.GDtelaObjects1= [];
gdjs.ex2Code.GDtelaObjects2= [];

gdjs.ex2Code.conditionTrue_0 = {val:false};
gdjs.ex2Code.condition0IsTrue_0 = {val:false};
gdjs.ex2Code.condition1IsTrue_0 = {val:false};


gdjs.ex2Code.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.ex2Code.condition0IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
}if (gdjs.ex2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ex3", false);
}}

}


{


{
gdjs.ex2Code.GDchangeObjects1.createFrom(runtimeScene.getObjects("change"));
{for(var i = 0, len = gdjs.ex2Code.GDchangeObjects1.length ;i < len;++i) {
    gdjs.ex2Code.GDchangeObjects1[i].setString("PERGUNTA CONSCIENCIA: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.ex2Code.condition0IsTrue_0.val = false;
{
gdjs.ex2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "timer");
}if (gdjs.ex2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


}; //End of gdjs.ex2Code.eventsList0xb25a8


gdjs.ex2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.ex2Code.GDperaObjects1.length = 0;
gdjs.ex2Code.GDperaObjects2.length = 0;
gdjs.ex2Code.GDbackButtonObjects1.length = 0;
gdjs.ex2Code.GDbackButtonObjects2.length = 0;
gdjs.ex2Code.GDforwardButtonObjects1.length = 0;
gdjs.ex2Code.GDforwardButtonObjects2.length = 0;
gdjs.ex2Code.GDtextoObjects1.length = 0;
gdjs.ex2Code.GDtextoObjects2.length = 0;
gdjs.ex2Code.GDvoltarAtivObjects1.length = 0;
gdjs.ex2Code.GDvoltarAtivObjects2.length = 0;
gdjs.ex2Code.GDvoltarAoTxtObjects1.length = 0;
gdjs.ex2Code.GDvoltarAoTxtObjects2.length = 0;
gdjs.ex2Code.GDperaSaysObjects1.length = 0;
gdjs.ex2Code.GDperaSaysObjects2.length = 0;
gdjs.ex2Code.GDchangeObjects1.length = 0;
gdjs.ex2Code.GDchangeObjects2.length = 0;
gdjs.ex2Code.GDtelaObjects1.length = 0;
gdjs.ex2Code.GDtelaObjects2.length = 0;

gdjs.ex2Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['ex2Code'] = gdjs.ex2Code;
