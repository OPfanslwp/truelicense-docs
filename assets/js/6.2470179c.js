(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{326:function(e,t,a){"use strict";a.r(t);var s=a(33),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("To follow this guide you need to have "),a("a",{attrs:{href:"https://maven.apache.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Maven"),a("OutboundLink")],1),e._v(" installed.")])]),e._v(" "),a("h2",{attrs:{id:"generating-a-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generating-a-project"}},[e._v("#")]),e._v(" Generating A Project")]),e._v(" "),a("p",[e._v("The quickest way to get started with "),a("a",{attrs:{href:"https://github.com/christian-schlichtherle/truelicense",target:"_blank",rel:"noopener noreferrer"}},[e._v("TrueLicense"),a("OutboundLink")],1),e._v(" is by using\nits companion project, the\n"),a("a",{attrs:{href:"https://github.com/christian-schlichtherle/truelicense-maven-archetype",target:"_blank",rel:"noopener noreferrer"}},[e._v("TrueLicense Maven Archetype"),a("OutboundLink")],1),e._v(", to generate a\ncustom project:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("JAVA_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("/usr/libexec/java_home -v "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("11")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# on macOS only")]),e._v("\nmvn org.apache.maven.plugins:maven-archetype-plugin:generate --batch-mode "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    -DarchetypeGroupId"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'global.namespace.truelicense-maven-archetype'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    -DarchetypeArtifactId"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'truelicense-maven-archetype'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    -DarchetypeVersion"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'4.0.3'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    -DartifactId"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'stargazer'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    -Dcompany"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Company Inc.'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    -DgroupId"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'com.company.product'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    -Dpassword"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'unsafe2020'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    -Dsubject"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'StarGazer 2020'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    -DtrueLicenseVersion"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'4.0.3'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    -Dversion"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'1.0-SNAPSHOT'")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" stargazer\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chmod")]),e._v(" +x mvnw\n./mvnw clean verify\n")])])]),a("p",[e._v("For a complete list of properties, please check the "),a("RouterLink",{attrs:{to:"/reference/config-properties.html"}},[e._v("Configuration Properties")]),e._v(" page.\nPlease also check the "),a("RouterLink",{attrs:{to:"/guide/example-configs.html"}},[e._v("Example Configurations")]),e._v(" page.")],1),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("You should immediately check-in the generated project to some "),a("abbr",{attrs:{title:"Version Control System"}},[e._v("VCS")]),e._v(".\nThe generated project contains a "),a("code",[e._v(".gitignore")]),e._v(" and "),a("code",[e._v(".hgignore")]),e._v(" file for Git and Mercurial, respectively.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Don't confuse TrueLicense with its companion project, the TrueLicense Maven Archetype:\nWhile TrueLicense provides the "),a("abbr",{attrs:{title:"Application Programming Interface"}},[e._v("API")]),e._v(" and its implementations, the TrueLicense Maven Archetype is a code generator for\nsample projects.")]),e._v(" "),a("p",[e._v("While both projects may have an independent release cycle, their version numbers typically match, as highlighted above.")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("As of version 4.0.3, the TrueLicense Maven Archetype does not fully support Java 14 yet.\nIt's recommended to set it to version 11 for now.")]),e._v(" "),a("p",[e._v("This constraint only applies to the TrueLicense Maven Archetype:\nTrueLicense version 4.0.3 supports Java 14 just fine!")])]),e._v(" "),a("h2",{attrs:{id:"generating-a-license-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generating-a-license-key"}},[e._v("#")]),e._v(" Generating A License Key")]),e._v(" "),a("p",[e._v("You can generate a license key and save it to the file "),a("code",[e._v("license.lic")]),e._v(" like this:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("$ java -jar keygen/target/*-keygen-*-standalone.jar generate license.lic -output -\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"consumerAmount"')]),e._v(":1,"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"consumerType"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"User"')]),e._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"holder"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"CN=Unknown"')]),e._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"issued"')]),e._v(":1565085418292,"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"issuer"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"CN=Company Inc."')]),e._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"subject"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"StarGazer 2020"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("You will typically sell and transmit the generated license keys to your customers so that they can install it into your\nsoftware product.")]),e._v(" "),a("h2",{attrs:{id:"installing-a-license-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-a-license-key"}},[e._v("#")]),e._v(" Installing A License Key")]),e._v(" "),a("p",[e._v("For installing the license key, TrueLicense provides many options:")]),e._v(" "),a("ul",[a("li",[e._v("There is an "),a("abbr",{attrs:{title:"Application Programming Interface"}},[e._v("API")]),e._v(" for generating, installing, verifying and deleting license keys.")]),e._v(" "),a("li",[e._v("For the same purposes, there is also a "),a("abbr",{attrs:{title:"Command Line Interface"}},[e._v("CLI")]),e._v(" - you have just used it to generate a license key.")]),e._v(" "),a("li",[e._v("There is also a Swing based "),a("abbr",{attrs:{title:"Graphical User Interface"}},[e._v("GUI")]),e._v(" for installing, verifying and uninstalling license keys.")]),e._v(" "),a("li",[e._v("For the same purposes, there is also a "),a("abbr",{attrs:{title:"Representational State Transfer"}},[e._v("ReST")]),e._v("-based "),a("abbr",{attrs:{title:"Web Service Interface"}},[e._v("WSI")]),e._v(".")])]),e._v(" "),a("p",[e._v("For example, you can install the previously generated license key using the "),a("abbr",{attrs:{title:"Graphical User Interface"}},[e._v("GUI")]),e._v(" like this:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("java -jar keymgr/target/*-keymgr-*-guarded.jar wizard\n")])])]),a("p",[e._v("Follow the instructions of the licensing wizard to install and verify the license key which was previously saved to the\nfile "),a("code",[e._v("license.lic")]),e._v(".\nEventually, the licensing wizard will show you the properties of the installed license key:")]),e._v(" "),a("p",[a("img",{attrs:{src:"/image/wizard-1.png",alt:"Licensing Wizard Step 1"}}),e._v(" "),a("img",{attrs:{src:"/image/wizard-2.png",alt:"Licensing Wizard Step 2"}}),e._v(" "),a("img",{attrs:{src:"/image/wizard-3.png",alt:"Licensing Wizard Step 3"}}),e._v(" "),a("img",{attrs:{src:"/image/wizard-4.png",alt:"Licensing Wizard Step 4"}})]),e._v(" "),a("h2",{attrs:{id:"uninstalling-a-license-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uninstalling-a-license-key"}},[e._v("#")]),e._v(" Uninstalling A License Key")]),e._v(" "),a("p",[e._v("In the rare event that a user wants to uninstall a license key, this can be done with the licensing wizard, too:")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("This feature can get removed from the "),a("abbr",{attrs:{title:"Graphical User Interface"}},[e._v("GUI")]),e._v(" with the property\n"),a("RouterLink",{attrs:{to:"/guide/example-configs.html#hide-uninstall-action"}},[e._v("hideUninstallAction")]),e._v(".")],1)]),e._v(" "),a("p",[a("img",{attrs:{src:"/image/wizard-5.png",alt:"Licensing Wizard Step 5"}}),e._v(" "),a("img",{attrs:{src:"/image/wizard-6.png",alt:"Licensing Wizard Step 6"}}),e._v(" "),a("img",{attrs:{src:"/image/wizard-7.png",alt:"Licensing Wizard Step 7"}})]),e._v(" "),a("h2",{attrs:{id:"free-trial-period-ftp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#free-trial-period-ftp"}},[e._v("#")]),e._v(" Free Trial Period (FTP)")]),e._v(" "),a("p",[e._v("You can configure a free trial period for your software product - see\n"),a("RouterLink",{attrs:{to:"/guide/example-configs.html#free-trial-period"}},[e._v("Free Trial Period")]),e._v(" example.\nIf you follow this example, then a license key with a term of thirty days gets automatically generated for the user at\nfirst use.\nOnce the FTP license key expires, the user needs to have a regular license key installed in order to continue using your\nsoftware product.")],1),e._v(" "),a("p",[e._v("You can check this license key using the licensing wizard again:")]),e._v(" "),a("p",[a("img",{attrs:{src:"/image/ftp/wizard-1.png",alt:"Licensing Wizard Step 1"}}),e._v(" "),a("img",{attrs:{src:"/image/ftp/wizard-2.png",alt:"Licensing Wizard Step 2"}})]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v('As you can see, the installed license key has the "Not After" property set in order to expire the key after thirty days.')])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("It's not possible to uninstall an FTP license key!\nA user can only override it by installing a regular license key.\nWhen the user uninstalls the regular license key, the FTP license key takes over again.")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("If you require your users to register before starting a free trial period, then you should not use this feature and\nconsider configuring "),a("RouterLink",{attrs:{to:"/guide/example-configs.html#multiple-editions"}},[e._v("multiple editions")]),e._v(' instead.\nIn that case, the edition string could look like "standard ftp".')],1)]),e._v(" "),a("h2",{attrs:{id:"next-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[e._v("#")]),e._v(" Next Steps")]),e._v(" "),a("p",[e._v("Congratulations - you have successfully generated, verified, installed and uninstalled a regular and an FTP license key!\nNext, you should examine the generated project in order to learn how the "),a("abbr",{attrs:{title:"Application Programming Interface"}},[e._v("API")]),e._v(", "),a("abbr",{attrs:{title:"Command Line Interface"}},[e._v("CLI")]),e._v(", "),a("abbr",{attrs:{title:"Graphical User Interface"}},[e._v("GUI")]),e._v(" and "),a("abbr",{attrs:{title:"Web Service Interface"}},[e._v("WSI")]),e._v(" work together and how you\ncan integrate them into your application.")])])}),[],!1,null,null,null);t.default=n.exports}}]);