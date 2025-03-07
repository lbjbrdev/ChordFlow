import { Music } from '@domain/music/music';

export class MusicService {
    private musicDatabase: Music[] = [];

    createMusic(music: Music): Music {
        this.musicDatabase.push(music);

        return music;
    };

    getAllMusic(): Music[] {
        return this.musicDatabase;
    };

    getMusicById(id: string): Music | undefined {
        return this.musicDatabase.find(music => music.id === id);
    };
};