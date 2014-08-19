!function(){angular.module("ImageCropper",[]).directive("imageCrop",function(){return{template:'<div class="fileUpload ng-image-crop ng-image-crop--{{ shape }}" ng-style="moduleStyles"><section ng-style="sectionStyles" ng-show="step==1"><span class="btn purple fileinput-button"><i class="fa fa-file-image-o"></i> <input type="file" class="image-crop-filepicker" name="file"></span></section><section ng-style="sectionStyles" ng-show="step==2"><canvas class="cropping-canvas" width="{{ canvasWidth }}" height="{{ canvasHeight }}" ng-mousemove="onCanvasMouseMove($event)" ng-mousedown="onCanvasMouseDown($event)" ng-mouseup="onCanvasMouseUp($event)"></canvas><div class="buttons"><button ng-click="crop()" class="btn yellow"><i class="fa fa-crop"></i></button> <button ng-click="reset()" class="btn blue"><i class="fa fa-refresh"></i></button></div><div ng-style="croppingGuideStyles" class="cropping-guide"></div></section><section ng-style="sectionStyles" class="section-final" ng-show="step==3"><div class="buttons"><button ng-click="reset()" class="btn blue"><i class="fa fa-refresh"></i></button></div><div ng-style="croppingGuideStyles" class="cropping-guide-final"><img class="cropped-image" ng-src="{{ result }}"> <button ng-click="upload()" class="btn green buttons"><i class="fa fa-upload"></i></button></div><img class="final-cropped-image" ng-src="{{ croppedDataUri }}" ng-hide="hideOriginal || false"></section></div>',replace:!0,restrict:"E",scope:{width:"@",height:"@",shape:"@",hideOriginal:"@",result:"=",step:"="},link:function(n,o){function a(e,t){D=e,M=t,x.clearRect(0,0,u.width,u.height),x.drawImage(g,e,t,w,F)}function r(e){return Math.round(1e3*e)/1e3}function i(){L=u.width-g.width*b-50,G=u.height-g.height*b-50}function s(e,t){document.documentElement.addEventListener(e,t,!1)}function c(e,t){document.documentElement.removeEventListener(e,t)}n.step=n.step||1,n.shape=n.shape||"circle",n.width=parseInt(n.width,10)||300,n.height=parseInt(n.height,10)||300,n.canvasWidth=n.width+100,n.canvasHeight=n.height+100;var u=(o.find("input[type=file]"),o.find("canvas")[0]),l=document.getElementsByClassName("final-cropped-image")[0],g=new Image,h=new FileReader,d=0,p=0,f=0,m=0,S=0,v=0,y=!1,A=0,P=0,C=!1,w=f,F=m,D=0,M=0,b=1,B=0,I=0,L=0,G=0,x=u.getContext("2d"),T=null,R=[];n.moduleStyles={width:n.width+100+"px",height:n.height+100+"px"},n.sectionStyles={width:n.width+100+"px",height:n.height+100+"px"},n.croppingGuideStyles={width:n.width+"px",height:n.height+"px",top:"50px",left:"50px"},h.onload=function(){g.src=this.result,n.step=2,n.$apply();var o=atob(this.result.split(",")[1]),a=new e(o,0,o.length);T=t.readFromBinaryFile(a)};var E=function(){R=[],b=1,x.clearRect(0,0,u.width,u.height),document.getElementsByClassName("image-crop-filepicker")[0].value=null,g.src=""};n.reset=function(){E(),document.getElementsByClassName("cropped-image")[0].src="",n.step=1},o.on("change",function(e){R=e.target.files,h.readAsDataURL(R[0])}),g.onload=function(){if(x.drawImage(g,0,0),f=g.width,m=g.height,T&&T.Orientation)switch(T.Orientation){case 1:break;case 2:x.translate(f,0),x.scale(-1,1);break;case 3:x.translate(f,m),x.rotate(Math.PI);break;case 4:x.translate(0,m),x.scale(1,-1);break;case 5:x.rotate(.5*Math.PI),x.scale(1,-1);break;case 6:x.rotate(.5*Math.PI),x.translate(0,-m);break;case 7:x.rotate(.5*Math.PI),x.translate(f,-m),x.scale(-1,1);break;case 8:x.rotate(-.5*Math.PI),x.translate(-f,0)}d=n.width+100-this.width,p=n.height+100-this.height,w=f,F=m,I=(u.width-100)/f,B=r(Math.sqrt(Math.pow(u.width,2)+Math.pow(u.height,2))),i()},l.onload=function(){var e=document.createElement("canvas");e.width=this.width-100,e.height=this.height-100,e.style.display="none";var t=e.getContext("2d");t.drawImage(l,-50,-50),document.getElementsByClassName("section-final")[0].appendChild(e),n.result=e.toDataURL(),n.$apply(),E()},n.crop=function(){n.croppedDataUri=u.toDataURL(),n.step=3},n.onCanvasMouseUp=function(e){y&&(e.preventDefault(),e.stopPropagation(),A=0,P=0,y=!1,S=D,v=M,c("mouseup",n.onCanvasMouseUp),c("touchend",n.onCanvasMouseUp),c("mousemove",n.onCanvasMouseMove),c("touchmove",n.onCanvasMouseMove))},u.addEventListener("touchend",n.onCanvasMouseUp,!1),n.onCanvasMouseDown=function(e){A="touchstart"===e.type?e.changedTouches[0].clientX:e.clientX,P="touchstart"===e.type?e.changedTouches[0].clientY:e.clientY,C=!1,y=!0,s("mouseup",n.onCanvasMouseUp),s("mousemove",n.onCanvasMouseMove)},u.addEventListener("touchstart",n.onCanvasMouseDown,!1),n.onHandleMouseDown=function(e){e.preventDefault(),e.stopPropagation(),A=k="touchstart"===e.type?e.changedTouches[0].clientX:e.clientX,P=N="touchstart"===e.type?e.changedTouches[0].clientY:e.clientY,y=!1,C=!0,s("mouseup",n.onHandleMouseUp),s("touchend",n.onHandleMouseUp),s("mousemove",n.onHandleMouseMove),s("touchmove",n.onHandleMouseMove)},n.onHandleMouseUp=function(e){C&&(e.preventDefault(),e.stopPropagation(),A=0,P=0,C=!1,S=D,v=M,c("mouseup",n.onHandleMouseUp),c("touchend",n.onHandleMouseUp),c("mousemove",n.onHandleMouseMove),c("touchmove",n.onHandleMouseMove))},n.onCanvasMouseMove=function(e){if(e.preventDefault(),e.stopPropagation(),y){var t=A-("touchmove"===e.type?e.changedTouches[0].clientX:e.clientX),n=P-("touchmove"===e.type?e.changedTouches[0].clientY:e.clientY);a(S-t,v-n)}},u.addEventListener("touchmove",n.onCanvasMouseMove,!1);var k=null,N=null;n.onHandleMouseMove=function(e){if(e.stopPropagation(),e.preventDefault(),!C)return!1;var t=k-("touchmove"===e.type?e.changedTouches[0].clientX:e.clientX),n=N-("touchmove"===e.type?e.changedTouches[0].clientY:e.clientY);k="touchmove"===e.type?e.changedTouches[0].clientX:e.clientX,N="touchmove"===e.type?e.changedTouches[0].clientY:e.clientY;var o=calcZoomLevel(t,n);zoomImage(o)}}}});var e=function(e,t,n){var o=e,a=t||0,r=0;this.getRawData=function(){return o},"string"==typeof e?(r=n||o.length,this.getByteAt=function(e){return 255&o.charCodeAt(e+a)},this.getBytesAt=function(e,t){for(var n=[],r=0;t>r;r++)n[r]=255&o.charCodeAt(e+r+a);return n}):"unknown"==typeof e&&(r=n||IEBinary_getLength(o),this.getByteAt=function(e){return IEBinary_getByteAt(o,e+a)},this.getBytesAt=function(e,t){return new VBArray(IEBinary_getBytesAt(o,e+a,t)).toArray()}),this.getLength=function(){return r},this.getSByteAt=function(e){var t=this.getByteAt(e);return t>127?t-256:t},this.getShortAt=function(e,t){var n=t?(this.getByteAt(e)<<8)+this.getByteAt(e+1):(this.getByteAt(e+1)<<8)+this.getByteAt(e);return 0>n&&(n+=65536),n},this.getSShortAt=function(e,t){var n=this.getShortAt(e,t);return n>32767?n-65536:n},this.getLongAt=function(e,t){var n=this.getByteAt(e),o=this.getByteAt(e+1),a=this.getByteAt(e+2),r=this.getByteAt(e+3),i=t?(((n<<8)+o<<8)+a<<8)+r:(((r<<8)+a<<8)+o<<8)+n;return 0>i&&(i+=4294967296),i},this.getSLongAt=function(e,t){var n=this.getLongAt(e,t);return n>2147483647?n-4294967296:n},this.getStringAt=function(e,t){for(var n=[],o=this.getBytesAt(e,t),a=0;t>a;a++)n[a]=String.fromCharCode(o[a]);return n.join("")},this.getCharAt=function(e){return String.fromCharCode(this.getByteAt(e))},this.toBase64=function(){return window.btoa(o)},this.fromBase64=function(e){o=window.atob(e)}},t=function(){function e(e){return!!e.exifdata}function t(e,t){BinaryAjax(e.src,function(o){var a=n(o.binaryResponse);e.exifdata=a||{},t&&t.call(e)})}function n(e){if(255!=e.getByteAt(0)||216!=e.getByteAt(1))return!1;for(var t,n=2,o=e.getLength();o>n;){if(255!=e.getByteAt(n))return g&&console.log("Not a valid marker at offset "+n+", found: "+e.getByteAt(n)),!1;if(t=e.getByteAt(n+1),22400==t)return g&&console.log("Found 0xFFE1 marker"),r(e,n+4,e.getShortAt(n+2,!0)-2);if(225==t)return g&&console.log("Found 0xFFE1 marker"),r(e,n+4,e.getShortAt(n+2,!0)-2);n+=2+e.getShortAt(n+2,!0)}}function o(e,t,n,o,r){var i,s,c,u=e.getShortAt(n,r),l={};for(c=0;u>c;c++)i=n+12*c+2,s=o[e.getShortAt(i,r)],!s&&g&&console.log("Unknown tag: "+e.getShortAt(i,r)),l[s]=a(e,i,t,n,r);return l}function a(e,t,n,o,a){var r,i,s,c,u,l,g=e.getShortAt(t+2,a),h=e.getLongAt(t+4,a),d=e.getLongAt(t+8,a)+n;switch(g){case 1:case 7:if(1==h)return e.getByteAt(t+8,a);for(r=h>4?d:t+8,i=[],c=0;h>c;c++)i[c]=e.getByteAt(r+c);return i;case 2:return r=h>4?d:t+8,e.getStringAt(r,h-1);case 3:if(1==h)return e.getShortAt(t+8,a);for(r=h>2?d:t+8,i=[],c=0;h>c;c++)i[c]=e.getShortAt(r+2*c,a);return i;case 4:if(1==h)return e.getLongAt(t+8,a);i=[];for(var c=0;h>c;c++)i[c]=e.getLongAt(d+4*c,a);return i;case 5:if(1==h)return u=e.getLongAt(d,a),l=e.getLongAt(d+4,a),s=new Number(u/l),s.numerator=u,s.denominator=l,s;for(i=[],c=0;h>c;c++)u=e.getLongAt(d+8*c,a),l=e.getLongAt(d+4+8*c,a),i[c]=new Number(u/l),i[c].numerator=u,i[c].denominator=l;return i;case 9:if(1==h)return e.getSLongAt(t+8,a);for(i=[],c=0;h>c;c++)i[c]=e.getSLongAt(d+4*c,a);return i;case 10:if(1==h)return e.getSLongAt(d,a)/e.getSLongAt(d+4,a);for(i=[],c=0;h>c;c++)i[c]=e.getSLongAt(d+8*c,a)/e.getSLongAt(d+4+8*c,a);return i}}function r(e,t){if("Exif"!=e.getStringAt(t,4))return g&&console.log("Not valid EXIF data! "+e.getStringAt(t,4)),!1;var n,a,r,i,s,c=t+6;if(18761==e.getShortAt(c))n=!1;else{if(19789!=e.getShortAt(c))return g&&console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),!1;n=!0}if(42!=e.getShortAt(c+2,n))return g&&console.log("Not valid TIFF data! (no 0x002A)"),!1;if(8!=e.getLongAt(c+4,n))return g&&console.log("Not valid TIFF data! (First offset not 8)",e.getShortAt(c+4,n)),!1;if(a=o(e,c,c+8,d,n),a.ExifIFDPointer){i=o(e,c,c+a.ExifIFDPointer,h,n);for(r in i){switch(r){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":i[r]=f[r][i[r]];break;case"ExifVersion":case"FlashpixVersion":i[r]=String.fromCharCode(i[r][0],i[r][1],i[r][2],i[r][3]);break;case"ComponentsConfiguration":i[r]=f.Components[i[r][0]]+f.Components[i[r][1]]+f.Components[i[r][2]]+f.Components[i[r][3]]}a[r]=i[r]}}if(a.GPSInfoIFDPointer){s=o(e,c,c+a.GPSInfoIFDPointer,p,n);for(r in s){switch(r){case"GPSVersionID":s[r]=s[r][0]+"."+s[r][1]+"."+s[r][2]+"."+s[r][3]}a[r]=s[r]}}return a}function i(n,o){return n.complete?(e(n)?o&&o.call(n):t(n,o),!0):!1}function s(t,n){return e(t)?t.exifdata[n]:void 0}function c(t){if(!e(t))return{};var n,o=t.exifdata,a={};for(n in o)o.hasOwnProperty(n)&&(a[n]=o[n]);return a}function u(t){if(!e(t))return"";var n,o=t.exifdata,a="";for(n in o)o.hasOwnProperty(n)&&(a+="object"==typeof o[n]?o[n]instanceof Number?n+" : "+o[n]+" ["+o[n].numerator+"/"+o[n].denominator+"]\r\n":n+" : ["+o[n].length+" values]\r\n":n+" : "+o[n]+"\r\n");return a}function l(e){return n(e)}var g=!1,h={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},d={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},p={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},f={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}};return{readFromBinaryFile:l,pretty:u,getTag:s,getAllTags:c,getData:i,Tags:h,TiffTags:d,GPSTags:p,StringValues:f}}()}();