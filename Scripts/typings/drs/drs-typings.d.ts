
 /// <reference path="drs-typings-enums.ts" />

declare module DRS.Data {
    interface CustomerInterface {
        InterfaceId: string;
        InterfaceName: string;
    }
}

declare module DRS.Core.ReportDefinitions.Responses {
	interface ReportSummaryResponse {
		Items: System.Collections.Generic.KeyValuePair<string, string>[][];
		Count: number;
	}
	interface FtfKbSummaryResponse {
		PkgAdd: string;
		TitlesRemoved: string;
		TitlesAdded: string;
		StartDate: Date;
		EndDate: Date;
	}
	interface CustomerDetailsResponse {
		IsConsortia: boolean;
		Name: string;
	}
	interface DateRangeResponse {
		StartDate: Date;
		EndDate: Date;
	}
	interface SubscriptionsResponse {
		Items: System.Collections.Generic.KeyValuePair<string, string>[][];
		Count: number;
	}
	interface KeyValuePairResponse {
		Items: DRS.Core.ReportDefinitions.Responses.Item[];
		Count: number;
	}
	interface Item {
		Value: string;
		Key: string;
	}
	interface MonthYearResponse {
		StartDate: Date;
		EndDate: Date;
	}
	interface SitesResponse {
		Items: System.Collections.Generic.KeyValuePair<string, string>[][];
		Count: number;
	}
}
declare module System.Collections.Generic {
	interface KeyValuePair<TKey, TValue> {
		Key: TKey;
		Value: TValue;
	}
}
declare module DRS.Web.Controllers {
	interface SearchTermsController extends DRS.Web.Controllers.BaseController {
	}
	interface BaseController extends System.Web.Mvc.Controller {
		BreadCrumbPrevious: DRS.Core.UI.BreadCrumb;
	}
}
declare module System.Web.Mvc {
	interface Controller extends System.Web.Mvc.ControllerBase {
		Resolver: System.Web.Mvc.IDependencyResolver;
		AsyncManager: System.Web.Mvc.Async.AsyncManager;
		ActionInvoker: System.Web.Mvc.IActionInvoker;
		HttpContext: System.Web.HttpContextBase;
		ModelState: System.Collections.Generic.KeyValuePair<string, System.Web.Mvc.ModelState>[];
		Profile: System.Web.Profile.ProfileBase;
		Request: System.Web.HttpRequestBase;
		Response: System.Web.HttpResponseBase;
		RouteData: System.Web.Routing.RouteData;
		Server: System.Web.HttpServerUtilityBase;
		Session: any;
		TempDataProvider: System.Web.Mvc.ITempDataProvider;
		Url: System.Web.Mvc.UrlHelper;
		User: System.Security.Principal.IPrincipal;
		ViewEngineCollection: System.Web.Mvc.IViewEngine[];
	}
	interface ControllerBase {
		ControllerContext: System.Web.Mvc.ControllerContext;
		TempData: System.Collections.Generic.KeyValuePair<string, any>[];
		ValidateRequest: boolean;
		ValueProvider: System.Web.Mvc.IValueProvider;
		ViewBag: any;
		ViewData: System.Collections.Generic.KeyValuePair<string, any>[];
	}
	interface ControllerContext {
		Controller: System.Web.Mvc.ControllerBase;
		DisplayMode: System.Web.WebPages.IDisplayMode;
		HttpContext: System.Web.HttpContextBase;
		IsChildAction: boolean;
		ParentActionViewContext: System.Web.Mvc.ViewContext;
		RequestContext: System.Web.Routing.RequestContext;
		RouteData: System.Web.Routing.RouteData;
	}
	interface ViewContext extends System.Web.Mvc.ControllerContext {
		ClientValidationEnabled: boolean;
		FormContext: System.Web.Mvc.FormContext;
		TempData: System.Collections.Generic.KeyValuePair<string, any>[];
		UnobtrusiveJavaScriptEnabled: boolean;
		ValidationSummaryMessageElement: string;
		ValidationMessageElement: string;
		View: System.Web.Mvc.IView;
		ViewBag: any;
		ViewData: System.Collections.Generic.KeyValuePair<string, any>[];
		Writer: System.IO.TextWriter;
	}
	interface FormContext {
		FieldValidators: System.Collections.Generic.KeyValuePair<string, System.Web.Mvc.FieldValidationMetadata>[];
		FormId: string;
		ReplaceValidationSummary: boolean;
		ValidationSummaryId: string;
	}
	interface FieldValidationMetadata {
		FieldName: string;
		ReplaceValidationMessageContents: boolean;
		ValidationMessageId: string;
		ValidationRules: System.Web.Mvc.ModelClientValidationRule[];
	}
	interface ModelClientValidationRule {
		ErrorMessage: string;
		ValidationParameters: System.Collections.Generic.KeyValuePair<string, any>[];
		ValidationType: string;
	}
	interface IView {
	}
	interface IValueProvider {
	}
	interface IDependencyResolver {
	}
	interface IActionInvoker {
	}
	interface ModelState {
		Value: System.Web.Mvc.ValueProviderResult;
		Errors: System.Web.Mvc.ModelError[];
	}
	interface ValueProviderResult {
		AttemptedValue: string;
		Culture: System.Globalization.CultureInfo;
		RawValue: any;
	}
	interface ModelError {
		Exception: System.Exception;
		ErrorMessage: string;
	}
	interface ITempDataProvider {
	}
	interface UrlHelper {
		RequestContext: System.Web.Routing.RequestContext;
		RouteCollection: System.Web.Routing.RouteBase[];
	}
	interface IViewEngine {
	}
}
declare module System.Web.WebPages {
	interface IDisplayMode {
		DisplayModeId: string;
	}
}
declare module System.Web {
	interface HttpContextBase {
		AllErrors: System.Exception[];
		AllowAsyncDuringSyncStages: boolean;
		Application: any;
		ApplicationInstance: System.Web.HttpApplication;
		AsyncPreloadMode: System.Web.Configuration.AsyncPreloadModeFlags;
		Cache: any;
		CurrentHandler: System.Web.IHttpHandler;
		CurrentNotification: System.Web.RequestNotification;
		Error: System.Exception;
		Handler: System.Web.IHttpHandler;
		IsCustomErrorEnabled: boolean;
		IsDebuggingEnabled: boolean;
		IsPostNotification: boolean;
		IsWebSocketRequest: boolean;
		IsWebSocketRequestUpgrading: boolean;
		Items: any;
		PageInstrumentation: System.Web.Instrumentation.PageInstrumentationService;
		PreviousHandler: System.Web.IHttpHandler;
		Profile: System.Web.Profile.ProfileBase;
		Request: System.Web.HttpRequestBase;
		Response: System.Web.HttpResponseBase;
		Server: System.Web.HttpServerUtilityBase;
		Session: any;
		SkipAuthorization: boolean;
		Timestamp: Date;
		ThreadAbortOnTimeout: boolean;
		Trace: System.Web.TraceContext;
		User: System.Security.Principal.IPrincipal;
		WebSocketNegotiatedProtocol: string;
		WebSocketRequestedProtocols: string[];
	}
	interface HttpApplication {
		Context: System.Web.HttpContext;
		Request: System.Web.HttpRequest;
		Response: System.Web.HttpResponse;
		Session: any;
		Application: any;
		Server: System.Web.HttpServerUtility;
		User: System.Security.Principal.IPrincipal;
		Modules: any;
		Site: System.ComponentModel.ISite;
	}
	interface HttpContext {
		IsWebSocketRequest: boolean;
		IsWebSocketRequestUpgrading: boolean;
		WebSocketRequestedProtocols: string[];
		WebSocketNegotiatedProtocol: string;
		Current: System.Web.HttpContext;
		AsyncPreloadMode: System.Web.Configuration.AsyncPreloadModeFlags;
		AllowAsyncDuringSyncStages: boolean;
		ApplicationInstance: System.Web.HttpApplication;
		Application: any;
		Handler: System.Web.IHttpHandler;
		PreviousHandler: System.Web.IHttpHandler;
		CurrentHandler: System.Web.IHttpHandler;
		Request: System.Web.HttpRequest;
		Response: System.Web.HttpResponse;
		Trace: System.Web.TraceContext;
		Items: any;
		Session: any;
		Server: System.Web.HttpServerUtility;
		Error: System.Exception;
		AllErrors: System.Exception[];
		User: System.Security.Principal.IPrincipal;
		Profile: System.Web.Profile.ProfileBase;
		SkipAuthorization: boolean;
		IsDebuggingEnabled: boolean;
		IsCustomErrorEnabled: boolean;
		Timestamp: Date;
		Cache: any;
		PageInstrumentation: System.Web.Instrumentation.PageInstrumentationService;
		ThreadAbortOnTimeout: boolean;
		CurrentNotification: System.Web.RequestNotification;
		IsPostNotification: boolean;
	}
	interface IHttpHandler {
		IsReusable: boolean;
	}
	interface HttpRequest {
		RequestContext: System.Web.Routing.RequestContext;
		IsLocal: boolean;
		HttpMethod: string;
		RequestType: string;
		ContentType: string;
		ContentLength: number;
		ContentEncoding: System.Text.Encoding;
		AcceptTypes: string[];
		IsAuthenticated: boolean;
		IsSecureConnection: boolean;
		Path: string;
		AnonymousID: string;
		FilePath: string;
		CurrentExecutionFilePath: string;
		CurrentExecutionFilePathExtension: string;
		AppRelativeCurrentExecutionFilePath: string;
		PathInfo: string;
		PhysicalPath: string;
		ApplicationPath: string;
		PhysicalApplicationPath: string;
		UserAgent: string;
		UserLanguages: string[];
		Browser: System.Web.HttpBrowserCapabilities;
		UserHostName: string;
		UserHostAddress: string;
		RawUrl: string;
		Url: System.Uri;
		UrlReferrer: System.Uri;
		Params: any;
		Item: string;
		QueryString: any;
		Form: any;
		Headers: any;
		Unvalidated: System.Web.UnvalidatedRequestValues;
		ServerVariables: any;
		Cookies: any;
		Files: any;
		InputStream: System.IO.Stream;
		TotalBytes: number;
		Filter: System.IO.Stream;
		ClientCertificate: any;
		LogonUserIdentity: System.Security.Principal.WindowsIdentity;
		HttpChannelBinding: System.Security.Authentication.ExtendedProtection.ChannelBinding;
		TlsTokenBindingInfo: System.Web.ITlsTokenBindingInfo;
		ReadEntityBodyMode: System.Web.ReadEntityBodyMode;
		TimedOutToken: System.Threading.CancellationToken;
	}
	interface HttpBrowserCapabilities extends System.Web.Configuration.HttpCapabilitiesBase {
	}
	interface UnvalidatedRequestValues {
		Form: any;
		QueryString: any;
		Headers: any;
		Cookies: any;
		Files: any;
		RawUrl: string;
		Path: string;
		PathInfo: string;
		Item: string;
		Url: System.Uri;
	}
	interface ITlsTokenBindingInfo {
	}
	interface HttpResponse {
		HeadersWritten: boolean;
		SupportsAsyncFlush: boolean;
		Cookies: any;
		Headers: any;
		StatusCode: number;
		SubStatusCode: number;
		StatusDescription: string;
		TrySkipIisCustomErrors: boolean;
		SuppressFormsAuthenticationRedirect: boolean;
		SuppressDefaultCacheControlHeader: boolean;
		BufferOutput: boolean;
		ContentType: string;
		Charset: string;
		ContentEncoding: System.Text.Encoding;
		HeaderEncoding: System.Text.Encoding;
		Cache: System.Web.HttpCachePolicy;
		IsClientConnected: boolean;
		ClientDisconnectedToken: System.Threading.CancellationToken;
		IsRequestBeingRedirected: boolean;
		RedirectLocation: string;
		Output: System.IO.TextWriter;
		OutputStream: System.IO.Stream;
		Filter: System.IO.Stream;
		SuppressContent: boolean;
		Status: string;
		Buffer: boolean;
		Expires: number;
		ExpiresAbsolute: Date;
		CacheControl: string;
	}
	interface HttpCachePolicy {
		VaryByContentEncodings: System.Web.HttpCacheVaryByContentEncodings;
		VaryByHeaders: System.Web.HttpCacheVaryByHeaders;
		VaryByParams: System.Web.HttpCacheVaryByParams;
	}
	interface HttpCacheVaryByContentEncodings {
		Item: boolean;
	}
	interface HttpCacheVaryByHeaders {
		AcceptTypes: boolean;
		UserLanguage: boolean;
		UserAgent: boolean;
		UserCharSet: boolean;
		Item: boolean;
	}
	interface HttpCacheVaryByParams {
		Item: boolean;
		IgnoreParams: boolean;
	}
	interface TraceContext {
		TraceMode: System.Web.TraceMode;
		IsEnabled: boolean;
	}
	interface HttpServerUtility {
		MachineName: string;
		ScriptTimeout: number;
	}
	interface HttpRequestBase {
		AcceptTypes: string[];
		ApplicationPath: string;
		AnonymousID: string;
		AppRelativeCurrentExecutionFilePath: string;
		Browser: System.Web.HttpBrowserCapabilitiesBase;
		HttpChannelBinding: System.Security.Authentication.ExtendedProtection.ChannelBinding;
		ClientCertificate: any;
		ContentEncoding: System.Text.Encoding;
		ContentLength: number;
		ContentType: string;
		Cookies: any;
		CurrentExecutionFilePath: string;
		CurrentExecutionFilePathExtension: string;
		FilePath: string;
		Files: any;
		Filter: System.IO.Stream;
		Form: any;
		HttpMethod: string;
		InputStream: System.IO.Stream;
		IsAuthenticated: boolean;
		IsLocal: boolean;
		IsSecureConnection: boolean;
		LogonUserIdentity: System.Security.Principal.WindowsIdentity;
		Params: any;
		Path: string;
		PathInfo: string;
		PhysicalApplicationPath: string;
		PhysicalPath: string;
		RawUrl: string;
		ReadEntityBodyMode: System.Web.ReadEntityBodyMode;
		RequestContext: System.Web.Routing.RequestContext;
		RequestType: string;
		ServerVariables: any;
		TimedOutToken: System.Threading.CancellationToken;
		TlsTokenBindingInfo: System.Web.ITlsTokenBindingInfo;
		TotalBytes: number;
		Unvalidated: System.Web.UnvalidatedRequestValuesBase;
		Url: System.Uri;
		UrlReferrer: System.Uri;
		UserAgent: string;
		UserLanguages: string[];
		UserHostAddress: string;
		UserHostName: string;
		Headers: any;
		QueryString: any;
		Item: string;
	}
	interface HttpBrowserCapabilitiesBase {
		ActiveXControls: boolean;
		Adapters: any;
		AOL: boolean;
		BackgroundSounds: boolean;
		Beta: boolean;
		Browser: string;
		Browsers: any;
		CanCombineFormsInDeck: boolean;
		CanInitiateVoiceCall: boolean;
		CanRenderAfterInputOrSelectElement: boolean;
		CanRenderEmptySelects: boolean;
		CanRenderInputAndSelectElementsTogether: boolean;
		CanRenderMixedSelects: boolean;
		CanRenderOneventAndPrevElementsTogether: boolean;
		CanRenderPostBackCards: boolean;
		CanRenderSetvarZeroWithMultiSelectionList: boolean;
		CanSendMail: boolean;
		Capabilities: any;
		CDF: boolean;
		ClrVersion: System.Version;
		Cookies: boolean;
		Crawler: boolean;
		DefaultSubmitButtonLimit: number;
		EcmaScriptVersion: System.Version;
		Frames: boolean;
		GatewayMajorVersion: number;
		GatewayMinorVersion: number;
		GatewayVersion: string;
		HasBackButton: boolean;
		HidesRightAlignedMultiselectScrollbars: boolean;
		HtmlTextWriter: string;
		Id: string;
		InputType: string;
		IsColor: boolean;
		IsMobileDevice: boolean;
		JavaApplets: boolean;
		JScriptVersion: System.Version;
		MajorVersion: number;
		MaximumHrefLength: number;
		MaximumRenderedPageSize: number;
		MaximumSoftkeyLabelLength: number;
		MinorVersion: number;
		MinorVersionString: string;
		MobileDeviceManufacturer: string;
		MobileDeviceModel: string;
		MSDomVersion: System.Version;
		NumberOfSoftkeys: number;
		Platform: string;
		PreferredImageMime: string;
		PreferredRenderingMime: string;
		PreferredRenderingType: string;
		PreferredRequestEncoding: string;
		PreferredResponseEncoding: string;
		RendersBreakBeforeWmlSelectAndInput: boolean;
		RendersBreaksAfterHtmlLists: boolean;
		RendersBreaksAfterWmlAnchor: boolean;
		RendersBreaksAfterWmlInput: boolean;
		RendersWmlDoAcceptsInline: boolean;
		RendersWmlSelectsAsMenuCards: boolean;
		RequiredMetaTagNameValue: string;
		RequiresAttributeColonSubstitution: boolean;
		RequiresContentTypeMetaTag: boolean;
		RequiresControlStateInSession: boolean;
		RequiresDBCSCharacter: boolean;
		RequiresHtmlAdaptiveErrorReporting: boolean;
		RequiresLeadingPageBreak: boolean;
		RequiresNoBreakInFormatting: boolean;
		RequiresOutputOptimization: boolean;
		RequiresPhoneNumbersAsPlainText: boolean;
		RequiresSpecialViewStateEncoding: boolean;
		RequiresUniqueFilePathSuffix: boolean;
		RequiresUniqueHtmlCheckboxNames: boolean;
		RequiresUniqueHtmlInputNames: boolean;
		RequiresUrlEncodedPostfieldValues: boolean;
		ScreenBitDepth: number;
		ScreenCharactersHeight: number;
		ScreenCharactersWidth: number;
		ScreenPixelsHeight: number;
		ScreenPixelsWidth: number;
		SupportsAccesskeyAttribute: boolean;
		SupportsBodyColor: boolean;
		SupportsBold: boolean;
		SupportsCacheControlMetaTag: boolean;
		SupportsCallback: boolean;
		SupportsCss: boolean;
		SupportsDivAlign: boolean;
		SupportsDivNoWrap: boolean;
		SupportsEmptyStringInCookieValue: boolean;
		SupportsFontColor: boolean;
		SupportsFontName: boolean;
		SupportsFontSize: boolean;
		SupportsImageSubmit: boolean;
		SupportsIModeSymbols: boolean;
		SupportsInputIStyle: boolean;
		SupportsInputMode: boolean;
		SupportsItalic: boolean;
		SupportsJPhoneMultiMediaAttributes: boolean;
		SupportsJPhoneSymbols: boolean;
		SupportsQueryStringInFormAction: boolean;
		SupportsRedirectWithCookie: boolean;
		SupportsSelectMultiple: boolean;
		SupportsUncheck: boolean;
		SupportsXmlHttp: boolean;
		Tables: boolean;
		TagWriter: System.Type;
		Type: string;
		UseOptimizedCacheKey: boolean;
		VBScript: boolean;
		Version: string;
		W3CDomVersion: System.Version;
		Win16: boolean;
		Win32: boolean;
		Item: string;
	}
	interface UnvalidatedRequestValuesBase {
		Form: any;
		QueryString: any;
		Headers: any;
		Cookies: any;
		Files: any;
		RawUrl: string;
		Path: string;
		PathInfo: string;
		Item: string;
		Url: System.Uri;
	}
	interface HttpResponseBase {
		Buffer: boolean;
		BufferOutput: boolean;
		Cache: System.Web.HttpCachePolicyBase;
		CacheControl: string;
		Charset: string;
		ClientDisconnectedToken: System.Threading.CancellationToken;
		ContentEncoding: System.Text.Encoding;
		ContentType: string;
		Cookies: any;
		Expires: number;
		ExpiresAbsolute: Date;
		Filter: System.IO.Stream;
		Headers: any;
		HeadersWritten: boolean;
		HeaderEncoding: System.Text.Encoding;
		IsClientConnected: boolean;
		IsRequestBeingRedirected: boolean;
		Output: System.IO.TextWriter;
		OutputStream: System.IO.Stream;
		RedirectLocation: string;
		Status: string;
		StatusCode: number;
		StatusDescription: string;
		SubStatusCode: number;
		SupportsAsyncFlush: boolean;
		SuppressContent: boolean;
		SuppressDefaultCacheControlHeader: boolean;
		SuppressFormsAuthenticationRedirect: boolean;
		TrySkipIisCustomErrors: boolean;
	}
	interface HttpCachePolicyBase {
		VaryByContentEncodings: System.Web.HttpCacheVaryByContentEncodings;
		VaryByHeaders: System.Web.HttpCacheVaryByHeaders;
		VaryByParams: System.Web.HttpCacheVaryByParams;
	}
	interface HttpServerUtilityBase {
		MachineName: string;
		ScriptTimeout: number;
	}
}
declare module System {
	interface Exception {
		Data: any;
		Message: string;
		InnerException: System.Exception;
		TargetSite: System.Reflection.MethodBase;
		StackTrace: string;
		HelpLink: string;
		Source: string;
		HResult: number;
	}
	interface Type extends System.Reflection.MemberInfo {
		MemberType: System.Reflection.MemberTypes;
		DeclaringType: System.Type;
		DeclaringMethod: System.Reflection.MethodBase;
		ReflectedType: System.Type;
		StructLayoutAttribute: System.Runtime.InteropServices.StructLayoutAttribute;
		GUID: System.Guid;
		DefaultBinder: System.Reflection.Binder;
		Module: System.Reflection.Module;
		Assembly: System.Reflection.Assembly;
		TypeHandle: System.RuntimeTypeHandle;
		FullName: string;
		Namespace: string;
		AssemblyQualifiedName: string;
		BaseType: System.Type;
		TypeInitializer: System.Reflection.ConstructorInfo;
		IsNested: boolean;
		Attributes: System.Reflection.TypeAttributes;
		GenericParameterAttributes: System.Reflection.GenericParameterAttributes;
		IsVisible: boolean;
		IsNotPublic: boolean;
		IsPublic: boolean;
		IsNestedPublic: boolean;
		IsNestedPrivate: boolean;
		IsNestedFamily: boolean;
		IsNestedAssembly: boolean;
		IsNestedFamANDAssem: boolean;
		IsNestedFamORAssem: boolean;
		IsAutoLayout: boolean;
		IsLayoutSequential: boolean;
		IsExplicitLayout: boolean;
		IsClass: boolean;
		IsInterface: boolean;
		IsValueType: boolean;
		IsAbstract: boolean;
		IsSealed: boolean;
		IsEnum: boolean;
		IsSpecialName: boolean;
		IsImport: boolean;
		IsSerializable: boolean;
		IsAnsiClass: boolean;
		IsUnicodeClass: boolean;
		IsAutoClass: boolean;
		IsArray: boolean;
		IsGenericType: boolean;
		IsGenericTypeDefinition: boolean;
		IsConstructedGenericType: boolean;
		IsGenericParameter: boolean;
		GenericParameterPosition: number;
		ContainsGenericParameters: boolean;
		IsByRef: boolean;
		IsPointer: boolean;
		IsPrimitive: boolean;
		IsCOMObject: boolean;
		HasElementType: boolean;
		IsContextful: boolean;
		IsMarshalByRef: boolean;
		GenericTypeArguments: System.Type[];
		IsSecurityCritical: boolean;
		IsSecuritySafeCritical: boolean;
		IsSecurityTransparent: boolean;
		UnderlyingSystemType: System.Type;
	}
	interface Attribute {
		TypeId: any;
	}
	interface Guid {
	}
	interface RuntimeFieldHandle {
		Value: number;
	}
	interface ModuleHandle {
		MDStreamVersion: number;
	}
	interface RuntimeTypeHandle {
		Value: number;
	}
	interface RuntimeMethodHandle {
		Value: number;
	}
	interface Version {
		Major: number;
		Minor: number;
		Build: number;
		Revision: number;
		MajorRevision: number;
		MinorRevision: number;
	}
	interface Uri {
		AbsolutePath: string;
		AbsoluteUri: string;
		LocalPath: string;
		Authority: string;
		HostNameType: System.UriHostNameType;
		IsDefaultPort: boolean;
		IsFile: boolean;
		IsLoopback: boolean;
		PathAndQuery: string;
		Segments: string[];
		IsUnc: boolean;
		Host: string;
		Port: number;
		Query: string;
		Fragment: string;
		Scheme: string;
		OriginalString: string;
		DnsSafeHost: string;
		IdnHost: string;
		IsAbsoluteUri: boolean;
		UserEscaped: boolean;
		UserInfo: string;
	}
	interface MarshalByRefObject {
	}
	interface IFormatProvider {
	}
}
declare module System.Reflection {
	interface MethodBase extends System.Reflection.MemberInfo {
		MethodImplementationFlags: System.Reflection.MethodImplAttributes;
		MethodHandle: System.RuntimeMethodHandle;
		Attributes: System.Reflection.MethodAttributes;
		CallingConvention: System.Reflection.CallingConventions;
		IsGenericMethodDefinition: boolean;
		ContainsGenericParameters: boolean;
		IsGenericMethod: boolean;
		IsSecurityCritical: boolean;
		IsSecuritySafeCritical: boolean;
		IsSecurityTransparent: boolean;
		IsPublic: boolean;
		IsPrivate: boolean;
		IsFamily: boolean;
		IsAssembly: boolean;
		IsFamilyAndAssembly: boolean;
		IsFamilyOrAssembly: boolean;
		IsStatic: boolean;
		IsFinal: boolean;
		IsVirtual: boolean;
		IsHideBySig: boolean;
		IsAbstract: boolean;
		IsSpecialName: boolean;
		IsConstructor: boolean;
	}
	interface MemberInfo {
		MemberType: System.Reflection.MemberTypes;
		Name: string;
		DeclaringType: System.Type;
		ReflectedType: System.Type;
		CustomAttributes: System.Reflection.CustomAttributeData[];
		MetadataToken: number;
		Module: System.Reflection.Module;
	}
	interface Binder {
	}
	interface Module {
		CustomAttributes: System.Reflection.CustomAttributeData[];
		MDStreamVersion: number;
		FullyQualifiedName: string;
		ModuleVersionId: System.Guid;
		MetadataToken: number;
		ScopeName: string;
		Name: string;
		Assembly: System.Reflection.Assembly;
		ModuleHandle: System.ModuleHandle;
	}
	interface CustomAttributeData {
		AttributeType: System.Type;
		Constructor: System.Reflection.ConstructorInfo;
		ConstructorArguments: System.Reflection.CustomAttributeTypedArgument[];
		NamedArguments: System.Reflection.CustomAttributeNamedArgument[];
	}
	interface ConstructorInfo extends System.Reflection.MethodBase {
		MemberType: System.Reflection.MemberTypes;
	}
	interface CustomAttributeTypedArgument {
		ArgumentType: System.Type;
		Value: any;
	}
	interface CustomAttributeNamedArgument {
		MemberInfo: System.Reflection.MemberInfo;
		TypedValue: System.Reflection.CustomAttributeTypedArgument;
		MemberName: string;
		IsField: boolean;
	}
	interface Assembly {
		CodeBase: string;
		EscapedCodeBase: string;
		FullName: string;
		EntryPoint: System.Reflection.MethodInfo;
		ExportedTypes: System.Type[];
		DefinedTypes: System.Reflection.TypeInfo[];
		Evidence: any;
		PermissionSet: any;
		IsFullyTrusted: boolean;
		SecurityRuleSet: System.Security.SecurityRuleSet;
		ManifestModule: System.Reflection.Module;
		CustomAttributes: System.Reflection.CustomAttributeData[];
		ReflectionOnly: boolean;
		Modules: System.Reflection.Module[];
		Location: string;
		ImageRuntimeVersion: string;
		GlobalAssemblyCache: boolean;
		HostContext: number;
		IsDynamic: boolean;
	}
	interface MethodInfo extends System.Reflection.MethodBase {
		MemberType: System.Reflection.MemberTypes;
		ReturnType: System.Type;
		ReturnParameter: System.Reflection.ParameterInfo;
		ReturnTypeCustomAttributes: System.Reflection.ICustomAttributeProvider;
	}
	interface ParameterInfo {
		ParameterType: System.Type;
		Name: string;
		HasDefaultValue: boolean;
		DefaultValue: any;
		RawDefaultValue: any;
		Position: number;
		Attributes: System.Reflection.ParameterAttributes;
		Member: System.Reflection.MemberInfo;
		IsIn: boolean;
		IsOut: boolean;
		IsLcid: boolean;
		IsRetval: boolean;
		IsOptional: boolean;
		MetadataToken: number;
		CustomAttributes: System.Reflection.CustomAttributeData[];
	}
	interface ICustomAttributeProvider {
	}
	interface TypeInfo extends System.Type {
		GenericTypeParameters: System.Type[];
		DeclaredConstructors: System.Reflection.ConstructorInfo[];
		DeclaredEvents: System.Reflection.EventInfo[];
		DeclaredFields: System.Reflection.FieldInfo[];
		DeclaredMembers: System.Reflection.MemberInfo[];
		DeclaredMethods: System.Reflection.MethodInfo[];
		DeclaredNestedTypes: System.Reflection.TypeInfo[];
		DeclaredProperties: System.Reflection.PropertyInfo[];
		ImplementedInterfaces: System.Type[];
	}
	interface EventInfo extends System.Reflection.MemberInfo {
		MemberType: System.Reflection.MemberTypes;
		Attributes: System.Reflection.EventAttributes;
		AddMethod: System.Reflection.MethodInfo;
		RemoveMethod: System.Reflection.MethodInfo;
		RaiseMethod: System.Reflection.MethodInfo;
		EventHandlerType: System.Type;
		IsSpecialName: boolean;
		IsMulticast: boolean;
	}
	interface FieldInfo extends System.Reflection.MemberInfo {
		MemberType: System.Reflection.MemberTypes;
		FieldHandle: System.RuntimeFieldHandle;
		FieldType: System.Type;
		Attributes: System.Reflection.FieldAttributes;
		IsPublic: boolean;
		IsPrivate: boolean;
		IsFamily: boolean;
		IsAssembly: boolean;
		IsFamilyAndAssembly: boolean;
		IsFamilyOrAssembly: boolean;
		IsStatic: boolean;
		IsInitOnly: boolean;
		IsLiteral: boolean;
		IsNotSerialized: boolean;
		IsSpecialName: boolean;
		IsPinvokeImpl: boolean;
		IsSecurityCritical: boolean;
		IsSecuritySafeCritical: boolean;
		IsSecurityTransparent: boolean;
	}
	interface PropertyInfo extends System.Reflection.MemberInfo {
		MemberType: System.Reflection.MemberTypes;
		PropertyType: System.Type;
		Attributes: System.Reflection.PropertyAttributes;
		CanRead: boolean;
		CanWrite: boolean;
		GetMethod: System.Reflection.MethodInfo;
		SetMethod: System.Reflection.MethodInfo;
		IsSpecialName: boolean;
	}
}
declare module System.Runtime.InteropServices {
	interface StructLayoutAttribute extends System.Attribute {
		Value: System.Runtime.InteropServices.LayoutKind;
	}
	interface SafeHandle extends System.Runtime.ConstrainedExecution.CriticalFinalizerObject {
		IsClosed: boolean;
		IsInvalid: boolean;
	}
}
declare module System.Web.Routing {
	interface RequestContext {
		HttpContext: System.Web.HttpContextBase;
		RouteData: System.Web.Routing.RouteData;
	}
	interface RouteData {
		DataTokens: System.Collections.Generic.KeyValuePair<string, any>[];
		Route: System.Web.Routing.RouteBase;
		RouteHandler: System.Web.Routing.IRouteHandler;
		Values: System.Collections.Generic.KeyValuePair<string, any>[];
	}
	interface RouteBase {
		RouteExistingFiles: boolean;
	}
	interface IRouteHandler {
	}
}
declare module System.Text {
	interface Encoding {
		BodyName: string;
		EncodingName: string;
		HeaderName: string;
		WebName: string;
		WindowsCodePage: number;
		IsBrowserDisplay: boolean;
		IsBrowserSave: boolean;
		IsMailNewsDisplay: boolean;
		IsMailNewsSave: boolean;
		IsSingleByte: boolean;
		EncoderFallback: System.Text.EncoderFallback;
		DecoderFallback: System.Text.DecoderFallback;
		IsReadOnly: boolean;
		ASCII: System.Text.Encoding;
		CodePage: number;
		Default: System.Text.Encoding;
		Unicode: System.Text.Encoding;
		BigEndianUnicode: System.Text.Encoding;
		UTF7: System.Text.Encoding;
		UTF8: System.Text.Encoding;
		UTF32: System.Text.Encoding;
	}
	interface EncoderFallback {
		ReplacementFallback: System.Text.EncoderFallback;
		ExceptionFallback: System.Text.EncoderFallback;
		MaxCharCount: number;
	}
	interface DecoderFallback {
		ReplacementFallback: System.Text.DecoderFallback;
		ExceptionFallback: System.Text.DecoderFallback;
		MaxCharCount: number;
	}
}
declare module System.Web.Configuration {
	interface HttpCapabilitiesBase {
		BrowserCapabilitiesProvider: System.Web.Configuration.HttpCapabilitiesProvider;
		UseOptimizedCacheKey: boolean;
		Item: string;
		Capabilities: any;
		Adapters: any;
		HtmlTextWriter: string;
		Id: string;
		Browsers: any;
		ClrVersion: System.Version;
		Type: string;
		Browser: string;
		Version: string;
		MajorVersion: number;
		MinorVersionString: string;
		MinorVersion: number;
		Platform: string;
		TagWriter: System.Type;
		EcmaScriptVersion: System.Version;
		MSDomVersion: System.Version;
		W3CDomVersion: System.Version;
		Beta: boolean;
		Crawler: boolean;
		AOL: boolean;
		Win16: boolean;
		Win32: boolean;
		Frames: boolean;
		RequiresControlStateInSession: boolean;
		Tables: boolean;
		Cookies: boolean;
		VBScript: boolean;
		JavaScript: boolean;
		JavaApplets: boolean;
		JScriptVersion: System.Version;
		ActiveXControls: boolean;
		BackgroundSounds: boolean;
		CDF: boolean;
		MobileDeviceManufacturer: string;
		MobileDeviceModel: string;
		GatewayVersion: string;
		GatewayMajorVersion: number;
		GatewayMinorVersion: number;
		PreferredRenderingType: string;
		PreferredRequestEncoding: string;
		PreferredResponseEncoding: string;
		PreferredRenderingMime: string;
		PreferredImageMime: string;
		ScreenCharactersWidth: number;
		ScreenCharactersHeight: number;
		ScreenPixelsWidth: number;
		ScreenPixelsHeight: number;
		ScreenBitDepth: number;
		IsColor: boolean;
		InputType: string;
		NumberOfSoftkeys: number;
		MaximumSoftkeyLabelLength: number;
		CanInitiateVoiceCall: boolean;
		CanSendMail: boolean;
		HasBackButton: boolean;
		RendersWmlDoAcceptsInline: boolean;
		RendersWmlSelectsAsMenuCards: boolean;
		RendersBreaksAfterWmlAnchor: boolean;
		RendersBreaksAfterWmlInput: boolean;
		RendersBreakBeforeWmlSelectAndInput: boolean;
		RequiresPhoneNumbersAsPlainText: boolean;
		RequiresUrlEncodedPostfieldValues: boolean;
		RequiredMetaTagNameValue: string;
		RendersBreaksAfterHtmlLists: boolean;
		RequiresUniqueHtmlInputNames: boolean;
		RequiresUniqueHtmlCheckboxNames: boolean;
		SupportsCss: boolean;
		HidesRightAlignedMultiselectScrollbars: boolean;
		IsMobileDevice: boolean;
		RequiresAttributeColonSubstitution: boolean;
		CanRenderOneventAndPrevElementsTogether: boolean;
		CanRenderInputAndSelectElementsTogether: boolean;
		CanRenderAfterInputOrSelectElement: boolean;
		CanRenderPostBackCards: boolean;
		CanRenderMixedSelects: boolean;
		CanCombineFormsInDeck: boolean;
		CanRenderSetvarZeroWithMultiSelectionList: boolean;
		SupportsImageSubmit: boolean;
		RequiresUniqueFilePathSuffix: boolean;
		RequiresNoBreakInFormatting: boolean;
		RequiresLeadingPageBreak: boolean;
		SupportsSelectMultiple: boolean;
		SupportsBold: boolean;
		SupportsItalic: boolean;
		SupportsFontSize: boolean;
		SupportsFontName: boolean;
		SupportsFontColor: boolean;
		SupportsBodyColor: boolean;
		SupportsDivAlign: boolean;
		SupportsDivNoWrap: boolean;
		RequiresContentTypeMetaTag: boolean;
		RequiresDBCSCharacter: boolean;
		RequiresHtmlAdaptiveErrorReporting: boolean;
		RequiresOutputOptimization: boolean;
		SupportsAccesskeyAttribute: boolean;
		SupportsInputIStyle: boolean;
		SupportsInputMode: boolean;
		SupportsIModeSymbols: boolean;
		SupportsJPhoneSymbols: boolean;
		SupportsJPhoneMultiMediaAttributes: boolean;
		MaximumRenderedPageSize: number;
		RequiresSpecialViewStateEncoding: boolean;
		SupportsQueryStringInFormAction: boolean;
		SupportsCacheControlMetaTag: boolean;
		SupportsUncheck: boolean;
		CanRenderEmptySelects: boolean;
		SupportsRedirectWithCookie: boolean;
		SupportsEmptyStringInCookieValue: boolean;
		DefaultSubmitButtonLimit: number;
		SupportsXmlHttp: boolean;
		SupportsCallback: boolean;
		MaximumHrefLength: number;
	}
	interface HttpCapabilitiesProvider {
	}
}
declare module System.IO {
	interface Stream extends System.MarshalByRefObject {
		CanRead: boolean;
		CanSeek: boolean;
		CanTimeout: boolean;
		CanWrite: boolean;
		Length: number;
		Position: number;
		ReadTimeout: number;
		WriteTimeout: number;
	}
	interface TextWriter extends System.MarshalByRefObject {
		FormatProvider: System.IFormatProvider;
		Encoding: System.Text.Encoding;
		NewLine: string;
	}
}
declare module System.Security.Principal {
	interface WindowsIdentity extends System.Security.Claims.ClaimsIdentity {
		AuthenticationType: string;
		ImpersonationLevel: System.Security.Principal.TokenImpersonationLevel;
		IsAuthenticated: boolean;
		IsGuest: boolean;
		IsSystem: boolean;
		IsAnonymous: boolean;
		Name: string;
		Owner: System.Security.Principal.SecurityIdentifier;
		User: System.Security.Principal.SecurityIdentifier;
		Groups: System.Security.Principal.IdentityReference[];
		Token: number;
		AccessToken: Microsoft.Win32.SafeHandles.SafeAccessTokenHandle;
		UserClaims: System.Security.Claims.Claim[];
		DeviceClaims: System.Security.Claims.Claim[];
		Claims: System.Security.Claims.Claim[];
	}
	interface SecurityIdentifier extends System.Security.Principal.IdentityReference {
		BinaryLength: number;
		AccountDomainSid: System.Security.Principal.SecurityIdentifier;
		Value: string;
	}
	interface IdentityReference {
		Value: string;
	}
	interface IPrincipal {
		Identity: System.Security.Principal.IIdentity;
	}
	interface IIdentity {
		Name: string;
		AuthenticationType: string;
		IsAuthenticated: boolean;
	}
}
declare module System.Security.Claims {
	interface ClaimsIdentity {
		AuthenticationType: string;
		IsAuthenticated: boolean;
		Actor: System.Security.Claims.ClaimsIdentity;
		BootstrapContext: any;
		Claims: System.Security.Claims.Claim[];
		Label: string;
		Name: string;
		NameClaimType: string;
		RoleClaimType: string;
	}
	interface Claim {
		Issuer: string;
		OriginalIssuer: string;
		Properties: System.Collections.Generic.KeyValuePair<string, string>[];
		Subject: System.Security.Claims.ClaimsIdentity;
		Type: string;
		Value: string;
		ValueType: string;
	}
}
declare module Microsoft.Win32.SafeHandles {
	interface SafeAccessTokenHandle extends System.Runtime.InteropServices.SafeHandle {
		InvalidHandle: Microsoft.Win32.SafeHandles.SafeAccessTokenHandle;
		IsInvalid: boolean;
	}
	interface SafeHandleZeroOrMinusOneIsInvalid extends System.Runtime.InteropServices.SafeHandle {
		IsInvalid: boolean;
	}
	interface SafeWaitHandle extends Microsoft.Win32.SafeHandles.SafeHandleZeroOrMinusOneIsInvalid {
	}
}
declare module System.Runtime.ConstrainedExecution {
	interface CriticalFinalizerObject {
	}
}
declare module System.Security.Authentication.ExtendedProtection {
	interface ChannelBinding extends Microsoft.Win32.SafeHandles.SafeHandleZeroOrMinusOneIsInvalid {
		Size: number;
	}
}
declare module System.Threading {
	interface CancellationToken {
		None: System.Threading.CancellationToken;
		IsCancellationRequested: boolean;
		CanBeCanceled: boolean;
		WaitHandle: System.Threading.WaitHandle;
	}
	interface WaitHandle extends System.MarshalByRefObject {
		Handle: number;
		SafeWaitHandle: Microsoft.Win32.SafeHandles.SafeWaitHandle;
	}
}
declare module System.Web.Profile {
	interface ProfileBase extends System.Configuration.SettingsBase {
		Item: any;
		UserName: string;
		IsAnonymous: boolean;
		IsDirty: boolean;
		LastActivityDate: Date;
		LastUpdatedDate: Date;
		Properties: any;
	}
}
declare module System.Configuration {
	interface SettingsBase {
		Item: any;
		Properties: any;
		Providers: any;
		PropertyValues: any;
		Context: any;
		IsSynchronized: boolean;
	}
}
declare module System.Web.Instrumentation {
	interface PageInstrumentationService {
		IsEnabled: boolean;
		ExecutionListeners: System.Web.Instrumentation.PageExecutionListener[];
	}
	interface PageExecutionListener {
	}
}
declare module System.ComponentModel {
	interface ISite {
		Component: System.ComponentModel.IComponent;
		Container: System.ComponentModel.IContainer;
		DesignMode: boolean;
		Name: string;
	}
	interface IComponent {
		Site: System.ComponentModel.ISite;
	}
	interface IContainer {
		Components: any;
	}
}
declare module System.Web.Mvc.Async {
	interface AsyncManager {
		OutstandingOperations: System.Web.Mvc.Async.OperationCounter;
		Parameters: System.Collections.Generic.KeyValuePair<string, any>[];
		Timeout: number;
	}
	interface OperationCounter {
		Count: number;
	}
}
declare module System.Globalization {
	interface CultureInfo {
		CurrentUICulture: System.Globalization.CultureInfo;
		Name: string;
		CurrentCulture: System.Globalization.CultureInfo;
		InstalledUICulture: System.Globalization.CultureInfo;
		DefaultThreadCurrentCulture: System.Globalization.CultureInfo;
		DefaultThreadCurrentUICulture: System.Globalization.CultureInfo;
		InvariantCulture: System.Globalization.CultureInfo;
		Parent: System.Globalization.CultureInfo;
		LCID: number;
		KeyboardLayoutId: number;
		IetfLanguageTag: string;
		DisplayName: string;
		NativeName: string;
		EnglishName: string;
		TwoLetterISOLanguageName: string;
		ThreeLetterISOLanguageName: string;
		ThreeLetterWindowsLanguageName: string;
		CompareInfo: System.Globalization.CompareInfo;
		TextInfo: System.Globalization.TextInfo;
		IsNeutralCulture: boolean;
		CultureTypes: System.Globalization.CultureTypes;
		NumberFormat: System.Globalization.NumberFormatInfo;
		DateTimeFormat: System.Globalization.DateTimeFormatInfo;
		Calendar: System.Globalization.Calendar;
		OptionalCalendars: System.Globalization.Calendar[];
		UseUserOverride: boolean;
		IsReadOnly: boolean;
	}
	interface CompareInfo {
		Name: string;
		LCID: number;
		Version: System.Globalization.SortVersion;
	}
	interface SortVersion {
		FullVersion: number;
		SortId: System.Guid;
	}
	interface TextInfo {
		ANSICodePage: number;
		OEMCodePage: number;
		MacCodePage: number;
		EBCDICCodePage: number;
		LCID: number;
		CultureName: string;
		IsReadOnly: boolean;
		ListSeparator: string;
		IsRightToLeft: boolean;
	}
	interface NumberFormatInfo {
		InvariantInfo: System.Globalization.NumberFormatInfo;
		CurrencyDecimalDigits: number;
		CurrencyDecimalSeparator: string;
		IsReadOnly: boolean;
		CurrencyGroupSizes: number[];
		NumberGroupSizes: number[];
		PercentGroupSizes: number[];
		CurrencyGroupSeparator: string;
		CurrencySymbol: string;
		CurrentInfo: System.Globalization.NumberFormatInfo;
		NaNSymbol: string;
		CurrencyNegativePattern: number;
		NumberNegativePattern: number;
		PercentPositivePattern: number;
		PercentNegativePattern: number;
		NegativeInfinitySymbol: string;
		NegativeSign: string;
		NumberDecimalDigits: number;
		NumberDecimalSeparator: string;
		NumberGroupSeparator: string;
		CurrencyPositivePattern: number;
		PositiveInfinitySymbol: string;
		PositiveSign: string;
		PercentDecimalDigits: number;
		PercentDecimalSeparator: string;
		PercentGroupSeparator: string;
		PercentSymbol: string;
		PerMilleSymbol: string;
		NativeDigits: string[];
		DigitSubstitution: System.Globalization.DigitShapes;
	}
	interface DateTimeFormatInfo {
		InvariantInfo: System.Globalization.DateTimeFormatInfo;
		CurrentInfo: System.Globalization.DateTimeFormatInfo;
		AMDesignator: string;
		Calendar: System.Globalization.Calendar;
		DateSeparator: string;
		FirstDayOfWeek: System.DayOfWeek;
		CalendarWeekRule: System.Globalization.CalendarWeekRule;
		FullDateTimePattern: string;
		LongDatePattern: string;
		LongTimePattern: string;
		MonthDayPattern: string;
		PMDesignator: string;
		RFC1123Pattern: string;
		ShortDatePattern: string;
		ShortTimePattern: string;
		SortableDateTimePattern: string;
		TimeSeparator: string;
		UniversalSortableDateTimePattern: string;
		YearMonthPattern: string;
		AbbreviatedDayNames: string[];
		ShortestDayNames: string[];
		DayNames: string[];
		AbbreviatedMonthNames: string[];
		MonthNames: string[];
		IsReadOnly: boolean;
		NativeCalendarName: string;
		AbbreviatedMonthGenitiveNames: string[];
		MonthGenitiveNames: string[];
	}
	interface Calendar {
		MinSupportedDateTime: Date;
		MaxSupportedDateTime: Date;
		AlgorithmType: System.Globalization.CalendarAlgorithmType;
		IsReadOnly: boolean;
		Eras: number[];
		TwoDigitYearMax: number;
	}
}
declare module DRS.Core.UI {
	interface BreadCrumb {
		LinkText: string;
		Controller: string;
		ActionMethod: string;
	}
}


