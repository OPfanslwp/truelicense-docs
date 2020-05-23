(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{325:function(e,t,s){"use strict";s.r(t);var r=s(33),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"building-the-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#building-the-project"}},[e._v("#")]),e._v(" Building The Project")]),e._v(" "),s("p",[e._v("You can rebuild the project using the following command:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("JAVA_HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("/usr/libexec/java_home -v "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("11")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# on macOS only")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" +x mvnw\n./mvnw clean verify -Pintegration-test\n")])])]),s("p",[e._v("The parameter "),s("code",[e._v("-Pintegration-test")]),e._v(" triggers the integration tests.")]),e._v(" "),s("h2",{attrs:{id:"build-artifacts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-artifacts"}},[e._v("#")]),e._v(" Build Artifacts")]),e._v(" "),s("p",[e._v("Building the sample project produces the following artifacts - listed in alphabetic order:")]),e._v(" "),s("dl",[s("dt",[s("code",[e._v("keygen/src/main/resources/${privateKeyStoreFile}")])]),e._v(" "),s("dd",[s("p",[e._v("The private key store - see below.")]),e._v(" "),s("p")]),e._v(" "),s("dt",[s("code",[e._v("keygen/target/${artifactId}-keygen-${version}-standalone.jar")])]),e._v(" "),s("dd",[s("p",[e._v("This is the standalone JAR for the Key Generator module.\nIt is generated by bundling the regular JAR with all its dependency JARs.\nThis is convenient to use on the command line because you just have to add this JAR to the class path.\n"),s("strong",[e._v("You should never distribute this JAR!")])])]),e._v(" "),s("dt",[s("code",[e._v("keygen/target/${artifactId}-keygen-${version}.jar")])]),e._v(" "),s("dd",[s("p",[e._v("This is the regular JAR for the Key Generator module.\nThis JAR has dependencies on other JARs as specified in the Maven\n"),s("a",{attrs:{href:"https://maven.apache.org/guides/introduction/introduction-to-the-pom.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("POM"),s("OutboundLink")],1),e._v(" for this module.\n"),s("strong",[e._v("You should never distribute this JAR!")])])]),e._v(" "),s("dt",[s("code",[e._v("keymgr/src/main/resources/${ftpKeyStoreFile}")])]),e._v(" "),s("dd",[s("p",[e._v("The FTP key store - see below.")])]),e._v(" "),s("dt",[s("code",[e._v("keymgr/src/main/resources/${publicKeyStoreFile}")])]),e._v(" "),s("dd",[s("p",[e._v("The public key store - see below.")])]),e._v(" "),s("dt",[s("code",[e._v("keymgr/target/${artifactId}-keymgr-${version}-guarded.jar")])]),e._v(" "),s("dd",[s("p",[e._v("This is the obfuscated standalone JAR for the Key Manager module.\nIt is generated from the standalone JAR by obfuscating its byte code.\nThis improves the security by making attacks on the byte code pretty hard - but not impossible.\n"),s("strong",[e._v("This is the only JAR which is intended for distribution.")])])]),e._v(" "),s("dt",[s("code",[e._v("keymgr/target/${artifactId}-keymgr-${version}-standalone.jar")])]),e._v(" "),s("dd",[s("p",[e._v("This is the standalone JAR for the Key Manager module.\nIt is generated by bundling the regular JAR with all its dependency JARs.\nThis is convenient to use on the command line because you just have to add this JAR to the class path.\n"),s("strong",[e._v("You should not distribute this JAR without additional obfuscation.")])])]),e._v(" "),s("dt",[s("code",[e._v("keymgr/target/${artifactId}-keymgr-${version}.jar")])]),e._v(" "),s("dd",[s("p",[e._v("This is the regular JAR for the Key Manager module.\nThis JAR has dependencies on other JARs as specified in the Maven POM for this module.\n"),s("strong",[e._v("You should not distribute this JAR without additional obfuscation.")])])]),e._v(" "),s("dt",[s("code",[e._v("keymgrsrv/target/${artifactId}-keymgrsrv-${version}.jar")])]),e._v(" "),s("dd",[s("p",[e._v("This is the regular JAR for the Key Manager Service module.\nThis JAR has dependencies on other JARs as specified in the Maven POM for this module.\n"),s("strong",[e._v("You should not distribute this JAR.")])])])]),e._v(" "),s("h3",{attrs:{id:"generated-keystore-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generated-keystore-files"}},[e._v("#")]),e._v(" Generated Keystore Files")]),e._v(" "),s("p",[e._v("When you run the build for the first time, the following keystore files get generated:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("keygen/src/main/resources/${privateKeyStoreFile}")])]),e._v(" "),s("li",[s("code",[e._v("keymgr/src/main/resources/${ftpKeyStoreFile}")])]),e._v(" "),s("li",[s("code",[e._v("keymgr/src/main/resources/${publicKeyStoreFile}")])])]),e._v(" "),s("p",[e._v("You can use the following command to inspect the entries in the generated key store files:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ keytool -list -v -protected -keystore "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${keyStorePath}")]),e._v(" -storetype "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${keyStoreType}")]),e._v("\n")])])]),s("p",[e._v("… where you need to replace "),s("code",[e._v("${keyStorePath}")]),e._v(" with the respective path of the keystore file and "),s("code",[e._v("${keyStoreType}")]),e._v(" with\nthe keystore type which is configured in the parent POM file "),s("code",[e._v("pom.xml")]),e._v(", e.g. "),s("code",[e._v("JCEKS")]),e._v(", "),s("code",[e._v("JKS")]),e._v(" or "),s("code",[e._v("PKCS12")]),e._v(".")]),e._v(" "),s("p",[e._v("The output of this command will show you a lot of metadata information:\nThe distinguished name of the key pair owner and issuer, the validity period of the certificate etc.\nHowever, TrueLicense only reads the key, its digital signature algorithm and its signature - all other metadata gets\nignored.")])])}),[],!1,null,null,null);t.default=a.exports}}]);