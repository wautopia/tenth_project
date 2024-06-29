import Text1 from '../Media/m_Text1.png';
import Text8 from '../Media/m_Text8.png';
import MBg from './m_bg';

function Text() {
    return (
        <div>
            <div className="Text position-absolute z-2 text-center w-100" style={{ marginTop: '140px', marginBottom: '140px'}}>
                <img src={Text1} className="text1" alt="" />
                <p className="text2" style={{ paddingTop: '80px' }}>
                    今なお多くの心を惹きつけて離さない、とある女性の人生譚。<br />
                    彼女の名は「ヴァイオレット・エヴァーガーデン」──。
                </p>
                <p className="text3" style={{ paddingTop: '40px' }}>
                    放送前からワールドツアーを行い、世界各地で熱狂の渦を巻き起こした。<br />
                    感動的な物語と、繊細でダイナミックな映像で話題となったTVシリーズ、<br />
                    観客たちの心を躍らせ、作品世界へと誘ったオーケストラコンサートを経て、<br />
                    「ヴァイオレット・エヴァーガーデン 外伝 - 永遠と自動手記人形 -」を公開<br />
                    世界中で大きな反響を巻き起こした。
                </p>
                <p className="text4" style={{ paddingTop: '40px' }}>そして、いよいよフィナーレへ──。</p>
                <p className="text5 fs-5" style={{ paddingTop: '40px' }}>「愛してる」も、少しはわかるのです。</p>
                <p className="text6" style={{ paddingTop: '40px' }}>
                    新しい時代が到来し、世界が大きく変わっていこうとしている今、<br />
                    彼女の紡ぐ手紙が、彼女の想いが、どこに届くのか。
                </p>
                <p className="text7 fs-5" style={{ paddingTop: '40px' }}>【不変】で【普遍】の愛をあなたに──。</p>
                <img src={Text8} className="text8" style={{ paddingTop: '80px' }} alt="" />
                <p className="text9 fs-4" style={{ paddingTop: '80px' }}>
                    劇場版 ヴァイオレット・エヴァーガーデン』<br />
                    2020年9月18日 全国劇場公開
                </p>
            </div>
            <MBg/>
        </div>
    )
}
export default Text;