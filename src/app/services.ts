import { LuJsonService } from './lu-json.service';
import { LuResService } from './lu-res.service';
import { LocaleService } from './locale.service';
import { LuDocsService } from './lu-docs.service';

class LuLocaleService {
  prototype = LocaleService;
};

export {
  LuJsonService,
  LuResService,
  LuLocaleService,
  LuDocsService
};
