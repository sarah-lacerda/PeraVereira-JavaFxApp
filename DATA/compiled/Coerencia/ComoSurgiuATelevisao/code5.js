gdjs.perguntaConscienciaCode = {};
gdjs.perguntaConscienciaCode.GDbuttonNextObjects1= [];
gdjs.perguntaConscienciaCode.GDbuttonNextObjects2= [];
gdjs.perguntaConscienciaCode.GDbuttonBackObjects1= [];
gdjs.perguntaConscienciaCode.GDbuttonBackObjects2= [];
gdjs.perguntaConscienciaCode.GDtextObjects1= [];
gdjs.perguntaConscienciaCode.GDtextObjects2= [];
gdjs.perguntaConscienciaCode.GDperaObjects1= [];
gdjs.perguntaConscienciaCode.GDperaObjects2= [];
gdjs.perguntaConscienciaCode.GDperaSaysObjects1= [];
gdjs.perguntaConscienciaCode.GDperaSaysObjects2= [];

gdjs.perguntaConscienciaCode.conditionTrue_0 = {val:false};
gdjs.perguntaConscienciaCode.condition0IsTrue_0 = {val:false};
gdjs.perguntaConscienciaCode.condition1IsTrue_0 = {val:false};
gdjs.perguntaConscienciaCode.condition2IsTrue_0 = {val:false};


gdjs.perguntaConscienciaCode.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.perguntaConscienciaCode.condition0IsTrue_0.val = false;
gdjs.perguntaConscienciaCode.condition1IsTrue_0.val = false;
{
gdjs.perguntaConscienciaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if ( gdjs.perguntaConscienciaCode.condition0IsTrue_0.val ) {
{
gdjs.perguntaConscienciaCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
}}
if (gdjs.perguntaConscienciaCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ex2", false);
}}

}


{


gdjs.perguntaConscienciaCode.condition0IsTrue_0.val = false;
gdjs.perguntaConscienciaCode.condition1IsTrue_0.val = false;
{
gdjs.perguntaConscienciaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2;
}if ( gdjs.perguntaConscienciaCode.condition0IsTrue_0.val ) {
{
gdjs.perguntaConscienciaCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
}}
if (gdjs.perguntaConscienciaCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ex3", false);
}}

}


{


gdjs.perguntaConscienciaCode.condition0IsTrue_0.val = false;
gdjs.perguntaConscienciaCode.condition1IsTrue_0.val = false;
{
gdjs.perguntaConscienciaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
}if ( gdjs.perguntaConscienciaCode.condition0IsTrue_0.val ) {
{
gdjs.perguntaConscienciaCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
}}
if (gdjs.perguntaConscienciaCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.perguntaConscienciaCode.condition0IsTrue_0.val = false;
{
gdjs.perguntaConscienciaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "timer");
}if (gdjs.perguntaConscienciaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


}; //End of gdjs.perguntaConscienciaCode.eventsList0xb25a8


gdjs.perguntaConscienciaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.perguntaConscienciaCode.GDbuttonNextObjects1.length = 0;
gdjs.perguntaConscienciaCode.GDbuttonNextObjects2.length = 0;
gdjs.perguntaConscienciaCode.GDbuttonBackObjects1.length = 0;
gdjs.perguntaConscienciaCode.GDbuttonBackObjects2.length = 0;
gdjs.perguntaConscienciaCode.GDtextObjects1.length = 0;
gdjs.perguntaConscienciaCode.GDtextObjects2.length = 0;
gdjs.perguntaConscienciaCode.GDperaObjects1.length = 0;
gdjs.perguntaConscienciaCode.GDperaObjects2.length = 0;
gdjs.perguntaConscienciaCode.GDperaSaysObjects1.length = 0;
gdjs.perguntaConscienciaCode.GDperaSaysObjects2.length = 0;

gdjs.perguntaConscienciaCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['perguntaConscienciaCode'] = gdjs.perguntaConscienciaCode;
