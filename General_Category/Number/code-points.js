module.exports=JSON.parse(require('zlib').gunzipSync(Buffer([31,139,8,0,0,0,0,0,0,3,45,152,65,146,237,40,12,192,46,244,22,1,140,49,103,249,53,247,191,198,88,162,23,45,82,9,114,2,56,121,166,255,69,253,226,254,246,247,219,227,183,231,111,175,223,142,223,222,191,157,191,125,126,227,84,255,221,223,168,221,127,125,92,125,124,191,223,200,53,193,2,1,54,72,112,64,129,238,155,65,231,24,29,229,36,32,166,65,137,122,234,3,92,173,9,22,8,208,241,46,71,247,29,37,56,160,0,79,193,99,220,59,192,4,235,55,227,75,112,64,129,219,24,31,24,96,2,250,141,0,251,55,119,63,125,195,163,4,7,20,104,119,247,211,55,6,152,96,1,174,6,87,55,87,55,87,55,87,123,238,102,230,4,30,5,216,32,193,1,5,218,205,243,129,118,79,143,163,225,209,4,11,4,216,32,193,1,5,218,189,163,0,71,243,3,3,76,176,64,128,13,18,180,123,23,253,22,253,22,253,22,253,24,249,237,145,175,47,18,28,80,224,54,122,108,141,1,38,88,32,0,198,198,216,24,187,141,113,2,108,144,224,0,47,116,168,209,139,220,24,96,130,14,53,46,71,215,35,220,139,123,113,47,110,15,117,173,111,130,5,2,108,144,224,0,187,116,248,213,235,219,232,240,209,163,108,120,52,193,2,1,54,72,112,64,129,118,35,48,2,35,48,2,35,48,162,13,86,112,177,130,139,21,92,172,224,98,5,23,43,184,88,193,197,10,54,38,104,151,21,92,172,224,98,5,23,43,184,88,193,197,10,46,86,112,177,130,171,190,15,180,91,184,133,91,76,98,49,137,197,36,22,147,88,76,98,49,137,197,36,22,147,88,76,98,49,137,85,24,133,81,24,133,81,24,133,113,49,58,175,98,228,7,60,154,96,129,0,27,36,56,160,192,253,69,191,57,96,128,9,22,8,176,65,130,3,10,180,113,209,110,79,73,99,128,9,22,8,176,65,130,3,248,232,28,140,194,40,140,194,40,140,194,40,140,194,40,140,30,214,174,14,223,24,96,254,114,12,177,64,128,13,18,28,80,224,54,250,37,105,12,192,185,201,185,197,185,197,185,69,148,69,148,69,148,69,148,69,148,69,148,164,95,210,47,233,151,244,75,250,37,253,146,126,105,63,34,247,28,100,244,67,54,6,152,96,129,0,27,36,56,160,64,27,217,169,220,224,168,83,185,49,192,4,11,4,216,32,193,1,109,240,157,76,190,147,141,4,7,120,161,67,241,85,73,190,42,73,78,38,57,153,100,93,146,117,141,9,60,23,96,131,4,7,20,232,40,124,89,147,47,107,35,192,6,9,14,40,112,127,231,235,200,141,209,232,39,104,112,238,114,238,114,174,163,52,22,8,176,65,130,243,59,179,23,160,177,64,128,13,18,120,181,64,199,35,39,15,57,121,200,186,67,214,157,185,57,183,57,183,137,178,137,178,137,178,137,178,137,210,95,169,226,11,82,124,50,138,79,70,241,201,40,62,25,141,9,86,99,114,110,114,110,114,110,122,14,173,63,165,141,4,132,154,68,233,28,170,205,209,246,168,179,169,49,192,4,11,4,216,32,193,1,24,11,35,48,2,35,48,2,35,48,2,35,48,2,35,48,2,99,99,108,140,141,177,49,54,198,198,216,24,12,117,111,140,141,145,24,137,145,24,137,145,24,137,145,24,137,145,24,137,113,48,14,198,193,56,24,7,227,96,28,140,131,113,48,138,126,69,191,162,95,209,175,211,241,50,167,151,57,109,4,240,92,130,3,10,220,70,207,248,101,198,47,51,126,153,241,203,140,95,102,252,50,227,151,25,191,204,248,101,198,251,103,11,99,97,44,140,133,177,48,22,198,194,88,24,11,99,97,4,70,96,4,70,96,4,70,96,4,70,96,4,70,96,108,140,141,177,49,54,198,198,216,24,27,99,99,108,140,141,145,24,137,145,24,137,145,24,137,145,24,137,145,24,137,113,48,122,158,111,112,183,216,30,77,176,64,128,13,18,28,80,160,221,224,110,193,221,130,187,5,119,11,238,22,220,45,184,91,112,183,224,110,193,221,248,34,93,190,72,227,27,253,222,195,37,67,110,153,242,200,146,23,246,139,2,117,135,238,208,29,186,67,119,232,14,221,161,59,116,167,238,212,157,186,83,119,234,78,221,169,59,117,167,238,212,93,186,189,210,125,15,34,207,217,31,141,246,137,54,73,23,184,100,200,119,53,229,145,37,47,12,251,132,125,130,62,73,237,216,28,114,74,162,21,85,109,243,29,135,220,50,229,145,37,137,92,84,183,77,226,240,155,4,117,143,238,209,61,186,71,247,232,30,221,210,42,173,210,42,173,210,42,173,210,42,173,210,242,201,203,39,47,159,188,222,147,95,93,103,233,58,246,235,216,169,252,134,165,223,176,246,27,22,127,195,234,111,88,254,193,148,220,235,158,71,35,248,156,252,68,67,35,248,180,215,167,181,58,159,150,231,211,250,124,90,160,79,43,244,105,137,62,173,209,39,69,122,76,62,151,144,242,130,15,38,244,252,154,114,201,144,91,166,164,204,56,51,229,59,46,73,156,99,156,99,156,99,156,99,156,99,156,67,28,107,213,176,88,13,171,85,120,33,85,81,179,221,78,171,148,71,150,164,207,156,159,180,79,103,29,92,50,36,241,103,122,156,239,216,56,105,156,52,78,26,231,24,231,24,231,24,135,218,104,133,199,241,119,28,114,203,148,71,150,36,78,80,46,53,137,147,223,39,223,241,148,75,134,220,50,229,145,37,59,78,124,140,183,121,100,73,207,51,222,230,144,83,46,25,178,127,254,123,1,83,30,89,178,75,133,94,210,79,14,57,229,146,33,113,143,61,173,67,182,133,200,182,18,217,150,34,219,90,100,91,140,108,171,145,109,57,178,173,71,182,5,73,255,232,232,14,221,161,59,116,135,238,208,29,186,67,119,232,14,221,169,59,117,167,238,212,157,186,142,174,166,238,212,157,186,83,119,233,46,221,165,187,116,151,238,210,93,186,75,119,233,46,221,208,13,221,208,13,221,109,255,109,255,109,255,109,255,180,127,218,63,237,159,246,79,239,149,222,43,117,83,55,117,83,247,232,30,221,163,123,116,143,238,209,61,186,71,247,232,30,221,210,45,221,210,45,221,210,45,221,210,45,221,210,45,221,171,123,117,175,238,213,189,186,87,215,204,41,51,167,204,156,50,31,174,249,112,205,135,107,62,92,243,225,154,15,215,124,184,230,195,53,31,174,249,112,205,135,107,62,92,243,225,154,15,124,241,122,3,206,90,36,213,0,44,73,133,205,239,111,147,81,231,182,190,222,22,216,219,10,123,91,98,111,107,236,67,182,52,135,156,114,201,144,91,166,124,253,75,82,124,179,35,132,75,134,220,50,229,145,37,175,5,252,148,75,90,215,231,43,236,173,236,89,229,114,43,82,238,69,202,205,72,185,27,41,183,35,229,126,164,220,144,148,59,146,226,171,5,233,201,62,23,14,249,206,44,25,114,203,148,184,110,93,202,189,75,185,121,41,119,47,229,246,165,220,191,148,27,152,114,7,115,249,126,194,35,75,122,158,57,188,62,201,245,73,46,223,79,24,114,75,221,169,59,117,167,238,210,93,186,75,119,233,46,221,165,187,116,151,238,210,93,186,161,27,186,161,27,186,161,27,186,140,183,55,171,33,183,124,103,142,44,73,52,51,225,154,9,215,76,184,102,194,53,19,174,153,112,205,132,107,38,92,51,225,154,9,247,56,138,227,40,142,163,56,142,226,56,138,227,40,142,163,56,142,226,56,138,227,40,142,163,56,142,226,56,138,227,40,124,175,175,239,245,245,189,190,190,215,215,247,250,250,94,95,223,235,235,123,125,125,175,175,239,117,111,227,220,209,197,219,210,185,167,115,54,174,179,113,195,109,93,184,175,11,55,128,251,147,108,227,222,158,205,77,91,179,36,27,189,225,238,111,184,253,163,194,60,86,152,199,10,243,88,97,158,65,145,12,135,156,114,201,144,175,79,202,35,75,118,252,78,189,41,151,12,185,101,202,35,75,218,159,123,53,135,212,77,221,212,77,221,212,77,221,212,125,247,58,186,71,247,232,30,221,163,123,116,143,238,209,61,186,71,183,116,75,183,116,75,183,116,75,183,116,75,183,116,75,247,234,94,221,171,123,117,175,238,213,189,186,87,247,234,50,255,193,239,41,28,114,202,37,67,110,153,242,200,146,186,67,119,232,14,221,161,59,116,135,238,208,29,186,67,119,232,78,221,169,59,117,167,238,212,157,186,83,119,234,78,221,169,187,116,151,238,210,93,186,75,119,233,46,221,165,187,116,151,110,232,134,110,232,134,110,232,134,110,232,134,110,232,134,110,231,115,239,79,178,79,217,92,155,191,147,123,188,102,190,102,189,38,94,179,95,147,175,57,175,121,81,246,139,146,47,74,190,40,249,162,228,139,146,47,74,82,45,127,254,179,155,102,189,38,94,243,119,45,95,115,94,83,175,185,54,150,211,223,177,250,255,206,125,81,238,139,114,95,148,251,162,220,23,229,190,40,247,69,185,70,33,93,108,198,107,230,107,214,107,226,53,251,53,249,154,243,154,122,205,139,50,94,148,241,162,140,23,101,188,40,227,69,25,47,202,120,81,198,139,50,94,148,241,162,204,23,101,190,40,243,69,153,47,202,124,81,230,139,50,95,148,249,162,204,23,101,190,40,235,69,113,151,227,63,148,108,214,107,226,53,251,53,249,154,243,154,122,205,181,113,51,231,191,152,108,230,127,255,3,53,197,91,146,29,25,0,0])))