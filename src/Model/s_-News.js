import './s_-News.css';
import Title from '../Model/s_Title';
import Detail from '../Model/s_news_detail';
import headingSNS from '../Media/s_heading_News.png';
function News() {
    return (
        <div className="News pt-3 ps-4 pe-3 pb-4 shadow" style={{width:'97%'} } >
            <Title
                title={headingSNS}
            />
            <div className="mt-3 mb-3  positon-fixed overflow-y-scroll" style={{ height:"309px" }} >
                <Detail
                    date="2024.05.16"
                    link="https://violet-evergarden.jp/news/?id=204"
                    theme="『ヴァイオレット・エヴァーガーデン』初の海外オーケストラコンサートが開催決定！"
                />
                <Detail
                    date="2024.05.16"
                    link="https://violet-evergarden.jp/news/?id=204"
                    theme="『ヴァイオレット・エヴァーガーデン』初の海外オーケストラコンサートが開催決定！"
                />
                <Detail
                    date="2024.05.16"
                    link="https://violet-evergarden.jp/news/?id=204"
                    theme="『ヴァイオレット・エヴァーガーデン』初の海外オーケストラコンサートが開催決定！"
                />
                <Detail
                    date="2024.05.16"
                    link="https://violet-evergarden.jp/news/?id=204"
                    theme="『ヴァイオレット・エヴァーガーデン』初の海外オーケストラコンサートが開催決定！"
                />
                <Detail
                    date="2024.05.16"
                    link="https://violet-evergarden.jp/news/?id=204"
                    theme="『ヴァイオレット・エヴァーガーデン』初の海外オーケストラコンサートが開催決定！"
                /> <Detail
                    date="2024.05.16"
                    link="https://violet-evergarden.jp/news/?id=204"
                    theme="『ヴァイオレット・エヴァーガーデン』初の海外オーケストラコンサートが開催決定！"
                />
                <Detail
                    date="2024.05.16"
                    link="https://violet-evergarden.jp/news/?id=204"
                    theme="『ヴァイオレット・エヴァーガーデン』初の海外オーケストラコンサートが開催決定！"
                />
                <Detail
                    date="2024.05.16"
                    link="https://violet-evergarden.jp/news/?id=204"
                    theme="『ヴァイオレット・エヴァーガーデン』初の海外オーケストラコンサートが開催決定！"
                />
                <Detail
                    date="2024.05.16"
                    link="https://violet-evergarden.jp/news/?id=204"
                    theme="『ヴァイオレット・エヴァーガーデン』初の海外オーケストラコンサートが開催決定！"
                />
                <Detail
                    date="2024.05.16"
                    link="https://violet-evergarden.jp/news/?id=204"
                    theme="『ヴァイオレット・エヴァーガーデン』初の海外オーケストラコンサートが開催決定！"
                />
            </div>
        </div>
    )
}

export default News;