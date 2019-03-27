gdjs.textoCode = {};
gdjs.textoCode.GDperaObjects1= [];
gdjs.textoCode.GDperaObjects2= [];
gdjs.textoCode.GDbackButtonObjects1= [];
gdjs.textoCode.GDbackButtonObjects2= [];
gdjs.textoCode.GDforwardButtonObjects1= [];
gdjs.textoCode.GDforwardButtonObjects2= [];
gdjs.textoCode.GDtextoObjects1= [];
gdjs.textoCode.GDtextoObjects2= [];
gdjs.textoCode.GDvoltarAtivObjects1= [];
gdjs.textoCode.GDvoltarAtivObjects2= [];
gdjs.textoCode.GDvoltarAoTxtObjects1= [];
gdjs.textoCode.GDvoltarAoTxtObjects2= [];
gdjs.textoCode.GDperaSaysObjects1= [];
gdjs.textoCode.GDperaSaysObjects2= [];

gdjs.textoCode.conditionTrue_0 = {val:false};
gdjs.textoCode.condition0IsTrue_0 = {val:false};
gdjs.textoCode.condition1IsTrue_0 = {val:false};
gdjs.textoCode.condition2IsTrue_0 = {val:false};
gdjs.textoCode.condition3IsTrue_0 = {val:false};
gdjs.textoCode.condition4IsTrue_0 = {val:false};
gdjs.textoCode.condition5IsTrue_0 = {val:false};
gdjs.textoCode.conditionTrue_1 = {val:false};
gdjs.textoCode.condition0IsTrue_1 = {val:false};
gdjs.textoCode.condition1IsTrue_1 = {val:false};
gdjs.textoCode.condition2IsTrue_1 = {val:false};
gdjs.textoCode.condition3IsTrue_1 = {val:false};
gdjs.textoCode.condition4IsTrue_1 = {val:false};
gdjs.textoCode.condition5IsTrue_1 = {val:false};


gdjs.textoCode.mapOfGDgdjs_46textoCode_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.textoCode.GDforwardButtonObjects1});gdjs.textoCode.mapOfGDgdjs_46textoCode_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.textoCode.GDforwardButtonObjects1});gdjs.textoCode.mapOfGDgdjs_46textoCode_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.textoCode.GDbackButtonObjects1});gdjs.textoCode.mapOfGDgdjs_46textoCode_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.textoCode.GDbackButtonObjects1});gdjs.textoCode.mapOfGDgdjs_46textoCode_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.textoCode.GDforwardButtonObjects1});gdjs.textoCode.mapOfGDgdjs_46textoCode_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.textoCode.GDbackButtonObjects1});gdjs.textoCode.eventsList0xb25a8 = function(runtimeScene) {

{

gdjs.textoCode.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
gdjs.textoCode.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.textoCode.condition0IsTrue_0.val = false;
gdjs.textoCode.condition1IsTrue_0.val = false;
gdjs.textoCode.condition2IsTrue_0.val = false;
gdjs.textoCode.condition3IsTrue_0.val = false;
gdjs.textoCode.condition4IsTrue_0.val = false;
{
gdjs.textoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.textoCode.condition0IsTrue_0.val ) {
{
gdjs.textoCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.textoCode.mapOfGDgdjs_46textoCode_46GDforwardButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.textoCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.textoCode.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.textoCode.GDtextoObjects1[i].getAnimation() != 4 ) {
        gdjs.textoCode.condition2IsTrue_0.val = true;
        gdjs.textoCode.GDtextoObjects1[k] = gdjs.textoCode.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.textoCode.GDtextoObjects1.length = k;}if ( gdjs.textoCode.condition2IsTrue_0.val ) {
{
gdjs.textoCode.condition3IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "timeSinceScene");
}if ( gdjs.textoCode.condition3IsTrue_0.val ) {
{
{gdjs.textoCode.conditionTrue_1 = gdjs.textoCode.condition4IsTrue_0;
gdjs.textoCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9254684);
}
}}
}
}
}
if (gdjs.textoCode.condition4IsTrue_0.val) {
/* Reuse gdjs.textoCode.GDforwardButtonObjects1 */
/* Reuse gdjs.textoCode.GDtextoObjects1 */
{for(var i = 0, len = gdjs.textoCode.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.textoCode.GDforwardButtonObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.textoCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.textoCode.GDtextoObjects1[i].setAnimation(gdjs.textoCode.GDtextoObjects1[i].getAnimation() + (1));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timeSinceScene");
}}

}


{

gdjs.textoCode.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));

gdjs.textoCode.condition0IsTrue_0.val = false;
gdjs.textoCode.condition1IsTrue_0.val = false;
{
gdjs.textoCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.textoCode.condition0IsTrue_0.val ) {
{
gdjs.textoCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.textoCode.mapOfGDgdjs_46textoCode_46GDforwardButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.textoCode.condition1IsTrue_0.val) {
/* Reuse gdjs.textoCode.GDforwardButtonObjects1 */
{for(var i = 0, len = gdjs.textoCode.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.textoCode.GDforwardButtonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.textoCode.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.textoCode.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.textoCode.condition0IsTrue_0.val = false;
gdjs.textoCode.condition1IsTrue_0.val = false;
gdjs.textoCode.condition2IsTrue_0.val = false;
gdjs.textoCode.condition3IsTrue_0.val = false;
{
gdjs.textoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.textoCode.condition0IsTrue_0.val ) {
{
gdjs.textoCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.textoCode.mapOfGDgdjs_46textoCode_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.textoCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.textoCode.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.textoCode.GDtextoObjects1[i].getAnimation() != 0 ) {
        gdjs.textoCode.condition2IsTrue_0.val = true;
        gdjs.textoCode.GDtextoObjects1[k] = gdjs.textoCode.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.textoCode.GDtextoObjects1.length = k;}if ( gdjs.textoCode.condition2IsTrue_0.val ) {
{
{gdjs.textoCode.conditionTrue_1 = gdjs.textoCode.condition3IsTrue_0;
gdjs.textoCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9489804);
}
}}
}
}
if (gdjs.textoCode.condition3IsTrue_0.val) {
/* Reuse gdjs.textoCode.GDbackButtonObjects1 */
/* Reuse gdjs.textoCode.GDtextoObjects1 */
{for(var i = 0, len = gdjs.textoCode.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.textoCode.GDbackButtonObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.textoCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.textoCode.GDtextoObjects1[i].setAnimation(gdjs.textoCode.GDtextoObjects1[i].getAnimation() - (1));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timeSinceScene");
}}

}


{

gdjs.textoCode.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.textoCode.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.textoCode.condition0IsTrue_0.val = false;
gdjs.textoCode.condition1IsTrue_0.val = false;
gdjs.textoCode.condition2IsTrue_0.val = false;
gdjs.textoCode.condition3IsTrue_0.val = false;
gdjs.textoCode.condition4IsTrue_0.val = false;
{
gdjs.textoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.textoCode.condition0IsTrue_0.val ) {
{
gdjs.textoCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.textoCode.mapOfGDgdjs_46textoCode_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.textoCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.textoCode.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.textoCode.GDtextoObjects1[i].getAnimation() == 0 ) {
        gdjs.textoCode.condition2IsTrue_0.val = true;
        gdjs.textoCode.GDtextoObjects1[k] = gdjs.textoCode.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.textoCode.GDtextoObjects1.length = k;}if ( gdjs.textoCode.condition2IsTrue_0.val ) {
{
gdjs.textoCode.condition3IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "timeSinceScene");
}if ( gdjs.textoCode.condition3IsTrue_0.val ) {
{
{gdjs.textoCode.conditionTrue_1 = gdjs.textoCode.condition4IsTrue_0;
gdjs.textoCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9398692);
}
}}
}
}
}
if (gdjs.textoCode.condition4IsTrue_0.val) {
/* Reuse gdjs.textoCode.GDbackButtonObjects1 */
{for(var i = 0, len = gdjs.textoCode.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.textoCode.GDbackButtonObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Capa", false);
}}

}


{

gdjs.textoCode.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
gdjs.textoCode.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.textoCode.condition0IsTrue_0.val = false;
gdjs.textoCode.condition1IsTrue_0.val = false;
gdjs.textoCode.condition2IsTrue_0.val = false;
gdjs.textoCode.condition3IsTrue_0.val = false;
gdjs.textoCode.condition4IsTrue_0.val = false;
{
gdjs.textoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.textoCode.condition0IsTrue_0.val ) {
{
gdjs.textoCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.textoCode.mapOfGDgdjs_46textoCode_46GDforwardButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.textoCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.textoCode.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.textoCode.GDtextoObjects1[i].getAnimation() == 4 ) {
        gdjs.textoCode.condition2IsTrue_0.val = true;
        gdjs.textoCode.GDtextoObjects1[k] = gdjs.textoCode.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.textoCode.GDtextoObjects1.length = k;}if ( gdjs.textoCode.condition2IsTrue_0.val ) {
{
gdjs.textoCode.condition3IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.8, "timeSinceScene");
}if ( gdjs.textoCode.condition3IsTrue_0.val ) {
{
{gdjs.textoCode.conditionTrue_1 = gdjs.textoCode.condition4IsTrue_0;
gdjs.textoCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7392260);
}
}}
}
}
}
if (gdjs.textoCode.condition4IsTrue_0.val) {
gdjs.textoCode.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
{for(var i = 0, len = gdjs.textoCode.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.textoCode.GDbackButtonObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ex1", false);
}}

}


{

gdjs.textoCode.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));

gdjs.textoCode.condition0IsTrue_0.val = false;
gdjs.textoCode.condition1IsTrue_0.val = false;
{
gdjs.textoCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.textoCode.condition0IsTrue_0.val ) {
{
gdjs.textoCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.textoCode.mapOfGDgdjs_46textoCode_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.textoCode.condition1IsTrue_0.val) {
/* Reuse gdjs.textoCode.GDbackButtonObjects1 */
{for(var i = 0, len = gdjs.textoCode.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.textoCode.GDbackButtonObjects1[i].setAnimation(0);
}
}}

}


}; //End of gdjs.textoCode.eventsList0xb25a8


gdjs.textoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.textoCode.GDperaObjects1.length = 0;
gdjs.textoCode.GDperaObjects2.length = 0;
gdjs.textoCode.GDbackButtonObjects1.length = 0;
gdjs.textoCode.GDbackButtonObjects2.length = 0;
gdjs.textoCode.GDforwardButtonObjects1.length = 0;
gdjs.textoCode.GDforwardButtonObjects2.length = 0;
gdjs.textoCode.GDtextoObjects1.length = 0;
gdjs.textoCode.GDtextoObjects2.length = 0;
gdjs.textoCode.GDvoltarAtivObjects1.length = 0;
gdjs.textoCode.GDvoltarAtivObjects2.length = 0;
gdjs.textoCode.GDvoltarAoTxtObjects1.length = 0;
gdjs.textoCode.GDvoltarAoTxtObjects2.length = 0;
gdjs.textoCode.GDperaSaysObjects1.length = 0;
gdjs.textoCode.GDperaSaysObjects2.length = 0;

gdjs.textoCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['textoCode'] = gdjs.textoCode;
