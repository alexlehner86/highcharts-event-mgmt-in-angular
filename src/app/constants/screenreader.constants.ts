import { TabLabelAndContent } from 'src/app/models/tabs.config';

export enum ScreenreaderName {
    ChromeVox = 'ChromeVox',
    Jaws = 'JAWS',
    Narrator = 'Narrator',
    Nvda = 'NVDA',
    Other = 'Other',
    SystemAccess = 'System Access',
    VoiceOver = 'VoiceOver',
    ZoomTextFusion = 'ZoomText/Fusion',
}

export const SCREENREADER_TABS: TabLabelAndContent<ScreenreaderName>[] = [
    {
        label: ScreenreaderName.Jaws,
        content:
            'JAWS ("Job Access With Speech") is a computer screen reader program for Microsoft Windows that allows blind and visually impaired users'
            + ' to read the screen either with a text-to-speech output or by a refreshable Braille display. JAWS is produced by the Blind and'
            + ' Low Vision Group of Freedom Scientific. (© Wikipedia)',
    },
    {
        label: ScreenreaderName.Nvda,
        content:
            'NonVisual Desktop Access (NVDA) is a free and open-source, portable screen reader for Microsoft Windows. The project was started by'
            + ' Michael Curran in 2006. NVDA is programmed in Python and is licensed under the GNU General Public License version 2. (© Wikipedia)',
    },
    {
        label: ScreenreaderName.VoiceOver,
        content:
            'VoiceOver is a screen reader built into Apple Inc.\'s macOS, iOS, tvOS, watchOS, and iPod operating systems. By using VoiceOver,'
            + ' the user can access their Macintosh or iOS device based on spoken descriptions and, in the case of the Mac, the keyboard. (© Wikipedia)',
    },
    {
        label: ScreenreaderName.ZoomTextFusion,
        content:
            'ZoomText is a screen magnifier for Microsoft Windows developed by Ai Squared. The first version was released for DOS in 1988, and the first'
            + ' version for Windows was released in 1991. ZoomText is available in two editions: ZoomText Magnifier and ZoomText Magnifier/Reader,'
            + ' which includes a built-in screen reader. (© Wikipedia)',
    },
    {
        label: ScreenreaderName.SystemAccess,
        content: 'System Access is a free web-activated screen reader developed by Serotek.',
    },
    {
        label: ScreenreaderName.Narrator,
        content: 'Narrator is a screen-reading app that\'s built into Windows 10 and 11.',
    },
    {
        label: ScreenreaderName.ChromeVox,
        content: 'ChromeVox is an extension for Chrome on Windows and Mac OS X which operates as an alternative screen reader for Web content.',
    },
    {
        label: ScreenreaderName.Other,
        content: 'Other available screen readers include TalkBack, Orca and BRLTTY.',
    },
];