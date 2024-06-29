import Text1 from '../Media/m_Text1.png';
import Text8 from '../Media/m_Text8.png';
import MBg from './m_bg';

function Text() {
    return (
        <div>
            <div className="Text position-absolute z-2 text-center w-100" style={{ marginTop: '140px', marginBottom: '140px'}}>
                <img src={Text1} className="text1" alt="" />
                <p className="text2" style={{ paddingTop: '80px' }}>
                    ���Ȃ������̐S��䂫���ė����Ȃ��A�Ƃ��鏗���̐l��杁B<br />
                    �ޏ��̖��́u���@�C�I���b�g�E�G���@�[�K�[�f���v�����B
                </p>
                <p className="text3" style={{ paddingTop: '40px' }}>
                    �����O���烏�[���h�c�A�[��s���A���E�e�n�ŔM���̉Q������N�������B<br />
                    �����I�ȕ���ƁA�@�ׂŃ_�C�i�~�b�N�ȉf���Řb��ƂȂ���TV�V���[�Y�A<br />
                    �ϋq�����̐S���点�A��i���E�ւƗU�����I�[�P�X�g���R���T�[�g��o�āA<br />
                    �u���@�C�I���b�g�E�G���@�[�K�[�f�� �O�` - �i���Ǝ�����L�l�` -�v����J�B<br />
                    ���E���ő傫�Ȕ���������N�������B
                </p>
                <p className="text4" style={{ paddingTop: '40px' }}>�����āA���悢��t�B�i�[���ք����B</p>
                <p className="text5 fs-5" style={{ paddingTop: '40px' }}>�u�����Ă�v��A�����͂킩��̂ł��B</p>
                <p className="text6" style={{ paddingTop: '40px' }}>
                    �V�������オ�������A���E���傫���ς���Ă������Ƃ��Ă��鍡�A<br />
                    �ޏ��̖a���莆���A�ޏ��̑z�����A�ǂ��ɓ͂��̂��B
                </p>
                <p className="text7 fs-5" style={{ paddingTop: '40px' }}>�s�ρz�Ły���Ձz�̈�����Ȃ��Ʉ����B</p>
                <img src={Text8} className="text8" style={{ paddingTop: '80px' }} alt="" />
                <p className="text9 fs-4" style={{ paddingTop: '80px' }}>
                    �w����� ���@�C�I���b�g�E�G���@�[�K�[�f���x<br />
                    2020�N9��18�� �S��������J
                </p>
            </div>
            <MBg/>
        </div>
    )
}
export default Text;