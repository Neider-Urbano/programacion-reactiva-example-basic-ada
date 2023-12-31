import { of } from "rxjs";
import { map } from "rxjs/operators";

of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
  .pipe(
    map((data) => {
      if (data % 2 !== 0) {
        return data;
      }
    })
  )
  .subscribe((data) => console.log(data));
