gdjs.TextoCode = {};
gdjs.TextoCode.GDforwardButtonObjects1= [];
gdjs.TextoCode.GDforwardButtonObjects2= [];
gdjs.TextoCode.GDbackButtonObjects1= [];
gdjs.TextoCode.GDbackButtonObjects2= [];
gdjs.TextoCode.GDperaObjects1= [];
gdjs.TextoCode.GDperaObjects2= [];
gdjs.TextoCode.GDperaSaysObjects1= [];
gdjs.TextoCode.GDperaSaysObjects2= [];
gdjs.TextoCode.GDvoltarAoTxtObjects1= [];
gdjs.TextoCode.GDvoltarAoTxtObjects2= [];
gdjs.TextoCode.GDtextoObjects1= [];
gdjs.TextoCode.GDtextoObjects2= [];
gdjs.TextoCode.GDvoltarAtivObjects1= [];
gdjs.TextoCode.GDvoltarAtivObjects2= [];

gdjs.TextoCode.conditionTrue_0 = {val:false};
gdjs.TextoCode.condition0IsTrue_0 = {val:false};
gdjs.TextoCode.condition1IsTrue_0 = {val:false};
gdjs.TextoCode.condition2IsTrue_0 = {val:false};
gdjs.TextoCode.condition3IsTrue_0 = {val:false};
gdjs.TextoCode.condition4IsTrue_0 = {val:false};
gdjs.TextoCode.condition5IsTrue_0 = {val:false};
gdjs.TextoCode.conditionTrue_1 = {val:false};
gdjs.TextoCode.condition0IsTrue_1 = {val:false};
gdjs.TextoCode.condition1IsTrue_1 = {val:false};
gdjs.TextoCode.condition2IsTrue_1 = {val:false};
gdjs.TextoCode.condition3IsTrue_1 = {val:false};
gdjs.TextoCode.condition4IsTrue_1 = {val:false};
gdjs.TextoCode.condition5IsTrue_1 = {val:false};


gdjs.TextoCode.mapOfGDgdjs_46TextoCode_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.TextoCode.GDforwardButtonObjects1});gdjs.TextoCode.mapOfGDgdjs_46TextoCode_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.TextoCode.GDforwardButtonObjects1});gdjs.TextoCode.mapOfGDgdjs_46TextoCode_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.TextoCode.GDbackButtonObjects1});gdjs.TextoCode.mapOfGDgdjs_46TextoCode_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.TextoCode.GDbackButtonObjects1});gdjs.TextoCode.mapOfGDgdjs_46TextoCode_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.TextoCode.GDforwardButtonObjects1});gdjs.TextoCode.mapOfGDgdjs_46TextoCode_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.TextoCode.GDbackButtonObjects1});gdjs.TextoCode.eventsList0xb25a8 = function(runtimeScene) {

{

gdjs.TextoCode.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
gdjs.TextoCode.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.TextoCode.condition0IsTrue_0.val = false;
gdjs.TextoCode.condition1IsTrue_0.val = false;
gdjs.TextoCode.condition2IsTrue_0.val = false;
gdjs.TextoCode.condition3IsTrue_0.val = false;
gdjs.TextoCode.condition4IsTrue_0.val = false;
{
gdjs.TextoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.TextoCode.condition0IsTrue_0.val ) {
{
gdjs.TextoCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TextoCode.mapOfGDgdjs_46TextoCode_46GDforwardButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.TextoCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.TextoCode.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.TextoCode.GDtextoObjects1[i].getAnimation() != 3 ) {
        gdjs.TextoCode.condition2IsTrue_0.val = true;
        gdjs.TextoCode.GDtextoObjects1[k] = gdjs.TextoCode.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.TextoCode.GDtextoObjects1.length = k;}if ( gdjs.TextoCode.condition2IsTrue_0.val ) {
{
gdjs.TextoCode.condition3IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "timerSinceScene");
}if ( gdjs.TextoCode.condition3IsTrue_0.val ) {
{
{gdjs.TextoCode.conditionTrue_1 = gdjs.TextoCode.condition4IsTrue_0;
gdjs.TextoCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9470252);
}
}}
}
}
}
if (gdjs.TextoCode.condition4IsTrue_0.val) {
/* Reuse gdjs.TextoCode.GDforwardButtonObjects1 */
/* Reuse gdjs.TextoCode.GDtextoObjects1 */
{for(var i = 0, len = gdjs.TextoCode.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.TextoCode.GDforwardButtonObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.TextoCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.TextoCode.GDtextoObjects1[i].setAnimation(gdjs.TextoCode.GDtextoObjects1[i].getAnimation() + (1));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timerSinceScene");
}}

}


{

gdjs.TextoCode.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));

gdjs.TextoCode.condition0IsTrue_0.val = false;
gdjs.TextoCode.condition1IsTrue_0.val = false;
{
gdjs.TextoCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.TextoCode.condition0IsTrue_0.val ) {
{
gdjs.TextoCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TextoCode.mapOfGDgdjs_46TextoCode_46GDforwardButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.TextoCode.condition1IsTrue_0.val) {
/* Reuse gdjs.TextoCode.GDforwardButtonObjects1 */
{for(var i = 0, len = gdjs.TextoCode.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.TextoCode.GDforwardButtonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.TextoCode.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));

gdjs.TextoCode.condition0IsTrue_0.val = false;
gdjs.TextoCode.condition1IsTrue_0.val = false;
{
gdjs.TextoCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.TextoCode.condition0IsTrue_0.val ) {
{
gdjs.TextoCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TextoCode.mapOfGDgdjs_46TextoCode_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.TextoCode.condition1IsTrue_0.val) {
/* Reuse gdjs.TextoCode.GDbackButtonObjects1 */
{for(var i = 0, len = gdjs.TextoCode.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.TextoCode.GDbackButtonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.TextoCode.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.TextoCode.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.TextoCode.condition0IsTrue_0.val = false;
gdjs.TextoCode.condition1IsTrue_0.val = false;
gdjs.TextoCode.condition2IsTrue_0.val = false;
gdjs.TextoCode.condition3IsTrue_0.val = false;
gdjs.TextoCode.condition4IsTrue_0.val = false;
{
gdjs.TextoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.TextoCode.condition0IsTrue_0.val ) {
{
gdjs.TextoCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TextoCode.mapOfGDgdjs_46TextoCode_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.TextoCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.TextoCode.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.TextoCode.GDtextoObjects1[i].getAnimation() != 0 ) {
        gdjs.TextoCode.condition2IsTrue_0.val = true;
        gdjs.TextoCode.GDtextoObjects1[k] = gdjs.TextoCode.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.TextoCode.GDtextoObjects1.length = k;}if ( gdjs.TextoCode.condition2IsTrue_0.val ) {
{
gdjs.TextoCode.condition3IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "timerSinceScene");
}if ( gdjs.TextoCode.condition3IsTrue_0.val ) {
{
{gdjs.TextoCode.conditionTrue_1 = gdjs.TextoCode.condition4IsTrue_0;
gdjs.TextoCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6884716);
}
}}
}
}
}
if (gdjs.TextoCode.condition4IsTrue_0.val) {
/* Reuse gdjs.TextoCode.GDbackButtonObjects1 */
/* Reuse gdjs.TextoCode.GDtextoObjects1 */
{for(var i = 0, len = gdjs.TextoCode.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.TextoCode.GDbackButtonObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.TextoCode.GDtextoObjects1.length ;i < len;++i) {
    gdjs.TextoCode.GDtextoObjects1[i].setAnimation(gdjs.TextoCode.GDtextoObjects1[i].getAnimation() - (1));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timerSinceScene");
}}

}


{

gdjs.TextoCode.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
gdjs.TextoCode.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.TextoCode.condition0IsTrue_0.val = false;
gdjs.TextoCode.condition1IsTrue_0.val = false;
gdjs.TextoCode.condition2IsTrue_0.val = false;
gdjs.TextoCode.condition3IsTrue_0.val = false;
gdjs.TextoCode.condition4IsTrue_0.val = false;
{
gdjs.TextoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.TextoCode.condition0IsTrue_0.val ) {
{
gdjs.TextoCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TextoCode.mapOfGDgdjs_46TextoCode_46GDforwardButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.TextoCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.TextoCode.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.TextoCode.GDtextoObjects1[i].getAnimation() == 3 ) {
        gdjs.TextoCode.condition2IsTrue_0.val = true;
        gdjs.TextoCode.GDtextoObjects1[k] = gdjs.TextoCode.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.TextoCode.GDtextoObjects1.length = k;}if ( gdjs.TextoCode.condition2IsTrue_0.val ) {
{
gdjs.TextoCode.condition3IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "timerSinceScene");
}if ( gdjs.TextoCode.condition3IsTrue_0.val ) {
{
{gdjs.TextoCode.conditionTrue_1 = gdjs.TextoCode.condition4IsTrue_0;
gdjs.TextoCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9471724);
}
}}
}
}
}
if (gdjs.TextoCode.condition4IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "A1", false);
}}

}


{

gdjs.TextoCode.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.TextoCode.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.TextoCode.condition0IsTrue_0.val = false;
gdjs.TextoCode.condition1IsTrue_0.val = false;
gdjs.TextoCode.condition2IsTrue_0.val = false;
gdjs.TextoCode.condition3IsTrue_0.val = false;
gdjs.TextoCode.condition4IsTrue_0.val = false;
{
gdjs.TextoCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.TextoCode.condition0IsTrue_0.val ) {
{
gdjs.TextoCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.TextoCode.mapOfGDgdjs_46TextoCode_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.TextoCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.TextoCode.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.TextoCode.GDtextoObjects1[i].getAnimation() == 0 ) {
        gdjs.TextoCode.condition2IsTrue_0.val = true;
        gdjs.TextoCode.GDtextoObjects1[k] = gdjs.TextoCode.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.TextoCode.GDtextoObjects1.length = k;}if ( gdjs.TextoCode.condition2IsTrue_0.val ) {
{
gdjs.TextoCode.condition3IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "timerSinceScene");
}if ( gdjs.TextoCode.condition3IsTrue_0.val ) {
{
{gdjs.TextoCode.conditionTrue_1 = gdjs.TextoCode.condition4IsTrue_0;
gdjs.TextoCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6860812);
}
}}
}
}
}
if (gdjs.TextoCode.condition4IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Capa", false);
}}

}


}; //End of gdjs.TextoCode.eventsList0xb25a8


gdjs.TextoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.TextoCode.GDforwardButtonObjects1.length = 0;
gdjs.TextoCode.GDforwardButtonObjects2.length = 0;
gdjs.TextoCode.GDbackButtonObjects1.length = 0;
gdjs.TextoCode.GDbackButtonObjects2.length = 0;
gdjs.TextoCode.GDperaObjects1.length = 0;
gdjs.TextoCode.GDperaObjects2.length = 0;
gdjs.TextoCode.GDperaSaysObjects1.length = 0;
gdjs.TextoCode.GDperaSaysObjects2.length = 0;
gdjs.TextoCode.GDvoltarAoTxtObjects1.length = 0;
gdjs.TextoCode.GDvoltarAoTxtObjects2.length = 0;
gdjs.TextoCode.GDtextoObjects1.length = 0;
gdjs.TextoCode.GDtextoObjects2.length = 0;
gdjs.TextoCode.GDvoltarAtivObjects1.length = 0;
gdjs.TextoCode.GDvoltarAtivObjects2.length = 0;

gdjs.TextoCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['TextoCode'] = gdjs.TextoCode;
