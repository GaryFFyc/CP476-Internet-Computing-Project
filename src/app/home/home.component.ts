import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
    masonryImages: { name: string; image: string }[];
    constructor() {
        this.masonryImages = [];
        // for (let i = 0; i < 40; i++) {
        //   this.masonryImages.push({ name: 'sample', image: '../../assets/Google.svg' });
        // }
        this.masonryImages.push({
            name: "MA121",
            image: "../../assets/holtMath.jpg"
        });
        this.masonryImages.push({
            name: "CP476",
            image: "../../assets/internet-computing.jpg"
        });
        this.masonryImages.push({
            name: "AS101",
            image: "../../assets/theShapeOfSpace.jpg"
        });
        this.masonryImages.push({
            name: "PC299",
            image: "../../assets/physics.jpg"
        });
        this.masonryImages.push({
            name: "EC999",
            image: "../../assets/economics.jpg"
        });
        this.masonryImages.push({
            name: "CO000",
            image: "../../assets/collegeAccounting.jpg"
        });
        this.masonryImages.push({
            name: "CP898",
            image: "../../assets/Algorithems.jpg"
        });
        this.masonryImages.push({
            name: "CP476",
            image: "../../assets/internet-computing.jpg"
        });
        this.masonryImages.push({
            name: "AS101",
            image: "../../assets/theShapeOfSpace.jpg"
        });
        this.masonryImages.push({
            name: "PC299",
            image: "../../assets/physics.jpg"
        });
        this.masonryImages.push({
            name: "EC999",
            image: "../../assets/economics.jpg"
        });
        this.masonryImages.push({
            name: "CO000",
            image: "../../assets/collegeAccounting.jpg"
        });
        this.masonryImages.push({
            name: "CP898",
            image: "../../assets/Algorithems.jpg"
        });
        this.masonryImages.push({
            name: "CP476",
            image: "../../assets/internet-computing.jpg"
        });
        this.masonryImages.push({
            name: "AS101",
            image: "../../assets/theShapeOfSpace.jpg"
        });
        this.masonryImages.push({
            name: "PC299",
            image: "../../assets/physics.jpg"
        });
        this.masonryImages.push({
            name: "EC999",
            image: "../../assets/economics.jpg"
        });
        this.masonryImages.push({
            name: "CO000",
            image: "../../assets/collegeAccounting.jpg"
        });
        this.masonryImages.push({
            name: "CP898",
            image: "../../assets/Algorithems.jpg"
        });
    }
    ngOnInit(): void { }
}
