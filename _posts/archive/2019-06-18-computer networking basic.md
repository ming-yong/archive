---
title: (Archive) TheNewBoston | Basic Computer Networking
description: Learning notes about basic computer networking.
categories: [archive] 
tags: [archive] 
---

## References

- [Computer Networking by thenewboston](https://www.youtube.com/watch?v=ueVnSz_lXEs&list=PL6gx4Cwl9DGBpuvPW0aHa7mKdn_k9SPKO)

## Cover topics

- [Basic](#basic)
- [Topology](#topology)
- [OSI model](#osi-model)
- [Devices](#devices)
- [IP Address](#ip-address)
- [DHCP and DNS](#dhcp-and-dns)
- [Other topic in the tutorial](#other-topic-in-the-tutorial)

## Basic

- Computers connected to each other to **share data** forms a **Network**.

- Classify by range and size, network can be divided into three types: **LAN(Local Area Network), MAN(Metropolitan Area Network), WAN(Wide Area Network)**.

- In a network, **Node(the devices, PC, server, etc)**s are connected with **communication media(the cable, WiFi, etc)**.

- PC uses a **NIC(Network Interface Card)**, which connects PC's motherboard and ethernet cable(communication media), to connect to a network.

- **Workstation like PC(client)** will send request to **host(web server)** and get their requested file from host.

- **Protocol** is the rule of communication between client and host, it follows three rules: one "person" speak at a time, response is expected and specific message receive specific response.

An example of protocol: http(protocol)://www.website.org(server name)/index.php(file name).

[back to top](#cover-topics)

## Topology

When setting up network, there are a few **Topology**(the layout of a network) to choose from.

1. **Bus** topology required a terminator and is cheap but easy to break.
2. **Ring** topology is more expensive than bus but "stronger" as well.
3. **Star** is the most common topology as it costs less and is easy to expand, device are independent in terms of sending signal but once the router/switch breaks, the whole things went down.
4. **Mesh** on the other hand, handles the problem but is much more expansive to set up and expand. Mesh is often use in MAN and WAN.

[back to top](#cover-topics)

## OSI model

- Application: interact with user, exp:chrome.
- Presentation: convert computer language to machine language.
- Session: conversation between computer.
- Transport: making sure packets(chunks of data) are delivered reliably.
- Network: determine the best route for data (router).
- Data Link: checking for errors(NIC).
- Physical: cable/fiber optics/electric signal.

[back to top](#cover-topics)

## Devices

- **Modem** is used to connect the biggest network **INTERNET** and **home network**, it converts digital signal to analog signal(signal that can be send by cable) and uses DOCSIS to communicate. To choose a modem, go to your Internet Service Provider(ISP) website and look for approved modem, choose the newest DOCSIS and desired channels.

- **Router** joins network together, it acts as a gateway (whether you want to "go out" from your network to another network). It can be either wired or wireless, connecting modem and devices in the network.

**INTERNET**-connect-**modem**-connect-**(Home Network)router**-connect-**devices**

- **Switch** is used to connect more devices. There are unmanage switch and manage switch, manage switch gives you more control over device but required more set up.

- **Repeater(Extender)** rebroadcasts and boosts the signal, switch and router also act as a repeater.

[back to top](#cover-topics)

## IP Address

- To convert bit to value, calculate 2 to the power of bit.

- IP address contains **Network ID** amd **Host ID**.

- **Subnetting** is used to determine which part of IP address is for Network ID(1) and which part is for Host ID(0).

- **Network IP Address** can be calculated using **IP address** and **Subnet mask**:
  - Convert network ip address using IP address and subnet mask into binary(exp 169.174.141.0).
  - To calculate the number of host: 2 to the power of number of Host ID(how many number 0 in subnet mask, exp 2 to the power of 4 equals 16). Take away 2(one for broadcast and another for network IP) and you will left with number of host(16-2=14).
  - so the usable hosts will be from 169.174.141.1 to 169.174.141.14.

A short hand of IP address and subnet mask is 108.2.2.74/20(CIDR, means write 1 for 20 times in subnet).

[back to top](#cover-topics)

## DHCP and DNS

- **Dynamic Host Configuration Protocol(DHCP)** assign IP address automatically, it is built in in most router. When connecting new device(for example a PC), the PC will first broadcast a discover message to every device on the network, router will then send back a DHCP offer, PC will send a request saying it will use that IP address, and then router will send AcK containing other information like subnet mask to the PC.

- **Domain Name System** is a server that store IP address, so when user type in domain name(for example abc.com), DNS will translate the domain name in to IP address(abc.com is 1.2.3.4) and send it back to PC, PC will then be able to connect abc.com through the internet(requesting 1.2.3.4 and internet will connect the website's server).

[back to top](#cover-topics)

## Other topic in the tutorial

- Setting up cloud server with Digital Ocean.
- Connecting to server using PuTTY.
- Creating SSH keys.
- Changing the default SSH port(22).
- Setting up FireWall.
- LAMP stack(Linux Apache MySQL PHP).
- Quick set up homepage.
- Installing PhpMyAdmin.
- Securing PhpMyAdmin with htaccess.
- Using FileZilla with SFTP(more secure than FTP).
- Routing table
- iptables Firewall rules

[back to top](#cover-topics)
