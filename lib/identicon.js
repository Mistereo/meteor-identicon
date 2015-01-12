'use strict';

if (Package.templating) {
  Package.templating.Template.registerHelper('identicon', function (seed, opt) {
    opt = (opt && opt.hash) || {};
    if (seed) {
      opt.seed = seed;
    }
    return blockies.create(opt).toDataURL();
  });
}
