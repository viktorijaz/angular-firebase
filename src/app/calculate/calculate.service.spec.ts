import { fakeAsync, inject, TestBed } from '@angular/core/testing'
import { HttpClientModule } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { CalculateService } from './calculate.service'

const mockResponse = 3

describe('Calculate Fibonacci Service', () => {
  let mockHttp: jasmine.SpyObj<HttpClient>
  let mockFirstore: {}
  const fibNumber = 3
  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('HttpClient', ['get'])
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {
          provide: HttpClient,
          useValue: mockHttp,
        },
        {
          provide: AngularFirestore,
          useValue: mockFirstore,
        },
        CalculateService,
      ],
    })
    mockHttp.get.and.returnValue(of(fibNumber))
  })

  it('loadFibonacci function claculates correct number', fakeAsync(
    inject([CalculateService], (calculateService: CalculateService) => {
      const expectedUrl = `https://us-central1-ng-syncvr.cloudfunctions.net/calculation/${fibNumber}`

      calculateService.loadFibonacci(fibNumber).subscribe((res: any) => {
        expect(mockHttp.get).toHaveBeenCalledWith(expectedUrl)
        expect(res).toEqual(mockResponse)
      })
    }),
  ))
})
