import { Request, Response } from 'express';
import { MusicService } from '@application/music/musicService';
import { Music } from '@domain/music/music';

const musicService = new MusicService();

export const createMusic = (request: Request, response: Response): void => {
    const newMusic: Music = request.body;
    const music = musicService.createMusic(newMusic);

    response.status(201).json(music);
};

export const getAllMusic = (request: Request, response: Response): void => {
    const musicList = musicService.getAllMusic();

    response.status(200).json(musicList);
};

export const getMusicById = (request: Request, response: Response): void => {
    const { id } = request.params;
    const music = musicService.getMusicById(id);

    if (music) {
        response.status(200).json(music);
    } else {
        response.status(404).json({ message: 'Music not found' });
    }
};