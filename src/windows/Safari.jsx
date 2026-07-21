import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components";
import {
    ChevronLeft,
    ChevronRight,
    Copy,
    PanelLeft,
    Plus,
    Search,
    Share,
    ShieldHalf,
} from "lucide-react";
import { journey } from "#constants";

const Safari = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="safari" />

                <PanelLeft className="ml-10 icon" />

                <div className="flex items-center gap-1 ml-5">
                    <ChevronLeft className="icon" />
                    <ChevronRight className="icon" />
                </div>

                <div className="flex-1 flex-center gap-3">
                    <ShieldHalf className="icon" />

                    <div className="search">
                        <Search className="icon" />

                        <input
                            type="text"
                            placeholder="Beyond the Code — What I Do"
                            className="flex-1"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-5">
                    <Share className="icon" />
                    <Plus className="icon" />
                    <Copy className="icon" />
                </div>
            </div>

            <div className="blog">
                <h2>{journey.title}</h2>

                <div className="space-y-8">
                    <div className="blog-post">
                        <div className="col-span-2">
                            <img
                                src={journey.image}
                                alt="Abdullah"
                            />
                        </div>

                        <div className="content">
                            {journey.description.map((text, index) => (
                                <p key={index}>{text}</p>
                            ))}


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;