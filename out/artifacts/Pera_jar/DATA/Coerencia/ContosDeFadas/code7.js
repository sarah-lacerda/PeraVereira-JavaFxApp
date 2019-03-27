gdjs.Scene8Code = {};
gdjs.Scene8Code.GDforwardButtonObjects1= [];
gdjs.Scene8Code.GDforwardButtonObjects2= [];
gdjs.Scene8Code.GDbackButtonObjects1= [];
gdjs.Scene8Code.GDbackButtonObjects2= [];
gdjs.Scene8Code.GDperaVereiraObjects1= [];
gdjs.Scene8Code.GDperaVereiraObjects2= [];
gdjs.Scene8Code.GDtextoObjects1= [];
gdjs.Scene8Code.GDtextoObjects2= [];
gdjs.Scene8Code.GDgoBackToAtivObjects1= [];
gdjs.Scene8Code.GDgoBackToAtivObjects2= [];
gdjs.Scene8Code.GDgoBackToTxtObjects1= [];
gdjs.Scene8Code.GDgoBackToTxtObjects2= [];
gdjs.Scene8Code.GDbackgroundObjects1= [];
gdjs.Scene8Code.GDbackgroundObjects2= [];
gdjs.Scene8Code.GDperguntaObjects1= [];
gdjs.Scene8Code.GDperguntaObjects2= [];
gdjs.Scene8Code.GDbruxaObjects1= [];
gdjs.Scene8Code.GDbruxaObjects2= [];
gdjs.Scene8Code.GDcowboyObjects1= [];
gdjs.Scene8Code.GDcowboyObjects2= [];
gdjs.Scene8Code.GDdragonObjects1= [];
gdjs.Scene8Code.GDdragonObjects2= [];
gdjs.Scene8Code.GDfadaObjects1= [];
gdjs.Scene8Code.GDfadaObjects2= [];
gdjs.Scene8Code.GDwhikObjects1= [];
gdjs.Scene8Code.GDwhikObjects2= [];

gdjs.Scene8Code.conditionTrue_0 = {val:false};
gdjs.Scene8Code.condition0IsTrue_0 = {val:false};
gdjs.Scene8Code.condition1IsTrue_0 = {val:false};
gdjs.Scene8Code.condition2IsTrue_0 = {val:false};


gdjs.Scene8Code.mapOfGDgdjs_46Scene8Code_46GDdragonObjects1Objects = Hashtable.newFrom({"dragon": gdjs.Scene8Code.GDdragonObjects1});gdjs.Scene8Code.mapOfGDgdjs_46Scene8Code_46GDbruxaObjects1Objects = Hashtable.newFrom({"bruxa": gdjs.Scene8Code.GDbruxaObjects1});gdjs.Scene8Code.mapOfGDgdjs_46Scene8Code_46GDfadaObjects1Objects = Hashtable.newFrom({"fada": gdjs.Scene8Code.GDfadaObjects1});gdjs.Scene8Code.mapOfGDgdjs_46Scene8Code_46GDcowboyObjects1Objects = Hashtable.newFrom({"cowboy": gdjs.Scene8Code.GDcowboyObjects1});gdjs.Scene8Code.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.Scene8Code.condition0IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Scene8Code.condition0IsTrue_0.val) {
gdjs.Scene8Code.GDbruxaObjects1.createFrom(runtimeScene.getObjects("bruxa"));
gdjs.Scene8Code.GDcowboyObjects1.createFrom(runtimeScene.getObjects("cowboy"));
gdjs.Scene8Code.GDdragonObjects1.createFrom(runtimeScene.getObjects("dragon"));
gdjs.Scene8Code.GDfadaObjects1.createFrom(runtimeScene.getObjects("fada"));
gdjs.Scene8Code.GDperaVereiraObjects1.createFrom(runtimeScene.getObjects("peraVereira"));
{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.random(22));
}{for(var i = 0, len = gdjs.Scene8Code.GDbruxaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDbruxaObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDcowboyObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDcowboyObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDdragonObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDdragonObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDfadaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDfadaObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDperaVereiraObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDperaVereiraObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.Scene8Code.GDbruxaObjects1.createFrom(runtimeScene.getObjects("bruxa"));

gdjs.Scene8Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene8Code.GDbruxaObjects1.length;i<l;++i) {
    if ( gdjs.Scene8Code.GDbruxaObjects1[i].getOpacity() < 255 ) {
        gdjs.Scene8Code.condition0IsTrue_0.val = true;
        gdjs.Scene8Code.GDbruxaObjects1[k] = gdjs.Scene8Code.GDbruxaObjects1[i];
        ++k;
    }
}
gdjs.Scene8Code.GDbruxaObjects1.length = k;}if (gdjs.Scene8Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene8Code.GDbruxaObjects1 */
gdjs.Scene8Code.GDcowboyObjects1.createFrom(runtimeScene.getObjects("cowboy"));
gdjs.Scene8Code.GDdragonObjects1.createFrom(runtimeScene.getObjects("dragon"));
gdjs.Scene8Code.GDfadaObjects1.createFrom(runtimeScene.getObjects("fada"));
gdjs.Scene8Code.GDperaVereiraObjects1.createFrom(runtimeScene.getObjects("peraVereira"));
{for(var i = 0, len = gdjs.Scene8Code.GDbruxaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDbruxaObjects1[i].setOpacity(gdjs.Scene8Code.GDbruxaObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Scene8Code.GDcowboyObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDcowboyObjects1[i].setOpacity(gdjs.Scene8Code.GDcowboyObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Scene8Code.GDdragonObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDdragonObjects1[i].setOpacity(gdjs.Scene8Code.GDdragonObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Scene8Code.GDfadaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDfadaObjects1[i].setOpacity(gdjs.Scene8Code.GDfadaObjects1[i].getOpacity() + (255 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Scene8Code.GDperaVereiraObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDperaVereiraObjects1[i].setOpacity(gdjs.Scene8Code.GDperaVereiraObjects1[i].getOpacity() + (999 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.Scene8Code.condition0IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if (gdjs.Scene8Code.condition0IsTrue_0.val) {
gdjs.Scene8Code.GDbruxaObjects1.createFrom(runtimeScene.getObjects("bruxa"));
gdjs.Scene8Code.GDcowboyObjects1.createFrom(runtimeScene.getObjects("cowboy"));
gdjs.Scene8Code.GDdragonObjects1.createFrom(runtimeScene.getObjects("dragon"));
gdjs.Scene8Code.GDfadaObjects1.createFrom(runtimeScene.getObjects("fada"));
{for(var i = 0, len = gdjs.Scene8Code.GDbruxaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDbruxaObjects1[i].setPosition(224,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDcowboyObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDcowboyObjects1[i].setPosition(544,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDdragonObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDdragonObjects1[i].setPosition(224,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDfadaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDfadaObjects1[i].setPosition(544,480);
}
}}

}


{


gdjs.Scene8Code.condition0IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if (gdjs.Scene8Code.condition0IsTrue_0.val) {
gdjs.Scene8Code.GDbruxaObjects1.createFrom(runtimeScene.getObjects("bruxa"));
gdjs.Scene8Code.GDcowboyObjects1.createFrom(runtimeScene.getObjects("cowboy"));
gdjs.Scene8Code.GDdragonObjects1.createFrom(runtimeScene.getObjects("dragon"));
gdjs.Scene8Code.GDfadaObjects1.createFrom(runtimeScene.getObjects("fada"));
{for(var i = 0, len = gdjs.Scene8Code.GDbruxaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDbruxaObjects1[i].setPosition(544,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDfadaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDfadaObjects1[i].setPosition(224,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDdragonObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDdragonObjects1[i].setPosition(544,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDcowboyObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDcowboyObjects1[i].setPosition(224,192);
}
}}

}


{


gdjs.Scene8Code.condition0IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 2;
}if (gdjs.Scene8Code.condition0IsTrue_0.val) {
gdjs.Scene8Code.GDbruxaObjects1.createFrom(runtimeScene.getObjects("bruxa"));
gdjs.Scene8Code.GDcowboyObjects1.createFrom(runtimeScene.getObjects("cowboy"));
gdjs.Scene8Code.GDdragonObjects1.createFrom(runtimeScene.getObjects("dragon"));
gdjs.Scene8Code.GDfadaObjects1.createFrom(runtimeScene.getObjects("fada"));
{for(var i = 0, len = gdjs.Scene8Code.GDbruxaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDbruxaObjects1[i].setPosition(224,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDfadaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDfadaObjects1[i].setPosition(544,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDdragonObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDdragonObjects1[i].setPosition(224,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDcowboyObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDcowboyObjects1[i].setPosition(544,480);
}
}}

}


{


gdjs.Scene8Code.condition0IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 3;
}if (gdjs.Scene8Code.condition0IsTrue_0.val) {
gdjs.Scene8Code.GDbruxaObjects1.createFrom(runtimeScene.getObjects("bruxa"));
gdjs.Scene8Code.GDcowboyObjects1.createFrom(runtimeScene.getObjects("cowboy"));
gdjs.Scene8Code.GDdragonObjects1.createFrom(runtimeScene.getObjects("dragon"));
gdjs.Scene8Code.GDfadaObjects1.createFrom(runtimeScene.getObjects("fada"));
{for(var i = 0, len = gdjs.Scene8Code.GDbruxaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDbruxaObjects1[i].setPosition(544,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDfadaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDfadaObjects1[i].setPosition(224,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDdragonObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDdragonObjects1[i].setPosition(544,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDcowboyObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDcowboyObjects1[i].setPosition(224,480);
}
}}

}


{


gdjs.Scene8Code.condition0IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 4;
}if (gdjs.Scene8Code.condition0IsTrue_0.val) {
gdjs.Scene8Code.GDbruxaObjects1.createFrom(runtimeScene.getObjects("bruxa"));
gdjs.Scene8Code.GDcowboyObjects1.createFrom(runtimeScene.getObjects("cowboy"));
gdjs.Scene8Code.GDdragonObjects1.createFrom(runtimeScene.getObjects("dragon"));
gdjs.Scene8Code.GDfadaObjects1.createFrom(runtimeScene.getObjects("fada"));
{for(var i = 0, len = gdjs.Scene8Code.GDbruxaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDbruxaObjects1[i].setPosition(224,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDfadaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDfadaObjects1[i].setPosition(544,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDdragonObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDdragonObjects1[i].setPosition(544,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDcowboyObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDcowboyObjects1[i].setPosition(224,480);
}
}}

}


{


gdjs.Scene8Code.condition0IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 5;
}if (gdjs.Scene8Code.condition0IsTrue_0.val) {
gdjs.Scene8Code.GDbruxaObjects1.createFrom(runtimeScene.getObjects("bruxa"));
gdjs.Scene8Code.GDcowboyObjects1.createFrom(runtimeScene.getObjects("cowboy"));
gdjs.Scene8Code.GDdragonObjects1.createFrom(runtimeScene.getObjects("dragon"));
gdjs.Scene8Code.GDfadaObjects1.createFrom(runtimeScene.getObjects("fada"));
{for(var i = 0, len = gdjs.Scene8Code.GDbruxaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDbruxaObjects1[i].setPosition(224,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDfadaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDfadaObjects1[i].setPosition(224,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDdragonObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDdragonObjects1[i].setPosition(544,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDcowboyObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDcowboyObjects1[i].setPosition(544,480);
}
}}

}


{


gdjs.Scene8Code.condition0IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 6;
}if (gdjs.Scene8Code.condition0IsTrue_0.val) {
gdjs.Scene8Code.GDbruxaObjects1.createFrom(runtimeScene.getObjects("bruxa"));
gdjs.Scene8Code.GDcowboyObjects1.createFrom(runtimeScene.getObjects("cowboy"));
gdjs.Scene8Code.GDdragonObjects1.createFrom(runtimeScene.getObjects("dragon"));
gdjs.Scene8Code.GDfadaObjects1.createFrom(runtimeScene.getObjects("fada"));
{for(var i = 0, len = gdjs.Scene8Code.GDbruxaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDbruxaObjects1[i].setPosition(544,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDfadaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDfadaObjects1[i].setPosition(544,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDdragonObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDdragonObjects1[i].setPosition(224,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDcowboyObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDcowboyObjects1[i].setPosition(224,192);
}
}}

}


{


gdjs.Scene8Code.condition0IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 7;
}if (gdjs.Scene8Code.condition0IsTrue_0.val) {
gdjs.Scene8Code.GDbruxaObjects1.createFrom(runtimeScene.getObjects("bruxa"));
gdjs.Scene8Code.GDcowboyObjects1.createFrom(runtimeScene.getObjects("cowboy"));
gdjs.Scene8Code.GDdragonObjects1.createFrom(runtimeScene.getObjects("dragon"));
gdjs.Scene8Code.GDfadaObjects1.createFrom(runtimeScene.getObjects("fada"));
{for(var i = 0, len = gdjs.Scene8Code.GDbruxaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDbruxaObjects1[i].setPosition(224,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDfadaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDfadaObjects1[i].setPosition(544,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDdragonObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDdragonObjects1[i].setPosition(544,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDcowboyObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDcowboyObjects1[i].setPosition(224,480);
}
}}

}


{


gdjs.Scene8Code.condition0IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 8;
}if (gdjs.Scene8Code.condition0IsTrue_0.val) {
gdjs.Scene8Code.GDbruxaObjects1.createFrom(runtimeScene.getObjects("bruxa"));
gdjs.Scene8Code.GDcowboyObjects1.createFrom(runtimeScene.getObjects("cowboy"));
gdjs.Scene8Code.GDdragonObjects1.createFrom(runtimeScene.getObjects("dragon"));
gdjs.Scene8Code.GDfadaObjects1.createFrom(runtimeScene.getObjects("fada"));
{for(var i = 0, len = gdjs.Scene8Code.GDbruxaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDbruxaObjects1[i].setPosition(224,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDfadaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDfadaObjects1[i].setPosition(544,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDdragonObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDdragonObjects1[i].setPosition(224,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDcowboyObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDcowboyObjects1[i].setPosition(544,192);
}
}}

}


{


gdjs.Scene8Code.condition0IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 9;
}if (gdjs.Scene8Code.condition0IsTrue_0.val) {
gdjs.Scene8Code.GDbruxaObjects1.createFrom(runtimeScene.getObjects("bruxa"));
gdjs.Scene8Code.GDcowboyObjects1.createFrom(runtimeScene.getObjects("cowboy"));
gdjs.Scene8Code.GDdragonObjects1.createFrom(runtimeScene.getObjects("dragon"));
gdjs.Scene8Code.GDfadaObjects1.createFrom(runtimeScene.getObjects("fada"));
{for(var i = 0, len = gdjs.Scene8Code.GDbruxaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDbruxaObjects1[i].setPosition(224,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDfadaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDfadaObjects1[i].setPosition(224,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDdragonObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDdragonObjects1[i].setPosition(544,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDcowboyObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDcowboyObjects1[i].setPosition(544,480);
}
}}

}


{


gdjs.Scene8Code.condition0IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 10;
}if (gdjs.Scene8Code.condition0IsTrue_0.val) {
gdjs.Scene8Code.GDbruxaObjects1.createFrom(runtimeScene.getObjects("bruxa"));
gdjs.Scene8Code.GDcowboyObjects1.createFrom(runtimeScene.getObjects("cowboy"));
gdjs.Scene8Code.GDdragonObjects1.createFrom(runtimeScene.getObjects("dragon"));
gdjs.Scene8Code.GDfadaObjects1.createFrom(runtimeScene.getObjects("fada"));
{for(var i = 0, len = gdjs.Scene8Code.GDbruxaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDbruxaObjects1[i].setPosition(544,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDfadaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDfadaObjects1[i].setPosition(544,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDdragonObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDdragonObjects1[i].setPosition(224,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDcowboyObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDcowboyObjects1[i].setPosition(224,480);
}
}}

}


{


gdjs.Scene8Code.condition0IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 11;
}if (gdjs.Scene8Code.condition0IsTrue_0.val) {
gdjs.Scene8Code.GDbruxaObjects1.createFrom(runtimeScene.getObjects("bruxa"));
gdjs.Scene8Code.GDcowboyObjects1.createFrom(runtimeScene.getObjects("cowboy"));
gdjs.Scene8Code.GDdragonObjects1.createFrom(runtimeScene.getObjects("dragon"));
gdjs.Scene8Code.GDfadaObjects1.createFrom(runtimeScene.getObjects("fada"));
{for(var i = 0, len = gdjs.Scene8Code.GDbruxaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDbruxaObjects1[i].setPosition(544,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDfadaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDfadaObjects1[i].setPosition(224,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDdragonObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDdragonObjects1[i].setPosition(224,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDcowboyObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDcowboyObjects1[i].setPosition(544,192);
}
}}

}


{


gdjs.Scene8Code.condition0IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 12;
}if (gdjs.Scene8Code.condition0IsTrue_0.val) {
gdjs.Scene8Code.GDbruxaObjects1.createFrom(runtimeScene.getObjects("bruxa"));
gdjs.Scene8Code.GDcowboyObjects1.createFrom(runtimeScene.getObjects("cowboy"));
gdjs.Scene8Code.GDdragonObjects1.createFrom(runtimeScene.getObjects("dragon"));
gdjs.Scene8Code.GDfadaObjects1.createFrom(runtimeScene.getObjects("fada"));
{for(var i = 0, len = gdjs.Scene8Code.GDbruxaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDbruxaObjects1[i].setPosition(544,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDfadaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDfadaObjects1[i].setPosition(224,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDdragonObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDdragonObjects1[i].setPosition(544,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDcowboyObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDcowboyObjects1[i].setPosition(224,480);
}
}}

}


{


gdjs.Scene8Code.condition0IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 13;
}if (gdjs.Scene8Code.condition0IsTrue_0.val) {
gdjs.Scene8Code.GDbruxaObjects1.createFrom(runtimeScene.getObjects("bruxa"));
gdjs.Scene8Code.GDcowboyObjects1.createFrom(runtimeScene.getObjects("cowboy"));
gdjs.Scene8Code.GDdragonObjects1.createFrom(runtimeScene.getObjects("dragon"));
gdjs.Scene8Code.GDfadaObjects1.createFrom(runtimeScene.getObjects("fada"));
{for(var i = 0, len = gdjs.Scene8Code.GDbruxaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDbruxaObjects1[i].setPosition(544,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDfadaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDfadaObjects1[i].setPosition(224,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDdragonObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDdragonObjects1[i].setPosition(224,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDcowboyObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDcowboyObjects1[i].setPosition(544,480);
}
}}

}


{


gdjs.Scene8Code.condition0IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 14;
}if (gdjs.Scene8Code.condition0IsTrue_0.val) {
gdjs.Scene8Code.GDbruxaObjects1.createFrom(runtimeScene.getObjects("bruxa"));
gdjs.Scene8Code.GDcowboyObjects1.createFrom(runtimeScene.getObjects("cowboy"));
gdjs.Scene8Code.GDdragonObjects1.createFrom(runtimeScene.getObjects("dragon"));
gdjs.Scene8Code.GDfadaObjects1.createFrom(runtimeScene.getObjects("fada"));
{for(var i = 0, len = gdjs.Scene8Code.GDbruxaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDbruxaObjects1[i].setPosition(544,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDfadaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDfadaObjects1[i].setPosition(224,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDdragonObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDdragonObjects1[i].setPosition(544,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDcowboyObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDcowboyObjects1[i].setPosition(224,192);
}
}}

}


{


gdjs.Scene8Code.condition0IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 15;
}if (gdjs.Scene8Code.condition0IsTrue_0.val) {
gdjs.Scene8Code.GDbruxaObjects1.createFrom(runtimeScene.getObjects("bruxa"));
gdjs.Scene8Code.GDcowboyObjects1.createFrom(runtimeScene.getObjects("cowboy"));
gdjs.Scene8Code.GDdragonObjects1.createFrom(runtimeScene.getObjects("dragon"));
gdjs.Scene8Code.GDfadaObjects1.createFrom(runtimeScene.getObjects("fada"));
{for(var i = 0, len = gdjs.Scene8Code.GDbruxaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDbruxaObjects1[i].setPosition(544,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDfadaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDfadaObjects1[i].setPosition(224,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDdragonObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDdragonObjects1[i].setPosition(224,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDcowboyObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDcowboyObjects1[i].setPosition(544,480);
}
}}

}


{


gdjs.Scene8Code.condition0IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 16;
}if (gdjs.Scene8Code.condition0IsTrue_0.val) {
gdjs.Scene8Code.GDbruxaObjects1.createFrom(runtimeScene.getObjects("bruxa"));
gdjs.Scene8Code.GDcowboyObjects1.createFrom(runtimeScene.getObjects("cowboy"));
gdjs.Scene8Code.GDdragonObjects1.createFrom(runtimeScene.getObjects("dragon"));
gdjs.Scene8Code.GDfadaObjects1.createFrom(runtimeScene.getObjects("fada"));
{for(var i = 0, len = gdjs.Scene8Code.GDbruxaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDbruxaObjects1[i].setPosition(544,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDfadaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDfadaObjects1[i].setPosition(544,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDdragonObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDdragonObjects1[i].setPosition(224,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDcowboyObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDcowboyObjects1[i].setPosition(224,192);
}
}}

}


{


gdjs.Scene8Code.condition0IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 17;
}if (gdjs.Scene8Code.condition0IsTrue_0.val) {
gdjs.Scene8Code.GDbruxaObjects1.createFrom(runtimeScene.getObjects("bruxa"));
gdjs.Scene8Code.GDcowboyObjects1.createFrom(runtimeScene.getObjects("cowboy"));
gdjs.Scene8Code.GDdragonObjects1.createFrom(runtimeScene.getObjects("dragon"));
gdjs.Scene8Code.GDfadaObjects1.createFrom(runtimeScene.getObjects("fada"));
{for(var i = 0, len = gdjs.Scene8Code.GDbruxaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDbruxaObjects1[i].setPosition(224,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDfadaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDfadaObjects1[i].setPosition(544,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDdragonObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDdragonObjects1[i].setPosition(224,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDcowboyObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDcowboyObjects1[i].setPosition(544,480);
}
}}

}


{


gdjs.Scene8Code.condition0IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 18;
}if (gdjs.Scene8Code.condition0IsTrue_0.val) {
gdjs.Scene8Code.GDbruxaObjects1.createFrom(runtimeScene.getObjects("bruxa"));
gdjs.Scene8Code.GDcowboyObjects1.createFrom(runtimeScene.getObjects("cowboy"));
gdjs.Scene8Code.GDdragonObjects1.createFrom(runtimeScene.getObjects("dragon"));
gdjs.Scene8Code.GDfadaObjects1.createFrom(runtimeScene.getObjects("fada"));
{for(var i = 0, len = gdjs.Scene8Code.GDbruxaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDbruxaObjects1[i].setPosition(224,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDfadaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDfadaObjects1[i].setPosition(544,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDdragonObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDdragonObjects1[i].setPosition(544,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDcowboyObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDcowboyObjects1[i].setPosition(224,192);
}
}}

}


{


gdjs.Scene8Code.condition0IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 19;
}if (gdjs.Scene8Code.condition0IsTrue_0.val) {
gdjs.Scene8Code.GDbruxaObjects1.createFrom(runtimeScene.getObjects("bruxa"));
gdjs.Scene8Code.GDcowboyObjects1.createFrom(runtimeScene.getObjects("cowboy"));
gdjs.Scene8Code.GDdragonObjects1.createFrom(runtimeScene.getObjects("dragon"));
gdjs.Scene8Code.GDfadaObjects1.createFrom(runtimeScene.getObjects("fada"));
{for(var i = 0, len = gdjs.Scene8Code.GDbruxaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDbruxaObjects1[i].setPosition(224,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDfadaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDfadaObjects1[i].setPosition(544,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDdragonObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDdragonObjects1[i].setPosition(224,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDcowboyObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDcowboyObjects1[i].setPosition(544,192);
}
}}

}


{


gdjs.Scene8Code.condition0IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 20;
}if (gdjs.Scene8Code.condition0IsTrue_0.val) {
gdjs.Scene8Code.GDbruxaObjects1.createFrom(runtimeScene.getObjects("bruxa"));
gdjs.Scene8Code.GDcowboyObjects1.createFrom(runtimeScene.getObjects("cowboy"));
gdjs.Scene8Code.GDdragonObjects1.createFrom(runtimeScene.getObjects("dragon"));
gdjs.Scene8Code.GDfadaObjects1.createFrom(runtimeScene.getObjects("fada"));
{for(var i = 0, len = gdjs.Scene8Code.GDbruxaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDbruxaObjects1[i].setPosition(224,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDfadaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDfadaObjects1[i].setPosition(544,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDdragonObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDdragonObjects1[i].setPosition(544,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDcowboyObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDcowboyObjects1[i].setPosition(224,192);
}
}}

}


{


gdjs.Scene8Code.condition0IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 21;
}if (gdjs.Scene8Code.condition0IsTrue_0.val) {
gdjs.Scene8Code.GDbruxaObjects1.createFrom(runtimeScene.getObjects("bruxa"));
gdjs.Scene8Code.GDcowboyObjects1.createFrom(runtimeScene.getObjects("cowboy"));
gdjs.Scene8Code.GDdragonObjects1.createFrom(runtimeScene.getObjects("dragon"));
gdjs.Scene8Code.GDfadaObjects1.createFrom(runtimeScene.getObjects("fada"));
{for(var i = 0, len = gdjs.Scene8Code.GDbruxaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDbruxaObjects1[i].setPosition(224,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDfadaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDfadaObjects1[i].setPosition(224,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDdragonObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDdragonObjects1[i].setPosition(544,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDcowboyObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDcowboyObjects1[i].setPosition(544,480);
}
}}

}


{


gdjs.Scene8Code.condition0IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 22;
}if (gdjs.Scene8Code.condition0IsTrue_0.val) {
gdjs.Scene8Code.GDbruxaObjects1.createFrom(runtimeScene.getObjects("bruxa"));
gdjs.Scene8Code.GDcowboyObjects1.createFrom(runtimeScene.getObjects("cowboy"));
gdjs.Scene8Code.GDdragonObjects1.createFrom(runtimeScene.getObjects("dragon"));
gdjs.Scene8Code.GDfadaObjects1.createFrom(runtimeScene.getObjects("fada"));
{for(var i = 0, len = gdjs.Scene8Code.GDbruxaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDbruxaObjects1[i].setPosition(224,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDfadaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDfadaObjects1[i].setPosition(224,192);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDdragonObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDdragonObjects1[i].setPosition(544,480);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDcowboyObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDcowboyObjects1[i].setPosition(544,192);
}
}}

}


{

gdjs.Scene8Code.GDdragonObjects1.createFrom(runtimeScene.getObjects("dragon"));

gdjs.Scene8Code.condition0IsTrue_0.val = false;
gdjs.Scene8Code.condition1IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene8Code.mapOfGDgdjs_46Scene8Code_46GDdragonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene8Code.condition0IsTrue_0.val ) {
{
gdjs.Scene8Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene8Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene8Code.GDdragonObjects1 */
gdjs.Scene8Code.GDperaVereiraObjects1.createFrom(runtimeScene.getObjects("peraVereira"));
{for(var i = 0, len = gdjs.Scene8Code.GDdragonObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDdragonObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDperaVereiraObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDperaVereiraObjects1[i].setAnimation(3);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timeSinceSadVereira");
}}

}


{

gdjs.Scene8Code.GDbruxaObjects1.createFrom(runtimeScene.getObjects("bruxa"));

gdjs.Scene8Code.condition0IsTrue_0.val = false;
gdjs.Scene8Code.condition1IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene8Code.mapOfGDgdjs_46Scene8Code_46GDbruxaObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene8Code.condition0IsTrue_0.val ) {
{
gdjs.Scene8Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene8Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene8Code.GDbruxaObjects1 */
gdjs.Scene8Code.GDperaVereiraObjects1.createFrom(runtimeScene.getObjects("peraVereira"));
{for(var i = 0, len = gdjs.Scene8Code.GDbruxaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDbruxaObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDperaVereiraObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDperaVereiraObjects1[i].setAnimation(3);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timeSinceSadVereira");
}}

}


{

gdjs.Scene8Code.GDfadaObjects1.createFrom(runtimeScene.getObjects("fada"));

gdjs.Scene8Code.condition0IsTrue_0.val = false;
gdjs.Scene8Code.condition1IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene8Code.mapOfGDgdjs_46Scene8Code_46GDfadaObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene8Code.condition0IsTrue_0.val ) {
{
gdjs.Scene8Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene8Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene8Code.GDfadaObjects1 */
gdjs.Scene8Code.GDperaVereiraObjects1.createFrom(runtimeScene.getObjects("peraVereira"));
{for(var i = 0, len = gdjs.Scene8Code.GDfadaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDfadaObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDperaVereiraObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDperaVereiraObjects1[i].setAnimation(3);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timeSinceSadVereira");
}}

}


{

gdjs.Scene8Code.GDcowboyObjects1.createFrom(runtimeScene.getObjects("cowboy"));

gdjs.Scene8Code.condition0IsTrue_0.val = false;
gdjs.Scene8Code.condition1IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Scene8Code.mapOfGDgdjs_46Scene8Code_46GDcowboyObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Scene8Code.condition0IsTrue_0.val ) {
{
gdjs.Scene8Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Scene8Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene8Code.GDcowboyObjects1 */
gdjs.Scene8Code.GDperaVereiraObjects1.createFrom(runtimeScene.getObjects("peraVereira"));
{for(var i = 0, len = gdjs.Scene8Code.GDcowboyObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDcowboyObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDperaVereiraObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDperaVereiraObjects1[i].setAnimation(5);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gotRightAns");
}}

}


{


gdjs.Scene8Code.condition0IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if (gdjs.Scene8Code.condition0IsTrue_0.val) {
gdjs.Scene8Code.GDbruxaObjects1.createFrom(runtimeScene.getObjects("bruxa"));
gdjs.Scene8Code.GDcowboyObjects1.createFrom(runtimeScene.getObjects("cowboy"));
gdjs.Scene8Code.GDdragonObjects1.createFrom(runtimeScene.getObjects("dragon"));
gdjs.Scene8Code.GDfadaObjects1.createFrom(runtimeScene.getObjects("fada"));
{for(var i = 0, len = gdjs.Scene8Code.GDdragonObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDdragonObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDbruxaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDbruxaObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDfadaObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDfadaObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Scene8Code.GDcowboyObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDcowboyObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Scene8Code.GDperaVereiraObjects1.createFrom(runtimeScene.getObjects("peraVereira"));

gdjs.Scene8Code.condition0IsTrue_0.val = false;
gdjs.Scene8Code.condition1IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "timeSinceSadVereira");
}if ( gdjs.Scene8Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene8Code.GDperaVereiraObjects1.length;i<l;++i) {
    if ( gdjs.Scene8Code.GDperaVereiraObjects1[i].getAnimation() == 3 ) {
        gdjs.Scene8Code.condition1IsTrue_0.val = true;
        gdjs.Scene8Code.GDperaVereiraObjects1[k] = gdjs.Scene8Code.GDperaVereiraObjects1[i];
        ++k;
    }
}
gdjs.Scene8Code.GDperaVereiraObjects1.length = k;}}
if (gdjs.Scene8Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene8Code.GDperaVereiraObjects1 */
{for(var i = 0, len = gdjs.Scene8Code.GDperaVereiraObjects1.length ;i < len;++i) {
    gdjs.Scene8Code.GDperaVereiraObjects1[i].setAnimation(4);
}
}}

}


{

gdjs.Scene8Code.GDperaVereiraObjects1.createFrom(runtimeScene.getObjects("peraVereira"));

gdjs.Scene8Code.condition0IsTrue_0.val = false;
gdjs.Scene8Code.condition1IsTrue_0.val = false;
{
gdjs.Scene8Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "gotRightAns");
}if ( gdjs.Scene8Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene8Code.GDperaVereiraObjects1.length;i<l;++i) {
    if ( gdjs.Scene8Code.GDperaVereiraObjects1[i].getAnimation() == 5 ) {
        gdjs.Scene8Code.condition1IsTrue_0.val = true;
        gdjs.Scene8Code.GDperaVereiraObjects1[k] = gdjs.Scene8Code.GDperaVereiraObjects1[i];
        ++k;
    }
}
gdjs.Scene8Code.GDperaVereiraObjects1.length = k;}}
if (gdjs.Scene8Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene9", false);
}}

}


}; //End of gdjs.Scene8Code.eventsList0xb25a8


gdjs.Scene8Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Scene8Code.GDforwardButtonObjects1.length = 0;
gdjs.Scene8Code.GDforwardButtonObjects2.length = 0;
gdjs.Scene8Code.GDbackButtonObjects1.length = 0;
gdjs.Scene8Code.GDbackButtonObjects2.length = 0;
gdjs.Scene8Code.GDperaVereiraObjects1.length = 0;
gdjs.Scene8Code.GDperaVereiraObjects2.length = 0;
gdjs.Scene8Code.GDtextoObjects1.length = 0;
gdjs.Scene8Code.GDtextoObjects2.length = 0;
gdjs.Scene8Code.GDgoBackToAtivObjects1.length = 0;
gdjs.Scene8Code.GDgoBackToAtivObjects2.length = 0;
gdjs.Scene8Code.GDgoBackToTxtObjects1.length = 0;
gdjs.Scene8Code.GDgoBackToTxtObjects2.length = 0;
gdjs.Scene8Code.GDbackgroundObjects1.length = 0;
gdjs.Scene8Code.GDbackgroundObjects2.length = 0;
gdjs.Scene8Code.GDperguntaObjects1.length = 0;
gdjs.Scene8Code.GDperguntaObjects2.length = 0;
gdjs.Scene8Code.GDbruxaObjects1.length = 0;
gdjs.Scene8Code.GDbruxaObjects2.length = 0;
gdjs.Scene8Code.GDcowboyObjects1.length = 0;
gdjs.Scene8Code.GDcowboyObjects2.length = 0;
gdjs.Scene8Code.GDdragonObjects1.length = 0;
gdjs.Scene8Code.GDdragonObjects2.length = 0;
gdjs.Scene8Code.GDfadaObjects1.length = 0;
gdjs.Scene8Code.GDfadaObjects2.length = 0;
gdjs.Scene8Code.GDwhikObjects1.length = 0;
gdjs.Scene8Code.GDwhikObjects2.length = 0;

gdjs.Scene8Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['Scene8Code'] = gdjs.Scene8Code;
