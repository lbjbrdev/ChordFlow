export interface Music {
    id: string;
    title: string;
    composer: string;
    performer: string;
    chords: {
        [instrument: string]: string;
    };
    rhythm: string;
    videoLessonUrl: string;
    officialSongUrl: string;
    createdAt: string;
    updatedAt: string;
};