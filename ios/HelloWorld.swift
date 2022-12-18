//
//  HelloWorld.swift
//  alfred
//
//  Created by Tommy Lee on 12/18/22.
//

import Foundation
import UIKit

@objc(HelloWorld)

class HelloWorld: NSObject {
  
  @objc
  func ShowMessage(_ message: NSString, duration:Double) -> Void {
    let alert = UIAlertController(title: nil, message: message as String, preferredStyle: .alert
    )
    let _seconds:Double = duration;
    alert.view.backgroundColor = .black
    alert.view.alpha = 0.5
    alert.view.layer.cornerRadius = 14
    
    DispatchQueue.main.async {
      
    }
  }
}
