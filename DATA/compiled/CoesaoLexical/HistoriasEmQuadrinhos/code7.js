gdjs.PerguntaCode = {};
gdjs.PerguntaCode.GDforwardButtonObjects1= [];
gdjs.PerguntaCode.GDforwardButtonObjects2= [];
gdjs.PerguntaCode.GDbackButtonObjects1= [];
gdjs.PerguntaCode.GDbackButtonObjects2= [];
gdjs.PerguntaCode.GDperaObjects1= [];
gdjs.PerguntaCode.GDperaObjects2= [];
gdjs.PerguntaCode.GDperaSaysObjects1= [];
gdjs.PerguntaCode.GDperaSaysObjects2= [];
gdjs.PerguntaCode.GDvoltarAoTxtObjects1= [];
gdjs.PerguntaCode.GDvoltarAoTxtObjects2= [];
gdjs.PerguntaCode.GDtextoObjects1= [];
gdjs.PerguntaCode.GDtextoObjects2= [];
gdjs.PerguntaCode.GDvoltarAtivObjects1= [];
gdjs.PerguntaCode.GDvoltarAtivObjects2= [];
gdjs.PerguntaCode.GDNewObjectObjects1= [];
gdjs.PerguntaCode.GDNewObjectObjects2= [];
gdjs.PerguntaCode.GDperguntaObjects1= [];
gdjs.PerguntaCode.GDperguntaObjects2= [];

gdjs.PerguntaCode.conditionTrue_0 = {val:false};
gdjs.PerguntaCode.condition0IsTrue_0 = {val:false};
gdjs.PerguntaCode.condition1IsTrue_0 = {val:false};
gdjs.PerguntaCode.condition2IsTrue_0 = {val:false};


gdjs.PerguntaCode.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.PerguntaCode.condition0IsTrue_0.val = false;
{
gdjs.PerguntaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PerguntaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timeout");
}}

}


{


gdjs.PerguntaCode.condition0IsTrue_0.val = false;
gdjs.PerguntaCode.condition1IsTrue_0.val = false;
{
gdjs.PerguntaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "timeout");
}if ( gdjs.PerguntaCode.condition0IsTrue_0.val ) {
{
gdjs.PerguntaCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.PerguntaCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "A2", false);
}}

}


{


gdjs.PerguntaCode.condition0IsTrue_0.val = false;
gdjs.PerguntaCode.condition1IsTrue_0.val = false;
{
gdjs.PerguntaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "timeout");
}if ( gdjs.PerguntaCode.condition0IsTrue_0.val ) {
{
gdjs.PerguntaCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 2;
}}
if (gdjs.PerguntaCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "A3", false);
}}

}


{


gdjs.PerguntaCode.condition0IsTrue_0.val = false;
gdjs.PerguntaCode.condition1IsTrue_0.val = false;
{
gdjs.PerguntaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "timeout");
}if ( gdjs.PerguntaCode.condition0IsTrue_0.val ) {
{
gdjs.PerguntaCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 3;
}}
if (gdjs.PerguntaCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "A4", false);
}}

}


{


gdjs.PerguntaCode.condition0IsTrue_0.val = false;
gdjs.PerguntaCode.condition1IsTrue_0.val = false;
{
gdjs.PerguntaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "timeout");
}if ( gdjs.PerguntaCode.condition0IsTrue_0.val ) {
{
gdjs.PerguntaCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 4;
}}
if (gdjs.PerguntaCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "A5", false);
}}

}


{


gdjs.PerguntaCode.condition0IsTrue_0.val = false;
gdjs.PerguntaCode.condition1IsTrue_0.val = false;
{
gdjs.PerguntaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "timeout");
}if ( gdjs.PerguntaCode.condition0IsTrue_0.val ) {
{
gdjs.PerguntaCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 5;
}}
if (gdjs.PerguntaCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fim", false);
}}

}


}; //End of gdjs.PerguntaCode.eventsList0xb25a8


gdjs.PerguntaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.PerguntaCode.GDforwardButtonObjects1.length = 0;
gdjs.PerguntaCode.GDforwardButtonObjects2.length = 0;
gdjs.PerguntaCode.GDbackButtonObjects1.length = 0;
gdjs.PerguntaCode.GDbackButtonObjects2.length = 0;
gdjs.PerguntaCode.GDperaObjects1.length = 0;
gdjs.PerguntaCode.GDperaObjects2.length = 0;
gdjs.PerguntaCode.GDperaSaysObjects1.length = 0;
gdjs.PerguntaCode.GDperaSaysObjects2.length = 0;
gdjs.PerguntaCode.GDvoltarAoTxtObjects1.length = 0;
gdjs.PerguntaCode.GDvoltarAoTxtObjects2.length = 0;
gdjs.PerguntaCode.GDtextoObjects1.length = 0;
gdjs.PerguntaCode.GDtextoObjects2.length = 0;
gdjs.PerguntaCode.GDvoltarAtivObjects1.length = 0;
gdjs.PerguntaCode.GDvoltarAtivObjects2.length = 0;
gdjs.PerguntaCode.GDNewObjectObjects1.length = 0;
gdjs.PerguntaCode.GDNewObjectObjects2.length = 0;
gdjs.PerguntaCode.GDperguntaObjects1.length = 0;
gdjs.PerguntaCode.GDperguntaObjects2.length = 0;

gdjs.PerguntaCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['PerguntaCode'] = gdjs.PerguntaCode;
