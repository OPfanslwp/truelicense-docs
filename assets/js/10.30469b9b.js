(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{329:function(e,t,r){"use strict";r.r(t);var o=r(33),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"configuration-properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration-properties"}},[e._v("#")]),e._v(" Configuration Properties")]),e._v(" "),r("p",[e._v("Following is the list of configuration properties for generating a project from the TrueLicense Maven Archetype in\nalphabetic order.\nPlease check the "),r("RouterLink",{attrs:{to:"/guide/example-configs.html"}},[e._v("Example Configurations")]),e._v(" page to see how to apply these properties.")],1),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("Property names and values are case-sensitive.")])]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("If you want to change the value of these properties,\nthen it’s generally necessary to "),r("strong",[e._v("regenerate the project")]),e._v(" from the TrueLicense Maven Archetype.")])]),e._v(" "),r("div",{staticClass:"custom-block danger"},[r("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),r("p",[e._v("Even if all their property values are equal, the license keys of any two generated projects will not be compatible\nunless both projects "),r("strong",[e._v("also share the following key store files")]),e._v(" (see below for default values):")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("keygen/src/main/resources/${privateKeyStoreFile}")])]),e._v(" "),r("li",[r("code",[e._v("keymgr/src/main/resources/${ftpKeyStoreFile}")])]),e._v(" "),r("li",[r("code",[e._v("keymgr/src/main/resources/${publicKeyStoreFile}")])])])]),e._v(" "),r("h2",{attrs:{id:"required-properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#required-properties"}},[e._v("#")]),e._v(" Required Properties")]),e._v(" "),r("h3",{attrs:{id:"artifactid"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#artifactid"}},[e._v("#")]),e._v(" "),r("code",[e._v("artifactId")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("The Maven artifact ID of the root\n"),r("a",{attrs:{href:"http://maven.apache.org/guides/introduction/introduction-to-the-pom.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("POM"),r("OutboundLink")],1),e._v("\nfor the generated project.\nThis could match the name of your software product, e.g. "),r("code",[e._v("product")]),e._v(", or be generic, e.g. "),r("code",[e._v("license")]),e._v(".")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[e._v("A Maven artifact ID must not contain spaces and should consist of only lower-case characters - see\n"),r("a",{attrs:{href:"https://maven.apache.org/pom.html#Maven_Coordinates",target:"_blank",rel:"noopener noreferrer"}},[e._v("Maven Coordinates"),r("OutboundLink")],1),e._v(".")])])]),e._v(" "),r("h3",{attrs:{id:"company"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#company"}},[e._v("#")]),e._v(" "),r("code",[e._v("company")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("The display name of your company, e.g. "),r("code",[e._v("Company Inc.")]),e._v(".")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[r("a",{attrs:{href:"https://www.w3.org/TR/xmlschema-2/#token",target:"_blank",rel:"noopener noreferrer"}},[e._v("token"),r("OutboundLink")],1)])])]),e._v(" "),r("h3",{attrs:{id:"groupid"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#groupid"}},[e._v("#")]),e._v(" "),r("code",[e._v("groupId")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("The Maven group ID for the generated project.\nThis could be the reversed domain name for your company plus the name of the software product.")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[e._v("A Maven group ID must not contain spaces and should consist of only lower-case characters - see\n"),r("a",{attrs:{href:"https://maven.apache.org/pom.html#Maven_Coordinates",target:"_blank",rel:"noopener noreferrer"}},[e._v("Maven Coordinates"),r("OutboundLink")],1),e._v(".")])])]),e._v(" "),r("h3",{attrs:{id:"password"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#password"}},[e._v("#")]),e._v(" "),r("code",[e._v("password")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("The common password for accessing keystores and encrypting license keys.")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[e._v("A string of at least eight characters which must contain letters and digits.\nYou should consider this to be the bare minimum.\nChoosing a longer password with additional punctuation characters significantly improves the security level of your\nlicensing schema.")])])]),e._v(" "),r("h3",{attrs:{id:"subject"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#subject"}},[e._v("#")]),e._v(" "),r("code",[e._v("subject")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("The license management subject.\nThe value of this property gets stored in the generated license keys and is used for validation.\nA "),r("code",[e._v("global.namespace.truelicense.api.LicenseValidationException")]),e._v(" gets thrown if the validation fails.\nIt's best practice including the name of your software product, and a version number range for which the license\nkeys are valid, e.g. "),r("code",[e._v("Product 1")]),e._v(" or "),r("code",[e._v("Product 1.X")]),e._v(".\nThe license validation step compares the entire string, so the version number format doesn't matter.\nIf you want to obsolete existing license keys in a future release then all you need to do is to change the value of\nthis property, e.g. to "),r("code",[e._v("Product 2")]),e._v(" or "),r("code",[e._v("Product 2.X")]),e._v(".")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[r("a",{attrs:{href:"https://www.w3.org/TR/xmlschema-2/#token",target:"_blank",rel:"noopener noreferrer"}},[e._v("token"),r("OutboundLink")],1)])])]),e._v(" "),r("h3",{attrs:{id:"version"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" "),r("code",[e._v("version")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("The Maven version for the generated project.\nThis should match the version of your software product.")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[r("a",{attrs:{href:"https://www.w3.org/TR/xmlschema-2/#token",target:"_blank",rel:"noopener noreferrer"}},[e._v("token"),r("OutboundLink")],1)])])]),e._v(" "),r("h2",{attrs:{id:"optional-properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#optional-properties"}},[e._v("#")]),e._v(" Optional Properties")]),e._v(" "),r("h3",{attrs:{id:"artifactname"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#artifactname"}},[e._v("#")]),e._v(" "),r("code",[e._v("artifactName")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("The display name of the parent POM for the generated  project.\nThis could be the name of your software product, e.g. "),r("code",[e._v("Product")]),e._v(", or be generic, e.g. "),r("code",[e._v("License")]),e._v(".")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[r("a",{attrs:{href:"https://www.w3.org/TR/xmlschema-2/#token",target:"_blank",rel:"noopener noreferrer"}},[e._v("token"),r("OutboundLink")],1)])]),e._v(" "),r("dt",[r("strong",[e._v("Default Value")])]),e._v(" "),r("dd",[r("p",[r("code",[e._v("-")])])])]),e._v(" "),r("h3",{attrs:{id:"customclasspathscope"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#customclasspathscope"}},[e._v("#")]),e._v(" "),r("code",[e._v("customClasspathScope")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("Declares the scope of the class path for the custom classes referenced by the properties with the name pattern\n"),r("code",[e._v("*Class")]),e._v(".")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[e._v("Enter "),r("code",[e._v("compile")]),e._v(" to declare that custom classes are available on the class path at compile time.\nThe advantage is that the classes can be safely included in the byte code obfuscation process.\nThe disadvantage is that the classes need to be known at compile time so that manual editing of the dependencies in\nthe generated POM files for the Key Generator or Key Manager module may be necessary.")]),e._v(" "),r("p",[e._v("Enter "),r("code",[e._v("runtime")]),e._v(" to declare that custom classes are available on the class path at runtime only.\nThe advantage is that the classes don't need to be known at compile time so that manual editing of the generated POM\nfiles should not be necessary.\nThe disadvantage is that the classes need to be generally excluded from the byte code obfuscation process, e.g. for\nthe Key Manager module.\nThis is considered to be a security leak and therefore should be generally avoided.\nHowever, this is not true for "),r("a",{attrs:{href:"https://www.guardsquare.com/en/products/proguard",target:"_blank",rel:"noopener noreferrer"}},[e._v("ProGuard"),r("OutboundLink")],1),e._v(":\nTrueLicense generates code for dynamic class loading which is correctly recognized and obfuscated by ProGuard so\nthat it's safe to use this option with ProGuard.")])]),e._v(" "),r("dt",[r("strong",[e._v("Default Value")])]),e._v(" "),r("dd",[r("p",[r("code",[e._v("compile")])])])]),e._v(" "),r("h3",{attrs:{id:"disablewizard"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#disablewizard"}},[e._v("#")]),e._v(" "),r("code",[e._v("disableWizard")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("Whether the Swing wizard dialog in the Key Manager module should be disabled or not.\nEnter "),r("code",[e._v("true")]),e._v(" to remove the dependency on the TrueLicense Swing module and reduce the code size.")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[r("a",{attrs:{href:"https://www.w3.org/TR/xmlschema-2/#boolean",target:"_blank",rel:"noopener noreferrer"}},[e._v("boolean"),r("OutboundLink")],1)])]),e._v(" "),r("dt",[r("strong",[e._v("Default Value")])]),e._v(" "),r("dd",[r("p",[r("code",[e._v("false")])])])]),e._v(" "),r("h3",{attrs:{id:"editions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#editions"}},[e._v("#")]),e._v(" "),r("code",[e._v("editions")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("A space separated list of edition names, ordered from supersets to subsets, e.g. "),r("code",[e._v("enterprise standard")]),e._v(".\nEach name must be a valid Java identifier name and should be camel-cased with a lower-case initial character.\nThe names "),r("code",[e._v("edition")]),e._v(" and "),r("code",[e._v("ftp")]),e._v(" are reserved for internal use.")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[e._v("A space separated list of valid identifiers in the Java language.")])]),e._v(" "),r("dt",[r("strong",[e._v("Default Value")])]),e._v(" "),r("dd",[r("p",[r("code",[e._v("standard")])])])]),e._v(" "),r("h3",{attrs:{id:"freetrialperiod"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#freetrialperiod"}},[e._v("#")]),e._v(" "),r("code",[e._v("freeTrialPeriod")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("The number of days for an auto-generated Free Trial Period (FTP).\nNeeds to be a non-negative integer, e.g. "),r("code",[e._v("30")]),e._v(".\nSpecify "),r("code",[e._v("0")]),e._v(" to disable the auto-generation of FTP license keys.")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[r("a",{attrs:{href:"https://www.w3.org/TR/xmlschema-2/#nonNegativeInteger",target:"_blank",rel:"noopener noreferrer"}},[e._v("nonNegativeInteger"),r("OutboundLink")],1)])]),e._v(" "),r("dt",[r("strong",[e._v("Default Value")])]),e._v(" "),r("dd",[r("p",[r("code",[e._v("0")])])])]),e._v(" "),r("h3",{attrs:{id:"ftpkeystorefile"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ftpkeystorefile"}},[e._v("#")]),e._v(" "),r("code",[e._v("ftpKeyStoreFile")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("The path of the FTP keystore file in the Key Manager module relative to the base path\n"),r("code",[e._v("keymgr/src/main/resources/")]),e._v(".\nThis property gets ignored if the property "),r("a",{attrs:{href:"#freetrialperiod"}},[e._v("freeTrialPeriod")]),e._v(" is set to "),r("code",[e._v("0")]),e._v(".\nOtherwise, if this property is set to "),r("code",[e._v("-")]),e._v(", then it gets overridden by the property "),r("a",{attrs:{href:"#publickeystorefile"}},[e._v("publicKeyStoreFile")]),e._v(".")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[r("a",{attrs:{href:"https://www.w3.org/TR/xmlschema-2/#token",target:"_blank",rel:"noopener noreferrer"}},[e._v("token"),r("OutboundLink")],1)])]),e._v(" "),r("dt",[r("strong",[e._v("Default Value")])]),e._v(" "),r("dd",[r("p",[r("code",[e._v("-")])])])]),e._v(" "),r("h3",{attrs:{id:"ftpsecretmarkerclass"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ftpsecretmarkerclass"}},[e._v("#")]),e._v(" "),r("code",[e._v("ftpSecretMarkerClass")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("A fully qualified binary class name which declares the user or system preferences node to use for storing the\nauto-generated FTP license key.\nThis property gets ignored if the property "),r("a",{attrs:{href:"#freetrialperiod"}},[e._v("freeTrialPeriod")]),e._v(" is set to "),r("code",[e._v("0")]),e._v(".\nOtherwise, the "),r("strong",[e._v("package name")]),e._v(" of the referenced class needs to be "),r("strong",[e._v("kept secret")]),e._v(" because removing the\nFTP license key from the preferences' node triggers the auto-generation of another FTP license key!\nThe named class gets dynamically loaded at run time, so it doesn't have to be on the compile-time class path of the\nKey Manager module.")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[r("a",{attrs:{href:"https://www.w3.org/TR/xmlschema-2/#token",target:"_blank",rel:"noopener noreferrer"}},[e._v("token"),r("OutboundLink")],1)])]),e._v(" "),r("dt",[r("strong",[e._v("Default Value")])]),e._v(" "),r("dd",[r("p",[r("code",[e._v("-")])])])]),e._v(" "),r("h3",{attrs:{id:"hideuninstallaction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hideuninstallaction"}},[e._v("#")]),e._v(" "),r("code",[e._v("hideUninstallAction")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("Whether the Swing wizard dialog in the Key Manager module should hide the action for uninstalling the license key or\nnot.")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[r("a",{attrs:{href:"https://www.w3.org/TR/xmlschema-2/#boolean",target:"_blank",rel:"noopener noreferrer"}},[e._v("boolean"),r("OutboundLink")],1)])]),e._v(" "),r("dt",[r("strong",[e._v("Default Value")])]),e._v(" "),r("dd",[r("p",[r("code",[e._v("false")])])])]),e._v(" "),r("h3",{attrs:{id:"keygenauthorization"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keygenauthorization"}},[e._v("#")]),e._v(" "),r("code",[e._v("keyGenAuthorization")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("An expression of the type "),r("code",[e._v("global.namespace.truelicense.api.LicenseManagementAuthorization")]),e._v(" for use in the Key\nGenerator module.\nEnter "),r("code",[e._v("-")]),e._v(" to use no license authorization.")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[r("a",{attrs:{href:"https://www.w3.org/TR/xmlschema-2/#token",target:"_blank",rel:"noopener noreferrer"}},[e._v("token"),r("OutboundLink")],1)])]),e._v(" "),r("dt",[r("strong",[e._v("Default Value")])]),e._v(" "),r("dd",[r("p",[r("code",[e._v("-")])])])]),e._v(" "),r("h3",{attrs:{id:"keygenvalidation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keygenvalidation"}},[e._v("#")]),e._v(" "),r("code",[e._v("keyGenValidation")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("An expression of the type "),r("code",[e._v("global.namespace.truelicense.api.LicenseValidation")]),e._v(" for use in the Key Generator module.\nEnter "),r("code",[e._v("-")]),e._v(" to use only the built-in license validation function.")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[r("a",{attrs:{href:"https://www.w3.org/TR/xmlschema-2/#token",target:"_blank",rel:"noopener noreferrer"}},[e._v("token"),r("OutboundLink")],1)])]),e._v(" "),r("dt",[r("strong",[e._v("Default Value")])]),e._v(" "),r("dd",[r("p",[r("code",[e._v("-")])])])]),e._v(" "),r("h3",{attrs:{id:"keygenvalidationcomposition"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keygenvalidationcomposition"}},[e._v("#")]),e._v(" "),r("code",[e._v("keyGenValidationComposition")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("Selects the composition strategy for license validation functions in the Key Generator module.\nThis property gets ignored if the property "),r("a",{attrs:{href:"#keygenvalidation"}},[e._v("keyGenValidation")]),e._v(" is set to "),r("code",[e._v("-")]),e._v(".")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[e._v("Enter "),r("code",[e._v("override")]),e._v(" to apply only the custom function.\nEnter "),r("code",[e._v("decorate")]),e._v(" to apply both the custom function and the built-in function.")])]),e._v(" "),r("dt",[r("strong",[e._v("Default Value")])]),e._v(" "),r("dd",[r("p",[r("code",[e._v("decorate")])])])]),e._v(" "),r("h3",{attrs:{id:"keymgrauthorization"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keymgrauthorization"}},[e._v("#")]),e._v(" "),r("code",[e._v("keyMgrAuthorization")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("An expression of the type "),r("code",[e._v("global.namespace.truelicense.api.LicenseManagementAuthorization")]),e._v(" for use in the Key\nManager module.\nEnter "),r("code",[e._v("-")]),e._v(" to use no license authorization.")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[r("a",{attrs:{href:"https://www.w3.org/TR/xmlschema-2/#token",target:"_blank",rel:"noopener noreferrer"}},[e._v("token"),r("OutboundLink")],1)])]),e._v(" "),r("dt",[r("strong",[e._v("Default Value")])]),e._v(" "),r("dd",[r("p",[r("code",[e._v("-")])])])]),e._v(" "),r("h3",{attrs:{id:"keymgrclock"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keymgrclock"}},[e._v("#")]),e._v(" "),r("code",[e._v("keyMgrClock")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("An expression of the type "),r("code",[e._v("java.time.Clock")]),e._v(" for use in the Key Manager module.\nEnter "),r("code",[e._v("-")]),e._v(" to use the system clock.")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[r("a",{attrs:{href:"https://www.w3.org/TR/xmlschema-2/#token",target:"_blank",rel:"noopener noreferrer"}},[e._v("token"),r("OutboundLink")],1)])]),e._v(" "),r("dt",[r("strong",[e._v("Default Value")])]),e._v(" "),r("dd",[r("p",[r("code",[e._v("-")])])])]),e._v(" "),r("h3",{attrs:{id:"keymgrvalidation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keymgrvalidation"}},[e._v("#")]),e._v(" "),r("code",[e._v("keyMgrValidation")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("An expression of the type "),r("code",[e._v("global.namespace.truelicense.api.LicenseValidation")]),e._v(" for use in the Key Manager module.\nEnter "),r("code",[e._v("-")]),e._v(" to use only the built-in license validation function.")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[r("a",{attrs:{href:"https://www.w3.org/TR/xmlschema-2/#token",target:"_blank",rel:"noopener noreferrer"}},[e._v("token"),r("OutboundLink")],1)])]),e._v(" "),r("dt",[r("strong",[e._v("Default Value")])]),e._v(" "),r("dd",[r("p",[r("code",[e._v("-")])])])]),e._v(" "),r("h3",{attrs:{id:"keymgrvalidationcomposition"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keymgrvalidationcomposition"}},[e._v("#")]),e._v(" "),r("code",[e._v("keyMgrValidationComposition")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("Selects the composition strategy for license validation functions in the Key Manager module.\nThis property gets ignored if the property "),r("a",{attrs:{href:"#keymgrvalidation"}},[e._v("keyMgrValidation")]),e._v(" is set to "),r("code",[e._v("-")]),e._v(".")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[e._v("Enter "),r("code",[e._v("override")]),e._v(" to apply only the custom function.\nEnter "),r("code",[e._v("decorate")]),e._v(" to apply both the custom function and the built-in function.")])]),e._v(" "),r("dt",[r("strong",[e._v("Default Value")])]),e._v(" "),r("dd",[r("p",[r("code",[e._v("decorate")])])])]),e._v(" "),r("h3",{attrs:{id:"keypairalgorithm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keypairalgorithm"}},[e._v("#")]),e._v(" "),r("code",[e._v("keyPairAlgorithm")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("The algorithm to use when generating key pairs in the keystore files on the first build.\nThis property gets ignored if the keystore files already exist.\nThe algorithm needs to be implemented by some security provider which is installed in the JRE.")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[e._v("The name of a\n"),r("a",{attrs:{href:"https://docs.oracle.com/en/java/javase/14/docs/specs/security/standard-names.html#keypairgenerator-algorithms",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("KeyPairGenerator")]),e._v(" algorithm"),r("OutboundLink")],1),e._v(":")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("DiffieHellman")])]),e._v(" "),r("li",[r("code",[e._v("DSA")])]),e._v(" "),r("li",[r("code",[e._v("EC")])]),e._v(" "),r("li",[r("code",[e._v("RSA")])]),e._v(" "),r("li",[r("code",[e._v("RSASSA-PSS")])]),e._v(" "),r("li",[r("code",[e._v("X25519")]),e._v(" (requires Java 11 or later)")]),e._v(" "),r("li",[r("code",[e._v("X448")]),e._v(" (requires Java 11 or later)")]),e._v(" "),r("li",[r("code",[e._v("XDH")]),e._v(" (requires Java 11 or later)")])])]),e._v(" "),r("dt",[r("strong",[e._v("Default Value")])]),e._v(" "),r("dd",[r("p",[r("code",[e._v("DSA")])])])]),e._v(" "),r("h3",{attrs:{id:"keypairsize"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keypairsize"}},[e._v("#")]),e._v(" "),r("code",[e._v("keyPairSize")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("The key size in bits when generating key pairs in the keystore files at the first build.\nThis property gets ignored if the keystore files already exist.\nOtherwise, if it's "),r("code",[e._v("0")]),e._v(", then the property gets overridden by the keytool.\nOtherwise, the bit size needs to correspond to the property "),r("a",{attrs:{href:"#keypairalgorithm"}},[e._v("keyPairAlgorithm")]),e._v("\nand be implemented by some security provider which is installed in the JRE.")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[r("a",{attrs:{href:"https://www.w3.org/TR/xmlschema-2/#nonNegativeInteger",target:"_blank",rel:"noopener noreferrer"}},[e._v("nonNegativeInteger"),r("OutboundLink")],1)])]),e._v(" "),r("dt",[r("strong",[e._v("Default Value")])]),e._v(" "),r("dd",[r("p",[r("code",[e._v("0")])])])]),e._v(" "),r("h3",{attrs:{id:"keystoretype"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keystoretype"}},[e._v("#")]),e._v(" "),r("code",[e._v("keyStoreType")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("The default keystore type.\nThe type needs to be implemented by some security provider which is installed in the JRE.")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[e._v("The name of a\n"),r("a",{attrs:{href:"https://docs.oracle.com/en/java/javase/14/docs/specs/security/standard-names.html#keystore-types",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("KeyStore")]),e._v(" type"),r("OutboundLink")],1),e._v(":")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("DKS")])]),e._v(" "),r("li",[r("code",[e._v("JCEKS")])]),e._v(" "),r("li",[r("code",[e._v("JKS")])]),e._v(" "),r("li",[r("code",[e._v("PKCS11")])]),e._v(" "),r("li",[r("code",[e._v("PKCS12")])])])]),e._v(" "),r("dt",[r("strong",[e._v("Default Value")])]),e._v(" "),r("dd",[r("p",[e._v("If the property "),r("a",{attrs:{href:"#licensekeyformat"}},[e._v("licenseKeyFormat")]),e._v(" is set to "),r("code",[e._v("V1")]),e._v(", then this property gets set to "),r("code",[e._v("JKS")]),e._v(",\nor else if the property "),r("a",{attrs:{href:"#licensekeyformat"}},[e._v("licenseKeyFormat")]),e._v(" starts with "),r("code",[e._v("V2/")]),e._v(", then it gets set to "),r("code",[e._v("JCEKS")]),e._v(",\nor else to "),r("code",[e._v("PKCS12")]),e._v(".")])])]),e._v(" "),r("h3",{attrs:{id:"licensekeyformat"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#licensekeyformat"}},[e._v("#")]),e._v(" "),r("code",[e._v("licenseKeyFormat")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("The format of the license keys.\nEnter "),r("code",[e._v("V4")]),e._v(" to benefit from the latest cryptographic standards.\nIt was introduced in TrueLicense 4 and depends on the Jackson JSON Processor.\nEnter "),r("code",[e._v("V2/JSON")]),e._v(" only if you need to retain compatibility with this license key format.\nIt was introduced in TrueLicense 2 and depends on the Jackson JSON Processor.\nEnter "),r("code",[e._v("V2/XML")]),e._v(" only if you need to retain compatibility with this license key format.\nIt was introduced in TrueLicense 2 and depends on the JAXB API and runtime.\nEnter "),r("code",[e._v("V1")]),e._v(" only if you need to retain compatibility with this license key format.\nIt was introduced in TrueLicense 1.")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[e._v("One of:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("V1")])]),e._v(" "),r("li",[r("code",[e._v("V2/XML")])]),e._v(" "),r("li",[r("code",[e._v("V2/JSON")])]),e._v(" "),r("li",[r("code",[e._v("V4")])])])]),e._v(" "),r("dt",[r("strong",[e._v("Default Value")])]),e._v(" "),r("dd",[r("p",[r("code",[e._v("V4")])])])]),e._v(" "),r("h3",{attrs:{id:"package"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#package"}},[e._v("#")]),e._v(" "),r("code",[e._v("package")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("The base package name of the generated project.\nIt's best practice evaluating the expression "),r("code",[e._v("${groupId}")]),e._v(" or "),r("code",[e._v("${groupId}.${artifactId}")]),e._v(" if this results in a valid\npackage name.")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[r("a",{attrs:{href:"https://www.w3.org/TR/xmlschema-2/#token",target:"_blank",rel:"noopener noreferrer"}},[e._v("token"),r("OutboundLink")],1)])]),e._v(" "),r("dt",[r("strong",[e._v("Default Value")])]),e._v(" "),r("dd",[r("p",[e._v("The value of the property "),r("a",{attrs:{href:"#groupid"}},[e._v("groupId")]),e._v(".")])])]),e._v(" "),r("h3",{attrs:{id:"pbealgorithm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pbealgorithm"}},[e._v("#")]),e._v(" "),r("code",[e._v("pbeAlgorithm")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("The algorithm for the password based encryption.\nThe algorithm needs to be implemented by some security provider which is installed in the JRE.")])]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[e._v("The name of a\n"),r("a",{attrs:{href:"https://docs.oracle.com/en/java/javase/14/docs/specs/security/standard-names.html#cipher-algorithm-names",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("Cipher")]),e._v(" algorithm"),r("OutboundLink")],1),e._v(":")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("PBEWithMD5AndDES")])]),e._v(" "),r("li",[r("code",[e._v("PBEWithMD5AndTripleDES")])]),e._v(" "),r("li",[r("code",[e._v("PBEWithSHA1AndDESede")])]),e._v(" "),r("li",[r("code",[e._v("PBEWithSHA1AndRC2_40")])]),e._v(" "),r("li",[r("code",[e._v("PBEWithSHA1AndRC2_128")])]),e._v(" "),r("li",[r("code",[e._v("PBEWithSHA1AndRC4_40")])]),e._v(" "),r("li",[r("code",[e._v("PBEWithSHA1AndRC4_128")])]),e._v(" "),r("li",[r("code",[e._v("PBEWithHmacSHA1AndAES_128")])]),e._v(" "),r("li",[r("code",[e._v("PBEWithHmacSHA224AndAES_128")])]),e._v(" "),r("li",[r("code",[e._v("PBEWithHmacSHA256AndAES_128")])]),e._v(" "),r("li",[r("code",[e._v("PBEWithHmacSHA384AndAES_128")])]),e._v(" "),r("li",[r("code",[e._v("PBEWithHmacSHA512AndAES_128")])]),e._v(" "),r("li",[r("code",[e._v("PBEWithHmacSHA1AndAES_256")])]),e._v(" "),r("li",[r("code",[e._v("PBEWithHmacSHA224AndAES_256")])]),e._v(" "),r("li",[r("code",[e._v("PBEWithHmacSHA256AndAES_256")])]),e._v(" "),r("li",[r("code",[e._v("PBEWithHmacSHA384AndAES_256")])]),e._v(" "),r("li",[r("code",[e._v("PBEWithHmacSHA512AndAES_256")])])])]),e._v(" "),r("dt",[r("strong",[e._v("Default Value")])]),e._v(" "),r("dd",[r("p",[e._v("If the property "),r("a",{attrs:{href:"#licensekeyformat"}},[e._v("licenseKeyFormat")]),e._v(" is set to "),r("code",[e._v("V1")]),e._v(", then this property gets set to\n"),r("code",[e._v("PBEWithMD5AndDES")]),e._v(", or else if the property "),r("a",{attrs:{href:"#licensekeyformat"}},[e._v("licenseKeyFormat")]),e._v(" starts with "),r("code",[e._v("V2/")]),e._v(", then it gets\nset to "),r("code",[e._v("PBEWithSHA1AndDESede")]),e._v(", or else to "),r("code",[e._v("PBEWithHmacSHA256AndAES_128")]),e._v(".")])])]),e._v(" "),r("h3",{attrs:{id:"preferencestype"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#preferencestype"}},[e._v("#")]),e._v(" "),r("code",[e._v("preferencesType")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("The type of the preferences nodes where to install license keys.\nNote that "),r("code",[e._v("system")]),e._v(" generally requires the JVM to be run with administrator privileges or otherwise a\n"),r("code",[e._v("java.util.prefs.BackingStoreException")]),e._v(" may get thrown by the generated integration tests.")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[e._v("One of:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("system")])]),e._v(" "),r("li",[r("code",[e._v("user")])])])]),e._v(" "),r("dt",[r("strong",[e._v("Default Value")])]),e._v(" "),r("dd",[r("p",[r("code",[e._v("user")])])])]),e._v(" "),r("h3",{attrs:{id:"privatekeystorefile"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#privatekeystorefile"}},[e._v("#")]),e._v(" "),r("code",[e._v("privateKeyStoreFile")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("The path of the private keystore file in the Key Generator module relative to the base path\n"),r("code",[e._v("keygen/src/main/resources/")]),e._v(".")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[r("a",{attrs:{href:"https://www.w3.org/TR/xmlschema-2/#token",target:"_blank",rel:"noopener noreferrer"}},[e._v("token"),r("OutboundLink")],1)])]),e._v(" "),r("dt",[r("strong",[e._v("Default Value")])]),e._v(" "),r("dd",[r("p",[r("code",[e._v("private.ks")])])])]),e._v(" "),r("h3",{attrs:{id:"publickeystorefile"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#publickeystorefile"}},[e._v("#")]),e._v(" "),r("code",[e._v("publicKeyStoreFile")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("The path of the public keystore file in the Key Manager module relative to the base path\n"),r("code",[e._v("keymgr/src/main/resources/")]),e._v(".")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[r("a",{attrs:{href:"https://www.w3.org/TR/xmlschema-2/#token",target:"_blank",rel:"noopener noreferrer"}},[e._v("token"),r("OutboundLink")],1)])]),e._v(" "),r("dt",[r("strong",[e._v("Default Value")])]),e._v(" "),r("dd",[r("p",[r("code",[e._v("public.ks")])])])]),e._v(" "),r("h3",{attrs:{id:"signaturealgorithm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#signaturealgorithm"}},[e._v("#")]),e._v(" "),r("code",[e._v("signatureAlgorithm")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("The algorithm to use when signing a generated key pair in a keystore file at the first build.\nThis property gets ignored if the keystore file already exists.\nThe signature algorithm needs to correspond to the property "),r("a",{attrs:{href:"#keypairalgorithm"}},[e._v("keyPairAlgorithm")]),e._v(" and be implemented\nby some security provider which is installed in the JRE.")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[e._v("The name of a\n"),r("a",{attrs:{href:"https://docs.oracle.com/en/java/javase/14/docs/specs/security/standard-names.html#signature-algorithms",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("Signature")]),e._v(" algorithm"),r("OutboundLink")],1),e._v(":")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("NONEwithDSA")])]),e._v(" "),r("li",[r("code",[e._v("SHA1withDSA")])]),e._v(" "),r("li",[r("code",[e._v("SHA224withDSA")])]),e._v(" "),r("li",[r("code",[e._v("SHA256withDSA")])]),e._v(" "),r("li",[r("code",[e._v("SHA384withDSA")])]),e._v(" "),r("li",[r("code",[e._v("SHA512withDSA")])]),e._v(" "),r("li",[r("code",[e._v("SHA3-224withDSA")])]),e._v(" "),r("li",[r("code",[e._v("SHA3-256withDSA")])]),e._v(" "),r("li",[r("code",[e._v("SHA3-384withDSA")])]),e._v(" "),r("li",[r("code",[e._v("SHA3-512withDSA")])]),e._v(" "),r("li",[r("code",[e._v("NONEwithDSAinP1363Format")])]),e._v(" "),r("li",[r("code",[e._v("SHA1withDSAinP1363Format")])]),e._v(" "),r("li",[r("code",[e._v("SHA224withDSAinP1363Format")])]),e._v(" "),r("li",[r("code",[e._v("SHA256withDSAinP1363Format")])]),e._v(" "),r("li",[r("code",[e._v("NONEwithECDSA")])]),e._v(" "),r("li",[r("code",[e._v("SHA1withECDSA")])]),e._v(" "),r("li",[r("code",[e._v("SHA224withECDSA")])]),e._v(" "),r("li",[r("code",[e._v("SHA256withECDSA")])]),e._v(" "),r("li",[r("code",[e._v("SHA384withECDSA")])]),e._v(" "),r("li",[r("code",[e._v("SHA512withECDSA")])]),e._v(" "),r("li",[r("code",[e._v("SHA3-224withECDSA")])]),e._v(" "),r("li",[r("code",[e._v("SHA3-256withECDSA")])]),e._v(" "),r("li",[r("code",[e._v("SHA3-384withECDSA")])]),e._v(" "),r("li",[r("code",[e._v("SHA3-512withECDSA")])]),e._v(" "),r("li",[r("code",[e._v("NONEwithECDSAinP1363Format")])]),e._v(" "),r("li",[r("code",[e._v("SHA1withECDSAinP1363Format")])]),e._v(" "),r("li",[r("code",[e._v("SHA224withECDSAinP1363Format")])]),e._v(" "),r("li",[r("code",[e._v("SHA256withECDSAinP1363Format")])]),e._v(" "),r("li",[r("code",[e._v("SHA384withECDSAinP1363Format")])]),e._v(" "),r("li",[r("code",[e._v("SHA512withECDSAinP1363Format")])]),e._v(" "),r("li",[r("code",[e._v("NONEwithRSA")])]),e._v(" "),r("li",[r("code",[e._v("MD2withRSA")])]),e._v(" "),r("li",[r("code",[e._v("MD5withRSA")])]),e._v(" "),r("li",[r("code",[e._v("SHA1withRSA")])]),e._v(" "),r("li",[r("code",[e._v("SHA224withRSA")])]),e._v(" "),r("li",[r("code",[e._v("SHA256withRSA")])]),e._v(" "),r("li",[r("code",[e._v("SHA384withRSA")])]),e._v(" "),r("li",[r("code",[e._v("SHA512withRSA")])]),e._v(" "),r("li",[r("code",[e._v("SHA512/224withRSA")])]),e._v(" "),r("li",[r("code",[e._v("SHA512/256withRSA")])]),e._v(" "),r("li",[r("code",[e._v("SHA3-224withRSA")])]),e._v(" "),r("li",[r("code",[e._v("SHA3-256withRSA")])]),e._v(" "),r("li",[r("code",[e._v("SHA3-384withRSA")])]),e._v(" "),r("li",[r("code",[e._v("SHA3-512withRSA")])]),e._v(" "),r("li",[r("code",[e._v("RSASSA-PSS")])])])]),e._v(" "),r("dt",[r("strong",[e._v("Default Value")])]),e._v(" "),r("dd",[r("p",[e._v("The property value gets determined by the keytool.")])])]),e._v(" "),r("h3",{attrs:{id:"truelicenseversion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#truelicenseversion"}},[e._v("#")]),e._v(" "),r("code",[e._v("trueLicenseVersion")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("The TrueLicense version to use.")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[r("a",{attrs:{href:"https://www.w3.org/TR/xmlschema-2/#token",target:"_blank",rel:"noopener noreferrer"}},[e._v("token"),r("OutboundLink")],1)])]),e._v(" "),r("dt",[r("strong",[e._v("Default Value")])]),e._v(" "),r("dd",[r("p",[e._v("The version of the latest release as of the release date of the TrueLicense Maven Archetype.")])])]),e._v(" "),r("h3",{attrs:{id:"verbosecli"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#verbosecli"}},[e._v("#")]),e._v(" "),r("code",[e._v("verboseCli")])]),e._v(" "),r("dl",[r("dt",[r("strong",[e._v("Description")])]),e._v(" "),r("dd",[r("p",[e._v("Whether the command line interface (CLI) should write debugging information to the standard error stream by default\nor not.")]),e._v(" "),r("p")]),e._v(" "),r("dt",[r("strong",[e._v("Type")])]),e._v(" "),r("dd",[r("p",[r("a",{attrs:{href:"https://www.w3.org/TR/xmlschema-2/#boolean",target:"_blank",rel:"noopener noreferrer"}},[e._v("boolean"),r("OutboundLink")],1)])]),e._v(" "),r("dt",[r("strong",[e._v("Default Value")])]),e._v(" "),r("dd",[r("p",[r("code",[e._v("false")])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);