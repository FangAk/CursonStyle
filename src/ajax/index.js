import axios from "axios";

// post
function postRequest(url, params) {
  return new Promise((resolve) => {
    axios.post(url, params).then((res) => {
      resolve(res.data);
    });
  });
}
//NetworkMaintenance_one
function NetworkMaintenance_one(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/NetworkMaintenance_one", params);
}
//NetworkMaintenance_Three
function NetworkMaintenance_Three(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/NetworkMaintenance_Three", params);
}
//MapPoint_Wsc
function MapPoint_Wsc(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/MapPoint_Wsc", params);
}
//MapPoint_Wsc2
function MapPoint_Wsc2(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/MapPoint_Wsc2", params);
}
//MapWellMaintenanceRight_two
function MapWellMaintenanceRight_two(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/MapWellMaintenanceRight_two", params);
}
//MapWellSum
function MapWellSum(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/MapWellSum", params);
}
//getUserinfo
function getUserinfo(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/getUserinfo", params);
}
//WellMaintenance_one
function WellMaintenance_one(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/WellMaintenance_one", params);
}
//片区 child_F2
function child_F2(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/child_F2", params);
}


//WellSum
function WellSum(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/WellSum", params);
}
//jhzx_year
function jhzx_year(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/jhzx_year", params);
}
//MapPipeSum
function MapPipeSum(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/MapPipeSum", params);
}
// PipeSum
function PipeSum(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/PipeSum", params);
}
//NetworkMaintenance_two
function NetworkMaintenance_two(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/NetworkMaintenance_two", params);
}
//GetYear
function GetYear(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/GetYear", params);
}
//child_F
function child_F(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/child_F", params);
}
//Parentarea_F
function Parentarea_F(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/Parentarea_F", params);
}
//WellMaintenance_3
function WellMaintenance_3(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/WellMaintenance_3", params);
}
function WellMaintenance_two(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/WellMaintenance_two", params);
}
//WellMaintenanceRight_two
function WellMaintenanceRight_two(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/WellMaintenanceRight_two", params);
}
//WellMaintenance_Three
function WellMaintenance_Three(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/WellMaintenance_Three", params);
}

//第二页数据
//YearToRepairTable
function YearToRepairTable(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/YearToRepairTable", params);
}
//RushRepairRuantity
function RushRepairRuantity(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/RushRepairRuantity", params);
}
//YearToRepair
function YearToRepair(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/YearToRepair", params);
}
//YearToRepair
function YearToRepair2(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/YearToRepair2", params);
}
//RepairTask
function RepairTask(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/RepairTask", params);
}
//第三页
// PatrolsTable
function PatrolsTable(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/PatrolsTable", params);
}
//PatrolsStatistical
function PatrolsStatistical(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/PatrolsStatistical", params);
}
//PatrolsNumber
function PatrolsNumber(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/PatrolsNumber", params);
}
//PatrolsTime
function PatrolsTime(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/PatrolsTime", params);
}
//PatrolsProblem
function PatrolsProblem(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/PatrolsProblem", params);
}
//AreaSegmentation
function AreaSegmentation(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/AreaSegmentation", params);
}
//rygj_Company
function rygj_Company(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/rygj_Company", params);
}
//第四页
  //MaintenancePlan
  function MaintenancePlan(params) {
    return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/MaintenancePlan", params);
  }
//YHPipeDialog
function YHPipeDialog(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/YHPipeDialog", params);
}
//RepairMeteringLog
function RepairMeteringLog(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/RepairMeteringLog", params);
}
function RepairMeteringDialog(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/RepairMeteringDialog", params);
}

function XCMeteringDialog(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/XCMeteringDialog", params);
}function InspectMeasurementLog(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/InspectMeasurementLog", params);
}
//EventsReported
function EventsReported(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/EventsReported", params);
}
//EventsReportedDialog
function EventsReportedDialog(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/EventsReportedDialog", params);
}
//HardwareDevices
function HardwareDevices(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/HardwareDevices", params);
}

function LocationInfo(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/LocationInfo", params);
}
//TaskInfoDialog
function TaskInfoDialog(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/TaskInfoDialog", params);
}
//WarningScheduling
function WarningScheduling(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/WarningScheduling", params);
}
//四个
function SZYDataDialog(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/SZYDataDialog", params);
}
function SZYInfoDialog(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/SZYInfoDialog", params);
}

function YWJDataDialog(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/YWJDataDialog", params);
}

function YWJInfoDialog(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/YWJInfoDialog", params);
}


function LLJDataDialog(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/LLJDataDialog", params);
}
function LLJInfoDialog(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/LLJInfoDialog", params);
}
function ZHJGInfoDialog(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/ZHJGInfoDialog", params);
}
//Company
function Company(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/Company", params);
}
function Area(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/Area", params);
}
//UpdateWaterLevel
function UpdateWaterLevel(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/UpdateWaterLevel", params);
}
//EquipmentInfo
function EquipmentInfo(params) {
  return postRequest("http://58.210.32.10:9020/KSYYserver/dataService/Logical.svc/EquipmentInfo", params);
}
export { NetworkMaintenance_one,NetworkMaintenance_Three,MapPoint_Wsc,MapPoint_Wsc2,MapWellMaintenanceRight_two ,MapWellSum,getUserinfo,WellMaintenance_one,child_F2,child_F,WellMaintenance_two,WellSum,jhzx_year,MapPipeSum,PipeSum,NetworkMaintenance_two,GetYear,Parentarea_F,WellMaintenance_3,WellMaintenanceRight_two,WellMaintenance_Three,YearToRepairTable,RushRepairRuantity,YearToRepair,YearToRepair2,RepairTask,PatrolsTable,PatrolsStatistical,PatrolsNumber,PatrolsTime,PatrolsProblem,AreaSegmentation,rygj_Company,MaintenancePlan,YHPipeDialog,RepairMeteringLog,RepairMeteringDialog,XCMeteringDialog,InspectMeasurementLog,EventsReported,EventsReportedDialog,HardwareDevices,LocationInfo,TaskInfoDialog,WarningScheduling,SZYDataDialog,SZYInfoDialog,YWJDataDialog,YWJInfoDialog,LLJDataDialog,LLJInfoDialog,ZHJGInfoDialog,Area,Company,UpdateWaterLevel,EquipmentInfo};
