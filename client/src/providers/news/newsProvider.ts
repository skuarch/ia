import {Injectable} from '@angular/core';
import {News} from '../../model/news/news';


@Injectable()
export class NewsProvider {
    getLatest(): Promise<News> {
        //TODO: Implement real logic
        return Promise.resolve(new News("New ways of working", "Test content", "Test content"));
    }
}