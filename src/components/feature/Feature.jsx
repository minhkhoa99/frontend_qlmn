import './feature.scss'
import 'react-circular-progressbar/dist/styles.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Feature = () => {
  return (
    <div className='feature'>
        <div className="top">
          <h1 className="title">Tổng chi tiêu</h1>
          <MoreVertIcon fontSize='small' />
        </div>
        <div className="bottom">
          <div className="featureChart">
            <CircularProgressbar value={70} text={'70%'} strokeWidth={5} />
          </div>
            <p className="title">
            Tổng số tiền chi hôm nay
            </p>
            <p className="amount">
              $1,000,000
            </p>
            <p className="desc">
            Quá trình chi tiêu trước đó, khoản thanh toán cuối cùng có thể không được bao gồm
            </p>
            <p className="summary">
              <div className="item">
                <div className="itemTitle">Tần suất</div>
                <div className="itemResult negative">
                  <KeyboardArrowDownIcon fontSize='small' />
                  <div className="resultAmount">$10.4k</div>
                </div>
              </div>
              <div className="item">
                <div className="itemTitle">Tuần trước</div>
                <div className="itemResult negative">
                  <KeyboardArrowDownIcon fontSize='small' />
                  <div className="resultAmount">$12.4k</div>
                </div>
              </div>
              <div className="item">
                <div className="itemTitle">Tháng trước</div>
                <div className="itemResult positive">
                  <KeyboardArrowUpIcon fontSize='small' />
                  <div className="resultAmount">$22.2k</div>
                </div>
              </div>
            </p>
        </div>
    </div>
  )
}

export default Feature