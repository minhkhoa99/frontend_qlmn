import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HistoryIcon from '@mui/icons-material/History';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BarChartIcon from '@mui/icons-material/BarChart';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import GroupsIcon from '@mui/icons-material/Groups';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import AddchartIcon from '@mui/icons-material/Addchart';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
          <span className='logo'>Quản lý </span>
        </div>
        <hr />
        <div className='center'>
          <ul>
            <p className="title">MAIN MENU</p>
            <li>
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </li>
            <p className="title">QUẢN LÝ DINH DƯỠNG</p>
            <li>
              <GroupIcon className='icon' />
              <span>Nhà cung cấp</span>
            </li>
            <li>
              <Inventory2Icon className='icon' />
              <span>Thực phẩm trường</span>
            </li>
            <li>
              <LocalShippingIcon className='icon' />
              <span>Nhập xuất kho</span>
            </li>
            <li>
              <HistoryIcon className='icon' />
              <span>Lịch sử kho</span>
            </li>
            <li>
              <PendingActionsIcon className='icon' />
              <span>Theo dõi sổ kho</span>
            </li>
            <li>
              <LunchDiningIcon className='icon' />
              <span>Món ăn</span>
            </li>
            <li>
              <MenuBookIcon className='icon' />
              <span>Thực đơn mẫu</span>
            </li>
            <li>
              <FastfoodIcon className='icon' />
              <span>Cân đối khẩu phần</span>
            </li>
            <li>
              <BarChartIcon className='icon' />
              <span>Biểu mẫu</span>
            </li>
            <p className="title">QUẢN LÝ THU CHI</p>
            <li>
              <HomeRepairServiceIcon className='icon' />
              <span>Quản lý khối lớp </span>
            </li>
            <li>
              <GroupsIcon className='icon' />
              <span>Quản lý học sinh</span>
            </li>
            <li>
              <CalendarTodayIcon className='icon' />
              <span>Cấu hình ngày nghỉ</span>
            </li>
            <li>
              <EventAvailableIcon className='icon' />
              <span>Điểm danh học sinh</span>
            </li>
            <li>
              <PersonSearchIcon className='icon' />
              <span>Theo dõi học sinh</span>
            </li>
            <li>
              <CurrencyExchangeIcon className='icon' />
              <span>Khoản thu và lập khoản thu </span>
            </li>
            <li>
              <CreditScoreIcon className='icon' />
              <span>Thu thanh toán</span>
            </li>
            <li>
              <AddchartIcon className='icon' />
              <span> Báo cáo thống kê</span>
            </li>
            <p className="title">SERVICES</p>
            <li>
              <HealthAndSafetyIcon className='icon' />
              <span>System Health</span>
            </li>
            <li>
              <PsychologyIcon className='icon' />
              <span>Logs</span>
            </li>
            <li>
              <SettingsIcon className='icon' />
              <span>Settings</span>
            </li>
            <p className="title">ACCOUNT</p>
            <li>
              <PersonIcon className='icon' />
              <span>Profile</span>
            </li>
            <li>
              <ExitToAppIcon className='icon' />
              <span>Logout</span>
            </li>
          </ul>
        </div>
        <div className='bottom'>
          <div className='colorOptions'></div>
          <div className='colorOptions'></div>
        </div>
    </div>
  )
}

export default Sidebar