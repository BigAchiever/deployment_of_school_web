'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4a4880b2a1179bc6f770b51ccd2be1df",
".git/config": "9aab0442fbd36f86ae7de7c7d214a0c2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a390c2b52fe5efd2228be87428ee8c31",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d241a208409ec6c888682c70814aa56d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "76c8c43f99f6cb32c367a006723b3383",
".git/logs/refs/heads/main": "dea8f121f20d5ce09f7603932b11c1d7",
".git/logs/refs/heads/master": "3e55cc6dffc09941f692f76594162d01",
".git/logs/refs/remotes/origin/main": "2cf128f12c1c506feaeb5280942d30d8",
".git/logs/refs/remotes/origin/secondary": "8fa1f3939bfa953dd467017ccf9cb392",
".git/objects/07/835c53649148b03257820e206946ac8652f0bb": "fa2ec28a698bd2ef13f8a1957786e179",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/5292191152ec0560e6707899b28b7e9ae0ac02": "b70e1be5d155d99e19a24bc78ee8f116",
".git/objects/15/6d2b6d6dfb54e9920a85c1c464791b6529b650": "fa8f2ae835df5f1359ea71b57c32c2e5",
".git/objects/16/2ce452352335f0c47d431c95e5ba90bcc708b0": "1a17a3ced9ed74ae171aaa78898a29e5",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1a/5022a4b8402807464ee3f6533febc7fbd63634": "1030fdad1f8bed45ebc19055aae3e2be",
".git/objects/1f/a4f39674c954a07158097339f60444aea30027": "6fe332d0091623a2725409d21ef22d96",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/fe7f4a82e2f24f340ac4a5db4a4eb215369f72": "6829d3dff8abf53ee315e3b74e98d97f",
".git/objects/28/cb256742297115b6325503576d044d3a621411": "90bb7667ee07d00fe10844a1969baf50",
".git/objects/32/9fb4a2c4dde5eb290a3f86a44f90515524b97c": "4a7c22887ae3c9e9f49617438b09c246",
".git/objects/35/17bc76eaff50d9728f143f2e13e33311a4a5ed": "1ddc9a6727fbf24d2a00e2c3326cce3a",
".git/objects/3a/a47f5e794dde4f036f8b892415725131e82fd3": "f2577332b59dcb5816e140e727095d33",
".git/objects/41/c5d0de95a5974723e25f785e21e9c52bb415d0": "1f7af32d62f9bae2e6572ab4460a2a29",
".git/objects/44/79da9168d33988145a857797431e1b6d642baa": "5c0325dcb74214ae5b0a8146b7124293",
".git/objects/46/ec3562f9ccd400b55d54a6042f6b7e45e36b07": "05086864c9ddee83050ea8746f1013a5",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/f6ae3ff6af64d9e8c1571c16ce5b65e2ba7505": "d1d366881d36f06f34320532463e768d",
".git/objects/4a/7e424afc5bbd3308c61c1ef4a09cd56a40e5e6": "95aedabac35a999dafe172fd074b021e",
".git/objects/4b/839532c891d955212ba27c1e66c8d1d42cff67": "895957aa104726457abe399b9140d7f3",
".git/objects/4d/fb0127a30661fb2cb5687b9f03107627d208bd": "2bf3c012b86b50cff07d2b2ac22b2076",
".git/objects/4f/715ace471bb8743a1294a43eff9c1e50e82ba7": "87d747ad35b1fd62985042f043e13756",
".git/objects/53/6d2ebe7c2732d4173124b5d7fa3af6771f5f7e": "8b268bef693563972ad8706107d393a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5a/cbe62a09c63a3f2d42ffff0b7a2a6bc0048582": "f8d2d6a34fe606b3df32672c7f158f80",
".git/objects/5a/e97e5582476f738ab62e7015cf26acaf3ed2f6": "0c5e568d5ed46fe9877032df7857e90d",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/62/e8f8f0c8ecf7ac0325dead5ba68b668ac01581": "f93ac04be1600a0e54bbd7963d329e2c",
".git/objects/65/30441ec11d3e85b9c63a74ce612465c0fc4afc": "c71099e34ec1dd0de65310bf4c7c86e8",
".git/objects/65/bfadd47f7554cb7548f3c4e149eb2c7690fe30": "0a547d8a663a91c102b5d3c6328d22a8",
".git/objects/66/c869b2570abe6f7da2befc0cd27e4d4005811c": "1d6780903b76b8157ed823d4355c08bd",
".git/objects/67/5f6cd961b6e8e20ed2f59f6d9784e19d42899f": "86c8f1d530615236e665d6f8e122db98",
".git/objects/68/3913511f4a4b7a4c2cf0c2f2342b05d2cf5f67": "3ac7dc3471073bf1bb8a1cec3d6f6761",
".git/objects/69/867563de5d4f4f98cbadccb37268de4f6cba19": "ad7d674420b5165636b99903b6af512a",
".git/objects/6f/03ba445e834025af4ec9bb46cf4ad0854f9372": "68503e4f5bdf54226d84e7720f2f5270",
".git/objects/6f/f162089f4621edf2d674d3a39dc87362553d17": "8a56d62d1360d02e13ab3fe60922b9c3",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/74/9c4615f77e9a8c7b45ac00ceb13d3796dfa296": "3c6bafccba6483a657c394d67b58f299",
".git/objects/75/c69b86805667b400edc1588ad70019d8acaa0a": "d8752762f61e6ccc828e7e46996f01a8",
".git/objects/7a/03918fbaa5f9694b001bf5b09c9a68cd08f3a0": "d8dc6caa501585211ac2c78d45402c4e",
".git/objects/7a/9e055aad02fccd4f6f2728f5552470bbc8e304": "98cf8507089c8813caf794d0a27deb25",
".git/objects/7c/c5ed65ca765aaf27a752d139cd56d2dc8f5c51": "3097710cd9b8efa18b2b94247b3eb369",
".git/objects/7f/8dc4277ba5f1718aa3ea20881ebbde8204c90a": "fb8ffe0e349fa26d1993b61a4842eb98",
".git/objects/81/5e0f2ead6982a8ad29c7cdbffa20bbc64f996e": "fd23a30e728a42daa261bc162fa66d80",
".git/objects/85/4c0184809349cc4f5d1ef45a10a33d4efe091c": "c5693acd1e75bd5bda4ac2da01c3532a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/67d1ec6e839fe0541dc98446479443a9950c60": "a671cf148f2574ac7409a320b26e018d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/6f6ad35b0820e6326bb851900b6075b80d57b0": "eeea2471778c664677b8e7ec71d5693d",
".git/objects/8c/0f70019f7c6d7021a91a276c365a6783ee594f": "5a9731faa840face342ec97917f6ccd1",
".git/objects/8e/172f0a4a5b74cf5cb11270c05e6679006a3e66": "f59926e8282fac1ff12c6eed6cc7cf77",
".git/objects/8f/86ceb3f680733b7bd1c47c51fda55578e67cdc": "9a79f60c90651c192ce5c9fb04bf3c04",
".git/objects/92/08a9da8da761632d051616c7ab095fa80edadd": "5d58efa03d4a2a71528b99356e5a340f",
".git/objects/93/66c5b34275d1d99e2261a4ba3486d48f9d0a3f": "3d4c310be3c154d65d6f5601dcee01ab",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/9c641cc03830cb653023d16b88a70094d35ea8": "0e554ac077200e7fb2765c43320e7853",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/98/4a9a4dbde9b8892e29a7853a43dd3f0e741316": "a266b9480067491f958867ca636521fd",
".git/objects/99/044e12fd694b12dc7d1371dd3f4ff582e15240": "afb21ecc7de817e7514d6ecba8dc1a7d",
".git/objects/9b/c53d962c8491522c470baeb63805361f08be1e": "ee7efd241a6120ff118b2e406162c4ec",
".git/objects/9c/c2823a759a8d4e05f3a70971bda23d1b5bea35": "ea17d0563b0474d22ef3f2c3e72aedb4",
".git/objects/9d/28818f36066e6ce067daab22fe96c2b40688f0": "2af4b0a6bb83d2a8578b0a1dcdb9b1a4",
".git/objects/9d/ad25f372ede340a3c24ed002ee37119c4b7044": "ced6eeb517a822c41b7f254084eccc8e",
".git/objects/a1/242f2c0bbd29e80f50d85b41d8cdddb9600cd9": "ecf0efc54c45fffcbd545d85a41e0f48",
".git/objects/ad/a035d8d7f32a4033ed21286b0c78e4854ed53d": "f682be7cb0770d60a70ef7e290b47d51",
".git/objects/ad/c341528778395ae26bf4a8925b81e958eb08e1": "f7e41651263a2b4095be52643614b79a",
".git/objects/af/013d53ea6257c42c1de764121007975d308253": "c742842ee95e923f2bdf298b593db514",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/7a9c6ca05ea4aed64936ac8564fdc4013c0767": "95c87eaf277681fc3846134142f0648f",
".git/objects/ba/b72079ab193593ded3d8be2d37d528b15c3dc3": "26ba2ae174df5b3481539d1ed8d6063a",
".git/objects/bb/97e1c5ee0b905639063b5b6509b55e92239aad": "07ab04b7f18b7746a8627018bf3f558a",
".git/objects/bc/a0637130f9cb9118081729557ee50b7ab88126": "7e742692356fe18b406ffb93c66572af",
".git/objects/bd/f77a8f30692b8d00bddd6b5b46e2e461e95942": "39014740f6377f37a0f736034edda84b",
".git/objects/bf/5c649c0b4c730dcd708f82763078441e84678d": "868690967c8c14fffbb92b39a5b30c54",
".git/objects/c1/324b523988aeccf21069921bac8037d1bbf3bb": "6bc81f67243fa1868d9152b8f47d4400",
".git/objects/c6/917335d37e45e1a521b73c0066099c03ec6e08": "62a9c33e729db2655c2d74fccff01718",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/4c7b3aa921a90f079bbf5848eb156809a7aabe": "c8cc4a2b3004101245efffe0e4d1525f",
".git/objects/ca/8d6441afe29813c6ef2252cfe1789b632abc3e": "5a78a88bdfe8d7350d2a694d1e704529",
".git/objects/cc/01492c2b8eb49b06fdb1721f074d89ddc09691": "f536c806978b77f60d142c03d8c890c9",
".git/objects/cc/b6e5456fc912b9276c6d46731be79ea33db312": "04aca541c21cfb45e775a9cfc23bc764",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d2/36da4ff1f737037af9ee069031772d42268560": "821c1f1112f1d8e2d0a026e17a0609d5",
".git/objects/d3/7ae0b0d5f0fcc0e3233b861057ac950de9d1aa": "71d256cb855b3b4213100b183164a0cc",
".git/objects/d4/2511930c5db63a23ade2e9f4ddcc49e636a73a": "17f664dda77a6f752ff6f21cb3393420",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/42ec2962e5512ab773e8dc7554272ac4fa283c": "705a16c80bd10625ef2b44f4728d8828",
".git/objects/d5/a3d85140ce174ab2bac58ee1541daaff80f8a7": "568384472807a667174142be02dad0a2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ce1d418669ae0bad6b7a0c3ee386bb8b258a1f": "fcea0a07f1841a72e17b16962958d113",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/42251f81f6755c5b51b890a833d9d2e5de101f": "0f82dfd08579b69e98c75c9ce699edb0",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/df/ac361c6c6d11cce4d4245f488e0c4df7da611b": "34a295d765ad54d119ddfed595592f61",
".git/objects/e4/db9bd4cf9c0eee298d44b6423a8574fbfb5d2d": "b942cab897e74aa06f3826fb92229061",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/f605f1e3805d66769450cfbfba6987adc5bff3": "b3a8a862456ccd7ddac304618fa34fdd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b309e4abd359262feb1600700b9f2cb0ed24ea": "226c8346b55a4df038406a3fc1d9309d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/4bb87be839e6829aae0754e5647b425af5633d": "f9430eccdd939e736dc12f148033b1f8",
".git/objects/f7/630e5c1c8fc9a5bbe1c2614ba45366b2ce6a44": "88a7ebff3045bd689f64176843c36d93",
".git/objects/f9/d332abfc85fc014578923bd7181e62501bc0aa": "8a2bbc63b2c54d74b93ca89833b2dde3",
".git/objects/pack/pack-7e2a05b2fdc20344faad5a33590216e6486211d8.idx": "735f07b3ac94ee87fbabbfdb19d2f7d7",
".git/objects/pack/pack-7e2a05b2fdc20344faad5a33590216e6486211d8.pack": "2278703ab7d1430a32d022809302b02b",
".git/objects/pack/pack-7e2a05b2fdc20344faad5a33590216e6486211d8.rev": "3aed6d1e788a089ad2fc18dc673904c6",
".git/ORIG_HEAD": "b3fea50b8b665a580805f8be01443eef",
".git/refs/heads/main": "3afc7bf55d16a6abb891d53adb92df73",
".git/refs/heads/master": "92c65f9bba0d3850e5090f81bebe3e08",
".git/refs/remotes/origin/main": "3afc7bf55d16a6abb891d53adb92df73",
".git/refs/remotes/origin/secondary": "f430a3935596c526c9ce80851e1fe872",
"404.html": "40d1eac948b9676790e5850c262d5eee",
"assets/AssetManifest.bin": "99d60a238e5ea89f17a359d97bb6d56d",
"assets/AssetManifest.bin.json": "3aca030035f7349a6a0ab026a4869381",
"assets/AssetManifest.json": "2fd5bc2d5cb30825fd6d7fc1a28ff48f",
"assets/assets/fonts/dk-magical-brush/magical_brush.otf": "22842e3ac77483882d784a422e003eee",
"assets/assets/fonts/pfdinserif-1/DINBold.otf": "84a689f5f8748b5848c3dcbfa2be006e",
"assets/assets/fonts/pfdinserif-1/DINPro.otf": "48fcd5814250f4405be88910bfb1484f",
"assets/assets/image/ani2.json": "eaa31ff1924fda1f2f89d2ffabe558b8",
"assets/assets/image/arroe.svg": "8c822f0d09fa99c76e017f41cc79deb4",
"assets/assets/image/award.jpg": "87b1157423f97cc5a49230edad89f57c",
"assets/assets/image/award2.jpeg": "814d9eb767d71b2a5245a908d431dd44",
"assets/assets/image/award3.jpeg": "09788208225a9dd2d0fd07c9457317b7",
"assets/assets/image/bg.png": "22c1017a54469a5d05b0d260b378fdcb",
"assets/assets/image/bg2.png": "4aeac3b49d3e3022659a2a76320fe1c3",
"assets/assets/image/car.json": "eef89bb17d84e77ce99e1a1cbc4bc55e",
"assets/assets/image/comingsoon.png": "8bdbe429fb58eedf69876d18e5a03557",
"assets/assets/image/contact.json": "eaa31ff1924fda1f2f89d2ffabe558b8",
"assets/assets/image/dads.png": "99ddee4d6ecbda7152ce62c6a8e32fad",
"assets/assets/image/dot.png": "240803f1510a8a21b7be51b4846a2f8f",
"assets/assets/image/element.svg": "8ed4fcfa4b9f0b2b85a00eda3d6f1825",
"assets/assets/image/error.json": "4a61d51cbb1148f2b3a8a3cbbb027f63",
"assets/assets/image/fb.svg": "3b54f84534999f24e78efb2fdd4ed1b2",
"assets/assets/image/hat.svg": "9c0eae2a559a6b15ab13f119cc459c6a",
"assets/assets/image/hero-background-1.png": "b549692c1e34f0b1f68a44ff9db79d17",
"assets/assets/image/ig.svg": "d4222a15684c9192af9c3af460d34d5e",
"assets/assets/image/iti.svg": "656dab73522509d4263b9cab5f4b6ec2",
"assets/assets/image/kids.jpg": "430b15df02e44aeb2396464efc52fdc0",
"assets/assets/image/kids2.jpg": "8d60187f3346142b0820a9ac962773ee",
"assets/assets/image/ln.svg": "194301918f95bb08124e3796f0ddc4cc",
"assets/assets/image/logo.png": "c6ffd74cd5146e9f001ca2f7549ed84e",
"assets/assets/image/map-mobile.svg": "fdfd613f8bee2b49eb7bfd1b86e3cbd4",
"assets/assets/image/map.svg": "7aa0ac778df1404739ecedc414d5c44a",
"assets/assets/image/math.svg": "79767778ec0732d8b3d2b3122bfaa145",
"assets/assets/image/paper-background.png": "f05de2fe8091aa2f68c702f7f482faf7",
"assets/assets/image/plane.svg": "cfc4019659e92d00024db06302ef2b14",
"assets/assets/image/puzzle.svg": "9eeacc1224f482a94e87385f8196ddac",
"assets/assets/image/result1.jpeg": "6178b94aead7fc9ab4eca92f18bccf41",
"assets/assets/image/result2.jpeg": "2441816097a5908c1c596fa9911a7494",
"assets/assets/image/rocket.svg": "12711eae5b69f2f682468ce1d59fb5ec",
"assets/assets/image/svg1.svg": "3d24580c1e0d73a2145c4cdf727fea54",
"assets/assets/image/tower.png": "7166a4d0395c7c8948c8a563c3a01b9f",
"assets/assets/image/tree.jpg": "8d9d9dc6305f8b2af23f0a6fc7322620",
"assets/assets/image/yt.svg": "562924efaad0d4899e00c135d617e97f",
"assets/FontManifest.json": "99e2fea253fef2c319a06d8cb1563cc2",
"assets/fonts/MaterialIcons-Regular.otf": "dba821f825cbcfa14b7dd3f7c6ed6369",
"assets/NOTICES": "d85248cb732be3b70c60f0a8c1bb0d5d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"build.js": "216e19ee7898869fa792fbe4e17cff6b",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CNAME": "bca0dc55649832cd17732d6bfe19d98b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "065878bdeee3b3922050f538462d932e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/logo.png": "c6ffd74cd5146e9f001ca2f7549ed84e",
"index.html": "6ba707d20e2c9c88d182eedd382053cc",
"/": "6ba707d20e2c9c88d182eedd382053cc",
"loading.gif": "917cf8b79ee6f970a6e12faae132758a",
"main.dart.js": "a4096d373563d9a2b0d30f77f4e111d2",
"manifest.json": "3c85fe627b251384e98d984f6eba8126",
"README.md": "9a29b808a490ca4ced757f46a5bd6f1a",
"version.json": "b492f1a4da66bef905e542cdbcc0a4a2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
