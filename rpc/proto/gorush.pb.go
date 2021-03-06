// Code generated by protoc-gen-go. DO NOT EDIT.
// source: gorush.proto

/*
Package proto is a generated protocol buffer package.

It is generated from these files:
	gorush.proto

It has these top-level messages:
	Alert
	NotificationRequest
	NotificationReply
	HealthCheckRequest
	HealthCheckResponse
*/
package proto

import proto1 "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"

import (
	context "golang.org/x/net/context"
	grpc "google.golang.org/grpc"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto1.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto1.ProtoPackageIsVersion2 // please upgrade the proto package

type HealthCheckResponse_ServingStatus int32

const (
	HealthCheckResponse_UNKNOWN     HealthCheckResponse_ServingStatus = 0
	HealthCheckResponse_SERVING     HealthCheckResponse_ServingStatus = 1
	HealthCheckResponse_NOT_SERVING HealthCheckResponse_ServingStatus = 2
)

var HealthCheckResponse_ServingStatus_name = map[int32]string{
	0: "UNKNOWN",
	1: "SERVING",
	2: "NOT_SERVING",
}
var HealthCheckResponse_ServingStatus_value = map[string]int32{
	"UNKNOWN":     0,
	"SERVING":     1,
	"NOT_SERVING": 2,
}

func (x HealthCheckResponse_ServingStatus) String() string {
	return proto1.EnumName(HealthCheckResponse_ServingStatus_name, int32(x))
}
func (HealthCheckResponse_ServingStatus) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor0, []int{4, 0}
}

type Alert struct {
	Title    string `protobuf:"bytes,1,opt,name=title" json:"title,omitempty"`
	Body     string `protobuf:"bytes,2,opt,name=body" json:"body,omitempty"`
	Subtitle string `protobuf:"bytes,3,opt,name=subtitle" json:"subtitle,omitempty"`
}

func (m *Alert) Reset()                    { *m = Alert{} }
func (m *Alert) String() string            { return proto1.CompactTextString(m) }
func (*Alert) ProtoMessage()               {}
func (*Alert) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{0} }

func (m *Alert) GetTitle() string {
	if m != nil {
		return m.Title
	}
	return ""
}

func (m *Alert) GetBody() string {
	if m != nil {
		return m.Body
	}
	return ""
}

func (m *Alert) GetSubtitle() string {
	if m != nil {
		return m.Subtitle
	}
	return ""
}

type NotificationRequest struct {
	Tokens   []string `protobuf:"bytes,1,rep,name=tokens" json:"tokens,omitempty"`
	Platform int32    `protobuf:"varint,2,opt,name=platform" json:"platform,omitempty"`
	Message  string   `protobuf:"bytes,3,opt,name=message" json:"message,omitempty"`
	Title    string   `protobuf:"bytes,4,opt,name=title" json:"title,omitempty"`
	Topic    string   `protobuf:"bytes,5,opt,name=topic" json:"topic,omitempty"`
	Key      string   `protobuf:"bytes,6,opt,name=key" json:"key,omitempty"`
	Badge    int32    `protobuf:"varint,7,opt,name=badge" json:"badge,omitempty"`
	Category string   `protobuf:"bytes,8,opt,name=category" json:"category,omitempty"`
	Alert    *Alert   `protobuf:"bytes,9,opt,name=alert" json:"alert,omitempty"`
}

func (m *NotificationRequest) Reset()                    { *m = NotificationRequest{} }
func (m *NotificationRequest) String() string            { return proto1.CompactTextString(m) }
func (*NotificationRequest) ProtoMessage()               {}
func (*NotificationRequest) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{1} }

func (m *NotificationRequest) GetTokens() []string {
	if m != nil {
		return m.Tokens
	}
	return nil
}

func (m *NotificationRequest) GetPlatform() int32 {
	if m != nil {
		return m.Platform
	}
	return 0
}

func (m *NotificationRequest) GetMessage() string {
	if m != nil {
		return m.Message
	}
	return ""
}

func (m *NotificationRequest) GetTitle() string {
	if m != nil {
		return m.Title
	}
	return ""
}

func (m *NotificationRequest) GetTopic() string {
	if m != nil {
		return m.Topic
	}
	return ""
}

func (m *NotificationRequest) GetKey() string {
	if m != nil {
		return m.Key
	}
	return ""
}

func (m *NotificationRequest) GetBadge() int32 {
	if m != nil {
		return m.Badge
	}
	return 0
}

func (m *NotificationRequest) GetCategory() string {
	if m != nil {
		return m.Category
	}
	return ""
}

func (m *NotificationRequest) GetAlert() *Alert {
	if m != nil {
		return m.Alert
	}
	return nil
}

type NotificationReply struct {
	Success bool  `protobuf:"varint,1,opt,name=success" json:"success,omitempty"`
	Counts  int32 `protobuf:"varint,2,opt,name=counts" json:"counts,omitempty"`
}

func (m *NotificationReply) Reset()                    { *m = NotificationReply{} }
func (m *NotificationReply) String() string            { return proto1.CompactTextString(m) }
func (*NotificationReply) ProtoMessage()               {}
func (*NotificationReply) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{2} }

func (m *NotificationReply) GetSuccess() bool {
	if m != nil {
		return m.Success
	}
	return false
}

func (m *NotificationReply) GetCounts() int32 {
	if m != nil {
		return m.Counts
	}
	return 0
}

type HealthCheckRequest struct {
	Service string `protobuf:"bytes,1,opt,name=service" json:"service,omitempty"`
}

func (m *HealthCheckRequest) Reset()                    { *m = HealthCheckRequest{} }
func (m *HealthCheckRequest) String() string            { return proto1.CompactTextString(m) }
func (*HealthCheckRequest) ProtoMessage()               {}
func (*HealthCheckRequest) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{3} }

func (m *HealthCheckRequest) GetService() string {
	if m != nil {
		return m.Service
	}
	return ""
}

type HealthCheckResponse struct {
	Status HealthCheckResponse_ServingStatus `protobuf:"varint,1,opt,name=status,enum=proto.HealthCheckResponse_ServingStatus" json:"status,omitempty"`
}

func (m *HealthCheckResponse) Reset()                    { *m = HealthCheckResponse{} }
func (m *HealthCheckResponse) String() string            { return proto1.CompactTextString(m) }
func (*HealthCheckResponse) ProtoMessage()               {}
func (*HealthCheckResponse) Descriptor() ([]byte, []int) { return fileDescriptor0, []int{4} }

func (m *HealthCheckResponse) GetStatus() HealthCheckResponse_ServingStatus {
	if m != nil {
		return m.Status
	}
	return HealthCheckResponse_UNKNOWN
}

func init() {
	proto1.RegisterType((*Alert)(nil), "proto.Alert")
	proto1.RegisterType((*NotificationRequest)(nil), "proto.NotificationRequest")
	proto1.RegisterType((*NotificationReply)(nil), "proto.NotificationReply")
	proto1.RegisterType((*HealthCheckRequest)(nil), "proto.HealthCheckRequest")
	proto1.RegisterType((*HealthCheckResponse)(nil), "proto.HealthCheckResponse")
	proto1.RegisterEnum("proto.HealthCheckResponse_ServingStatus", HealthCheckResponse_ServingStatus_name, HealthCheckResponse_ServingStatus_value)
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// Client API for Gorush service

type GorushClient interface {
	Send(ctx context.Context, in *NotificationRequest, opts ...grpc.CallOption) (*NotificationReply, error)
}

type gorushClient struct {
	cc *grpc.ClientConn
}

func NewGorushClient(cc *grpc.ClientConn) GorushClient {
	return &gorushClient{cc}
}

func (c *gorushClient) Send(ctx context.Context, in *NotificationRequest, opts ...grpc.CallOption) (*NotificationReply, error) {
	out := new(NotificationReply)
	err := grpc.Invoke(ctx, "/proto.Gorush/Send", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for Gorush service

type GorushServer interface {
	Send(context.Context, *NotificationRequest) (*NotificationReply, error)
}

func RegisterGorushServer(s *grpc.Server, srv GorushServer) {
	s.RegisterService(&_Gorush_serviceDesc, srv)
}

func _Gorush_Send_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(NotificationRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GorushServer).Send(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/proto.Gorush/Send",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GorushServer).Send(ctx, req.(*NotificationRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Gorush_serviceDesc = grpc.ServiceDesc{
	ServiceName: "proto.Gorush",
	HandlerType: (*GorushServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Send",
			Handler:    _Gorush_Send_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "gorush.proto",
}

// Client API for Health service

type HealthClient interface {
	Check(ctx context.Context, in *HealthCheckRequest, opts ...grpc.CallOption) (*HealthCheckResponse, error)
}

type healthClient struct {
	cc *grpc.ClientConn
}

func NewHealthClient(cc *grpc.ClientConn) HealthClient {
	return &healthClient{cc}
}

func (c *healthClient) Check(ctx context.Context, in *HealthCheckRequest, opts ...grpc.CallOption) (*HealthCheckResponse, error) {
	out := new(HealthCheckResponse)
	err := grpc.Invoke(ctx, "/proto.Health/Check", in, out, c.cc, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// Server API for Health service

type HealthServer interface {
	Check(context.Context, *HealthCheckRequest) (*HealthCheckResponse, error)
}

func RegisterHealthServer(s *grpc.Server, srv HealthServer) {
	s.RegisterService(&_Health_serviceDesc, srv)
}

func _Health_Check_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(HealthCheckRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(HealthServer).Check(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/proto.Health/Check",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(HealthServer).Check(ctx, req.(*HealthCheckRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Health_serviceDesc = grpc.ServiceDesc{
	ServiceName: "proto.Health",
	HandlerType: (*HealthServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Check",
			Handler:    _Health_Check_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "gorush.proto",
}

func init() { proto1.RegisterFile("gorush.proto", fileDescriptor0) }

var fileDescriptor0 = []byte{
	// 424 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x74, 0x92, 0xcf, 0x8e, 0xd3, 0x30,
	0x10, 0xc6, 0x37, 0xdb, 0x26, 0x6d, 0xa7, 0x0b, 0x94, 0x59, 0x84, 0x4c, 0x4f, 0x95, 0x4f, 0x3d,
	0xf5, 0x50, 0x6e, 0x1c, 0x56, 0x20, 0xb4, 0xda, 0x45, 0x88, 0xac, 0xe4, 0xf2, 0xe7, 0x88, 0x1c,
	0xd7, 0x9b, 0x46, 0xcd, 0xc6, 0x21, 0x76, 0x90, 0xf2, 0x1c, 0x3c, 0x2c, 0x57, 0x64, 0x3b, 0x5e,
	0xa8, 0x14, 0x4e, 0xf1, 0x6f, 0x66, 0x3c, 0x33, 0xdf, 0x17, 0xc3, 0x45, 0xae, 0x9a, 0x56, 0x1f,
	0x36, 0x75, 0xa3, 0x8c, 0xc2, 0xd8, 0x7d, 0xe8, 0x27, 0x88, 0xdf, 0x95, 0xb2, 0x31, 0xf8, 0x02,
	0x62, 0x53, 0x98, 0x52, 0x92, 0x68, 0x15, 0xad, 0x67, 0xcc, 0x03, 0x22, 0x8c, 0x33, 0xb5, 0xef,
	0xc8, 0xb9, 0x0b, 0xba, 0x33, 0x2e, 0x61, 0xaa, 0xdb, 0xcc, 0x17, 0x8f, 0x5c, 0xfc, 0x91, 0xe9,
	0xef, 0x08, 0x2e, 0x53, 0x65, 0x8a, 0xfb, 0x42, 0x70, 0x53, 0xa8, 0x8a, 0xc9, 0x1f, 0xad, 0xd4,
	0x06, 0x5f, 0x42, 0x62, 0xd4, 0x51, 0x56, 0x9a, 0x44, 0xab, 0xd1, 0x7a, 0xc6, 0x7a, 0xb2, 0xbd,
	0xea, 0x92, 0x9b, 0x7b, 0xd5, 0x3c, 0xb8, 0x19, 0x31, 0x7b, 0x64, 0x24, 0x30, 0x79, 0x90, 0x5a,
	0xf3, 0x3c, 0x8c, 0x09, 0xf8, 0x77, 0xd7, 0xf1, 0xbf, 0xbb, 0xda, 0xa8, 0xaa, 0x0b, 0x41, 0xe2,
	0x3e, 0x6a, 0x01, 0x17, 0x30, 0x3a, 0xca, 0x8e, 0x24, 0x2e, 0x66, 0x8f, 0xb6, 0x2e, 0xe3, 0xfb,
	0x5c, 0x92, 0x89, 0x1b, 0xe8, 0xc1, 0x6e, 0x22, 0xb8, 0x91, 0xb9, 0x6a, 0x3a, 0x32, 0xf5, 0xaa,
	0x02, 0x23, 0x85, 0x98, 0x5b, 0x93, 0xc8, 0x6c, 0x15, 0xad, 0xe7, 0xdb, 0x0b, 0x6f, 0xe1, 0xc6,
	0x19, 0xc7, 0x7c, 0x8a, 0x5e, 0xc3, 0xf3, 0x53, 0xe1, 0x75, 0xd9, 0x59, 0x09, 0xba, 0x15, 0x42,
	0x6a, 0xed, 0x6c, 0x9d, 0xb2, 0x80, 0xd6, 0x10, 0xa1, 0xda, 0xca, 0xe8, 0x5e, 0x76, 0x4f, 0x74,
	0x03, 0x78, 0x2b, 0x79, 0x69, 0x0e, 0xef, 0x0f, 0x52, 0x1c, 0x83, 0x7d, 0xb6, 0x8f, 0x6c, 0x7e,
	0x16, 0x22, 0xfc, 0x9e, 0x80, 0xf4, 0x57, 0x04, 0x97, 0x27, 0x17, 0x74, 0xad, 0x2a, 0x2d, 0xf1,
	0x2d, 0x24, 0xda, 0x70, 0xd3, 0xfa, 0xc1, 0x4f, 0xb7, 0xeb, 0x7e, 0xe7, 0x81, 0xda, 0xcd, 0xce,
	0xf6, 0xaa, 0xf2, 0x9d, 0xab, 0x67, 0xfd, 0x3d, 0xfa, 0x06, 0x9e, 0x9c, 0x24, 0x70, 0x0e, 0x93,
	0x2f, 0xe9, 0xc7, 0xf4, 0xee, 0x5b, 0xba, 0x38, 0xb3, 0xb0, 0xbb, 0x66, 0x5f, 0x3f, 0xa4, 0x37,
	0x8b, 0x08, 0x9f, 0xc1, 0x3c, 0xbd, 0xfb, 0xfc, 0x3d, 0x04, 0xce, 0xb7, 0xb7, 0x90, 0xdc, 0xb8,
	0xc7, 0x86, 0x57, 0x30, 0xde, 0xc9, 0x6a, 0x8f, 0xcb, 0x7e, 0xfe, 0xc0, 0xe3, 0x58, 0x92, 0xc1,
	0x5c, 0x5d, 0x76, 0xf4, 0xcc, 0x76, 0xf2, 0x2b, 0xe3, 0x15, 0xc4, 0x6e, 0x6d, 0x7c, 0x35, 0x24,
	0xc5, 0x77, 0x5a, 0xfe, 0x5f, 0x65, 0x96, 0xb8, 0xd4, 0xeb, 0x3f, 0x01, 0x00, 0x00, 0xff, 0xff,
	0xd4, 0x3a, 0x7f, 0x33, 0x07, 0x03, 0x00, 0x00,
}
