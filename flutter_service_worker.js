'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d8e8fca2dc0f896fd7cb4cb0031ba249",
".git/config": "9aab0442fbd36f86ae7de7c7d214a0c2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f17570c3a88ddadd1f7c1b25fd9df51e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/index": "fcb8dd17bd877996b1d7ad48fdc435ac",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "62bd9225c99685d1120b94a65cba2ac5",
".git/logs/refs/heads/main": "3d168c26226ad296815ae148a65847d6",
".git/logs/refs/heads/master": "6cb4cf17ebdd0015d010b5e7f2dedf56",
".git/logs/refs/remotes/origin/main": "38b7ffd80dd9eeed1e19665f2241a886",
".git/logs/refs/remotes/origin/master": "8d4525b195d030b141586a1e01cf8144",
".git/logs/refs/remotes/origin/secondary": "8a5429f126677343fdc31c0bb67c8ebc",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/04/7066b1b71710905f5e7843da22ed10184f7baf": "ce505d90075cebec0c3e46c67c182ff2",
".git/objects/07/835c53649148b03257820e206946ac8652f0bb": "fa2ec28a698bd2ef13f8a1957786e179",
".git/objects/0e/472cef8a79a47d014b37c6fa97ad26da43383b": "d6a2d4b1dc9f6fe2439111b43489193b",
".git/objects/10/5292191152ec0560e6707899b28b7e9ae0ac02": "b70e1be5d155d99e19a24bc78ee8f116",
".git/objects/14/28a0ac263089f2b0cbaeac6a7dd886d874931d": "9ebddf1e8191a44aaa232f312b795f7c",
".git/objects/14/85bc8d628555406f5164ecf6840ec12bf4baad": "9ab6f8e1d303564c4a70e5f95806e731",
".git/objects/15/6d2b6d6dfb54e9920a85c1c464791b6529b650": "fa8f2ae835df5f1359ea71b57c32c2e5",
".git/objects/16/2ce452352335f0c47d431c95e5ba90bcc708b0": "1a17a3ced9ed74ae171aaa78898a29e5",
".git/objects/17/7cb33ea5a545237fb23c70078d1e7d798ab6c6": "baf2afef5b89286397062e362154748e",
".git/objects/17/86df7309014a34357f9d760debb40ed77a36b8": "e8e02d2c6b4c137e01ef35ccf2747321",
".git/objects/1b/4dc7779078f628601161f33f88a1ea65ef444c": "fad7f94d459a07d86cd45ec7b525a794",
".git/objects/1d/fdd867c270fd4a156e62b4e51ab227e7a3ee1d": "71ca4608b0f8384c1da03d36c2aca399",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/21/fe7f4a82e2f24f340ac4a5db4a4eb215369f72": "6829d3dff8abf53ee315e3b74e98d97f",
".git/objects/26/c85aef5e2411e3833360245c25f7c1f3e626af": "99e16d5604296afedf98b7a7be2d5054",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2c/a88dfbfbd01099cd912bfb559d1b3150464911": "af5d41c7b12e5d95555b587cda60609c",
".git/objects/30/d64717eee828c0ea56088d1da86fa540f3b5ec": "afdcdf2e25d0ddff28c4f2230e4e4fdb",
".git/objects/31/7a86a6faa80bbfcad218636ad749ba7f6a909e": "4e6ab2db27ca4a1fa7ff20e27bb65835",
".git/objects/35/17bc76eaff50d9728f143f2e13e33311a4a5ed": "1ddc9a6727fbf24d2a00e2c3326cce3a",
".git/objects/3d/a0cd7f5267e19f7a0560f001b7a08574452241": "b228347319bb96d8782a0eced5b49942",
".git/objects/3e/b725e035c82cac8eba174a637311395c9752de": "a95a7e84c1bef2ba81b6600d6512125d",
".git/objects/41/c5d0de95a5974723e25f785e21e9c52bb415d0": "1f7af32d62f9bae2e6572ab4460a2a29",
".git/objects/44/79da9168d33988145a857797431e1b6d642baa": "5c0325dcb74214ae5b0a8146b7124293",
".git/objects/44/865daea3f49595c1404dff1abe317b3aaa9ccd": "8f94f8c645ddc5caafb171ef4ebde0c3",
".git/objects/45/198d586a2b6fa9371620b8c03f757a01697053": "86d09e29f27a1249139c4cc8a4dcdf78",
".git/objects/49/5b772d79ac1bc0d49f23d72567ec759a589ed2": "b08becec5cd461494880ff9ef55a1ff6",
".git/objects/4a/7e424afc5bbd3308c61c1ef4a09cd56a40e5e6": "95aedabac35a999dafe172fd074b021e",
".git/objects/4c/d05d5d9acefd98d4572151727b21a632a6eece": "208d43e2ecc2b2a93b776a35878f435b",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4d/fb0127a30661fb2cb5687b9f03107627d208bd": "2bf3c012b86b50cff07d2b2ac22b2076",
".git/objects/4f/4429b9f42cf7838545b17d6df6df19fece5e42": "7507ef1d9671b8e5581fd70a86f6397a",
".git/objects/4f/715ace471bb8743a1294a43eff9c1e50e82ba7": "87d747ad35b1fd62985042f043e13756",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/53/6d2ebe7c2732d4173124b5d7fa3af6771f5f7e": "8b268bef693563972ad8706107d393a3",
".git/objects/5a/cbe62a09c63a3f2d42ffff0b7a2a6bc0048582": "f8d2d6a34fe606b3df32672c7f158f80",
".git/objects/5a/e97e5582476f738ab62e7015cf26acaf3ed2f6": "0c5e568d5ed46fe9877032df7857e90d",
".git/objects/62/e8f8f0c8ecf7ac0325dead5ba68b668ac01581": "f93ac04be1600a0e54bbd7963d329e2c",
".git/objects/65/bfadd47f7554cb7548f3c4e149eb2c7690fe30": "0a547d8a663a91c102b5d3c6328d22a8",
".git/objects/67/5f6cd961b6e8e20ed2f59f6d9784e19d42899f": "86c8f1d530615236e665d6f8e122db98",
".git/objects/69/867563de5d4f4f98cbadccb37268de4f6cba19": "ad7d674420b5165636b99903b6af512a",
".git/objects/6a/1b1a0a8a096145b69d682b5d7455d72be4ef0c": "bd0c697306d718a927baebc062e44c80",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/03ba445e834025af4ec9bb46cf4ad0854f9372": "68503e4f5bdf54226d84e7720f2f5270",
".git/objects/70/298a5936969a9169ba4f8063742e1f284ad194": "926f6eb644c8ac845e925973b6d26be9",
".git/objects/71/494ef60e5ff87bdca9f6c1d9761b701d38e182": "717927d0a620b1c071accbe435ebf66d",
".git/objects/78/bd04201fbe3557922e1db02fc42b72d4ae6b00": "36ae62547dcefbf15513610820bf980f",
".git/objects/7a/03918fbaa5f9694b001bf5b09c9a68cd08f3a0": "d8dc6caa501585211ac2c78d45402c4e",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7a/9e055aad02fccd4f6f2728f5552470bbc8e304": "98cf8507089c8813caf794d0a27deb25",
".git/objects/7b/0ff1204bded7bffce46b16fadc324a14624d36": "f7dd81fd37f60b9c27825687c648def9",
".git/objects/7c/c5ed65ca765aaf27a752d139cd56d2dc8f5c51": "3097710cd9b8efa18b2b94247b3eb369",
".git/objects/81/5e0f2ead6982a8ad29c7cdbffa20bbc64f996e": "fd23a30e728a42daa261bc162fa66d80",
".git/objects/85/1e58e4a835e6094fb986f54d28cff41674fd9f": "c51f6e7fe6bad467114679fdbf26d34e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/67d1ec6e839fe0541dc98446479443a9950c60": "a671cf148f2574ac7409a320b26e018d",
".git/objects/8b/6f6ad35b0820e6326bb851900b6075b80d57b0": "eeea2471778c664677b8e7ec71d5693d",
".git/objects/8f/86ceb3f680733b7bd1c47c51fda55578e67cdc": "9a79f60c90651c192ce5c9fb04bf3c04",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/98/4a9a4dbde9b8892e29a7853a43dd3f0e741316": "a266b9480067491f958867ca636521fd",
".git/objects/99/044e12fd694b12dc7d1371dd3f4ff582e15240": "afb21ecc7de817e7514d6ecba8dc1a7d",
".git/objects/9a/85e9d15f086d51e27c89263589cfb6f767534a": "0b5bd209de77f3b2502ad9cb780dbefb",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9c/aea1b421b55ade8bcd79404c05b7d78e61b8e9": "03bf3421f11b0fc5cd3a950ff9b2ac13",
".git/objects/9d/ad25f372ede340a3c24ed002ee37119c4b7044": "ced6eeb517a822c41b7f254084eccc8e",
".git/objects/9d/e575cf99204b183d68f0324e8642c887d6d18f": "8f37625272a50bf85a30a8cad9cbfb88",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a3/1c20d3da92c2ba603983471165c612e396e927": "48cca51a3962113357655750d3b2cdfd",
".git/objects/a4/462be7838f5b5481c829a47a76b8dfd04a89a5": "3b24a59e48effc7bbabf838d972ad2c3",
".git/objects/a6/065750f98b0fe16a1d865a1e45d82c01214dc5": "34da650078d51e79a06f6e041501862b",
".git/objects/ad/a035d8d7f32a4033ed21286b0c78e4854ed53d": "f682be7cb0770d60a70ef7e290b47d51",
".git/objects/b5/423c462166ae7856cfbab91adb090746657813": "9c542287fc80863509455b4dcb8eb70b",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/73f5eba3cc94def9b4e60b01b52e819b22810f": "112a8633e1090d2cb1f453db56b097ca",
".git/objects/ba/7a9c6ca05ea4aed64936ac8564fdc4013c0767": "95c87eaf277681fc3846134142f0648f",
".git/objects/ba/b72079ab193593ded3d8be2d37d528b15c3dc3": "26ba2ae174df5b3481539d1ed8d6063a",
".git/objects/bb/97e1c5ee0b905639063b5b6509b55e92239aad": "07ab04b7f18b7746a8627018bf3f558a",
".git/objects/bd/f77a8f30692b8d00bddd6b5b46e2e461e95942": "39014740f6377f37a0f736034edda84b",
".git/objects/bf/5c649c0b4c730dcd708f82763078441e84678d": "868690967c8c14fffbb92b39a5b30c54",
".git/objects/bf/ae7104825645a31abca0930ad789dcd6852298": "5029c4811c2f5a99fc4af47b5e52d10a",
".git/objects/c1/324b523988aeccf21069921bac8037d1bbf3bb": "6bc81f67243fa1868d9152b8f47d4400",
".git/objects/c2/316b3486c11780621ae8ffc378fa651b8569bb": "b839ad3819af04ff56d99363b0e74945",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c6/917335d37e45e1a521b73c0066099c03ec6e08": "62a9c33e729db2655c2d74fccff01718",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ca/8d6441afe29813c6ef2252cfe1789b632abc3e": "5a78a88bdfe8d7350d2a694d1e704529",
".git/objects/ca/f520eba3829fc4e29f75902ed97bf6ea7fb6de": "2da54fcfa7a3bad7b8d87702f025602c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/42ec2962e5512ab773e8dc7554272ac4fa283c": "705a16c80bd10625ef2b44f4728d8828",
".git/objects/d5/a3d85140ce174ab2bac58ee1541daaff80f8a7": "568384472807a667174142be02dad0a2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ce1d418669ae0bad6b7a0c3ee386bb8b258a1f": "fcea0a07f1841a72e17b16962958d113",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/42251f81f6755c5b51b890a833d9d2e5de101f": "0f82dfd08579b69e98c75c9ce699edb0",
".git/objects/dd/f2c893c33f0b14d57a9d1c39510ce1ab8fa7d3": "f38179262e78e91228dc00f5b1ea121c",
".git/objects/e2/ee9477f80ea2a4b3b72044e1d2db4f95f79f51": "29a87de83b97dcfc6a6f131b33e356b6",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e4/db9bd4cf9c0eee298d44b6423a8574fbfb5d2d": "b942cab897e74aa06f3826fb92229061",
".git/objects/e6/f605f1e3805d66769450cfbfba6987adc5bff3": "b3a8a862456ccd7ddac304618fa34fdd",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/190a89b0216e9e531c06b62f74160ec6026d28": "857bce23a5f1aceb33b9f7121ed727bc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/efda2a67de6f39c2e9ab15d53bbbe619004e34": "ae254cf57990bbf7de20d3041a31976f",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/630e5c1c8fc9a5bbe1c2614ba45366b2ce6a44": "88a7ebff3045bd689f64176843c36d93",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/pack/pack-3f4e79b1629ecc2c188ce4a705b8bfe656372db2.idx": "8dd8d8d1470da934287ee87fad1a31bb",
".git/objects/pack/pack-3f4e79b1629ecc2c188ce4a705b8bfe656372db2.pack": "95f737e22f168b701eb56a1c4002cf74",
".git/objects/pack/pack-3f4e79b1629ecc2c188ce4a705b8bfe656372db2.rev": "9f80671d750108362378127f93b53a1a",
".git/refs/heads/main": "717240e262bd11baf6bcafe8ef34f94f",
".git/refs/heads/master": "6787ae6412258ecac416b3178a71a8ba",
".git/refs/remotes/origin/main": "717240e262bd11baf6bcafe8ef34f94f",
".git/refs/remotes/origin/master": "6787ae6412258ecac416b3178a71a8ba",
".git/refs/remotes/origin/secondary": "f430a3935596c526c9ce80851e1fe872",
"404.html": "8a49d2141b2e4111ab0228bb76e3cc39",
"assets/AssetManifest.bin": "858c33b9dab4ab10dcefee9e29e07dcc",
"assets/AssetManifest.bin.json": "5a1b5a1b69b20a43d112b43ab1b253f2",
"assets/AssetManifest.json": "2e4bfbba2d43745b3f95ca1fe64669ed",
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
"assets/assets/image/five.jpeg": "535fa80b433a9059019a266daa1aee8a",
"assets/assets/image/hat.svg": "9c0eae2a559a6b15ab13f119cc459c6a",
"assets/assets/image/hero-background-1.png": "b549692c1e34f0b1f68a44ff9db79d17",
"assets/assets/image/highersec.jpeg": "ccef9c0940158f37f38b1ffec43742f9",
"assets/assets/image/ig.svg": "d4222a15684c9192af9c3af460d34d5e",
"assets/assets/image/iti.svg": "656dab73522509d4263b9cab5f4b6ec2",
"assets/assets/image/kids.jpg": "430b15df02e44aeb2396464efc52fdc0",
"assets/assets/image/kids2.jpg": "8d60187f3346142b0820a9ac962773ee",
"assets/assets/image/ln.svg": "194301918f95bb08124e3796f0ddc4cc",
"assets/assets/image/logo.png": "c6ffd74cd5146e9f001ca2f7549ed84e",
"assets/assets/image/map-mobile.svg": "fdfd613f8bee2b49eb7bfd1b86e3cbd4",
"assets/assets/image/map.svg": "7aa0ac778df1404739ecedc414d5c44a",
"assets/assets/image/math.svg": "79767778ec0732d8b3d2b3122bfaa145",
"assets/assets/image/one.jpeg": "93717374d3ab60fd173b4771af5b4b83",
"assets/assets/image/paper-background.png": "f05de2fe8091aa2f68c702f7f482faf7",
"assets/assets/image/plane.svg": "cfc4019659e92d00024db06302ef2b14",
"assets/assets/image/puzzle.svg": "9eeacc1224f482a94e87385f8196ddac",
"assets/assets/image/result1.jpeg": "6178b94aead7fc9ab4eca92f18bccf41",
"assets/assets/image/result2.jpeg": "2441816097a5908c1c596fa9911a7494",
"assets/assets/image/rocket.svg": "12711eae5b69f2f682468ce1d59fb5ec",
"assets/assets/image/sen2.jpeg": "fed0007437dbf1daeed6bbeaa74f7dbf",
"assets/assets/image/six.jpeg": "d16d234d5cac2d663d10addeac7d5e17",
"assets/assets/image/social-media.png": "13b59ef05277392db67383d794240d07",
"assets/assets/image/svg1.svg": "3d24580c1e0d73a2145c4cdf727fea54",
"assets/assets/image/three.jpeg": "354d8bf544e149c13171a9e6a8864189",
"assets/assets/image/top2.jpeg": "5993822a2237b4059be0e70d1a909c12",
"assets/assets/image/top3.jpeg": "0025a6219bdea8f31f03fc13275b499e",
"assets/assets/image/tower.png": "7166a4d0395c7c8948c8a563c3a01b9f",
"assets/assets/image/tree.jpg": "8d9d9dc6305f8b2af23f0a6fc7322620",
"assets/assets/image/two.jpeg": "0c44086e0ad495fe42da85cb411eb321",
"assets/assets/image/yt.svg": "562924efaad0d4899e00c135d617e97f",
"assets/FontManifest.json": "99e2fea253fef2c319a06d8cb1563cc2",
"assets/fonts/MaterialIcons-Regular.otf": "425320406b291b44e7968eb05bbb3f44",
"assets/NOTICES": "2c3fa95c49fbe9fc9d514cc36dad3215",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"build.js": "216e19ee7898869fa792fbe4e17cff6b",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "d91af95000f274060715dbc1f72dde2c",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "8dc25079605861089dc64e10cf93cfdc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/logo.png": "d91af95000f274060715dbc1f72dde2c",
"index.html": "56f13050f3468e48ac20672e9b6ae377",
"/": "56f13050f3468e48ac20672e9b6ae377",
"loading.gif": "917cf8b79ee6f970a6e12faae132758a",
"main.dart.js": "f2075df86abed7886ddba3b537b8192f",
"manifest.json": "3c85fe627b251384e98d984f6eba8126",
"robots.txt": "305808b78ef246968a562a24e86cc37f",
"sitemap.xml": "9be33b6901b81ca1c626015a2c09136b",
"version.json": "708182d47307fcaf9937a189725bbce9"};
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
