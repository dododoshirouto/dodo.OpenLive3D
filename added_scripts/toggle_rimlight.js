function init_rimlight() {
  currentVrm.scene.traverse((obj) => {
    if (obj.isMesh && obj.material && obj.material.fragmentShader) {
      if (!obj.material.defines) obj.material.defines = {};
      obj.material.defines.DISABLE_RIM = false;
      obj.material.fragmentShader = obj.material.fragmentShader.replace(
        /col \+= rimMix \* rim;/,
        `
        #ifndef DISABLE_RIM
        col += rimMix * rim;
        #endif
        `
      );
      obj.material.needsUpdate = true;
    }
  });

  window.setRimlightEnabled = function (enabled) {
    currentVrm.scene.traverse((obj) => {
      if (obj.isMesh && obj.material?.defines?.DISABLE_RIM !== undefined) {
        obj.material.defines.DISABLE_RIM = !enabled;
        obj.material.needsUpdate = true;
      }
    });
    setCMV("ENABLE_RIMLIGHT", enabled);
  };

  setRimlightEnabled(document.getElementById("ENABLE_RIMLIGHT_box").checked);
}
