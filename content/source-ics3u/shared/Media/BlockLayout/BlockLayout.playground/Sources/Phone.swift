//
//  Phone.swift
//  
//
//  Created by Russell Gordon on 2024-09-26.
//
import SwiftUI

public struct Phone<Content>: View where Content : View {
    
    let content: () -> Content
    
    @Environment(\.colorScheme) var colorScheme
    
    public var body: some View {
        ZStack {
            
            if colorScheme == .dark {
                Image(nsImage: NSImage(named: "phone-dark.png")!)
                    .resizable()
                    .frame(width: 375, height: 745)
            } else {
                Image(nsImage: NSImage(named: "phone.png")!)
                    .resizable()
                    .frame(width: 375, height: 745)
            }

            content()
                .frame(width: 302, height: 610)
                .padding(.top, 21)

        }
    }
    
    public init(@ViewBuilder content: @escaping () -> Content) {
        self.content = content
    }
}
